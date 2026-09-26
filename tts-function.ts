// Wonder Academy - cloud narration in the parent's cloned voice.
// OPTIONAL. Only needed for the paid live-voice option (ElevenLabs).
// The free voice library (voice-library/COLAB.md) does not need this file at all.
//
// Deploy as a Supabase Edge Function named exactly "tts".
// Secret required (Edge Functions > Secrets): ELEVENLABS_API_KEY
// Optional secret: TTS_MODEL (default eleven_flash_v2_5)
//
// The app calls this with the signed-in parent's token. The function verifies
// the token, looks for a cached MP3 in the private "tts-cache" bucket, and only
// calls ElevenLabs when a page has never been spoken before. Every sentence
// therefore costs credits once, ever, across all devices.

import { createClient } from "npm:@supabase/supabase-js@2";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

async function sha256(s: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405, headers: CORS });

  const url = Deno.env.get("SUPABASE_URL")!;
  const anon = Deno.env.get("SUPABASE_ANON_KEY")!;
  const service = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const elKey = Deno.env.get("ELEVENLABS_API_KEY");
  const model = Deno.env.get("TTS_MODEL") || "eleven_flash_v2_5";

  const authHeader = req.headers.get("Authorization") ?? "";
  const userClient = createClient(url, anon, { global: { headers: { Authorization: authHeader } } });
  const { data: { user } } = await userClient.auth.getUser();
  if (!user) return new Response("Unauthorized", { status: 401, headers: CORS });

  let body: { text?: string; voice_id?: string; check?: boolean };
  try { body = await req.json(); } catch { return new Response("Bad JSON", { status: 400, headers: CORS }); }

  if (body.check) {
    return new Response(JSON.stringify({ ok: true, hasKey: !!elKey, model }), {
      headers: { ...CORS, "Content-Type": "application/json" },
    });
  }

  const text = (body.text || "").trim();
  const voiceId = (body.voice_id || "").trim();
  if (!text || text.length > 2500) return new Response("Text missing or too long", { status: 400, headers: CORS });
  if (!/^[A-Za-z0-9]{8,40}$/.test(voiceId)) return new Response("Bad voice id", { status: 400, headers: CORS });
  if (!elKey) return new Response("ELEVENLABS_API_KEY secret not set", { status: 500, headers: CORS });

  const admin = createClient(url, service);
  const hash = await sha256(model + "|" + voiceId + "|" + text);
  const path = `${user.id}/${voiceId}/${hash}.mp3`;

  const cached = await admin.storage.from("tts-cache").download(path);
  if (cached.data) {
    return new Response(cached.data, { headers: { ...CORS, "Content-Type": "audio/mpeg", "X-Cache": "hit" } });
  }

  const r = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_22050_32`, {
    method: "POST",
    headers: { "xi-api-key": elKey, "Content-Type": "application/json" },
    body: JSON.stringify({
      text,
      model_id: model,
      voice_settings: { stability: 0.55, similarity_boost: 0.8, style: 0.2, use_speaker_boost: true },
    }),
  });
  if (!r.ok) {
    const msg = await r.text();
    return new Response("ElevenLabs error " + r.status + ": " + msg.slice(0, 300), { status: 502, headers: CORS });
  }
  const audio = await r.arrayBuffer();
  await admin.storage.from("tts-cache").upload(path, audio, { contentType: "audio/mpeg", upsert: true });
  return new Response(audio, { headers: { ...CORS, "Content-Type": "audio/mpeg", "X-Cache": "miss" } });
});
