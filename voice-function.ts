// Wonder Academy - in-app voice generator.
// Deploy as a Supabase Edge Function named exactly:  voice
//
// No API key. No PC. No Python. The app calls this and it writes MP3s straight
// into your own voice-library bucket.
//
// It tries two free providers and reports which one worked, so if one is ever
// blocked the other still produces audio:
//   1. Microsoft Edge TTS   - best quality, neural voices
//   2. Google Translate TTS - simpler fallback, still far better than a phone robot voice

import { createClient } from "npm:@supabase/supabase-js@2";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const BUCKET = "voice-library";
const TRUSTED_TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
const GEC_VERSION = "1-131.0.2903.99";

function j(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, "Content-Type": "application/json" },
  });
}

async function sha256Hex(s: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

/** Key the app uses too: sha256(voiceName + "|" + rawText), first 32 hex chars. */
async function keyFor(voiceName: string, rawText: string): Promise<string> {
  return (await sha256Hex(voiceName + "|" + rawText.trim())).slice(0, 32);
}

/** Microsoft's Sec-MS-GEC: sha256 of (windows file time rounded to 5 min + token). */
async function secMsGec(): Promise<string> {
  const WINDOWS_EPOCH = Date.UTC(1601, 0, 1);
  let ticks = (Date.now() - WINDOWS_EPOCH) * 10000;
  ticks = ticks - (ticks % 3_000_000_000);
  return (await sha256Hex(`${ticks}${TRUSTED_TOKEN}`)).toUpperCase();
}

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

function uuid() {
  return crypto.randomUUID().replace(/-/g, "");
}

/** ---------- provider 1: Microsoft Edge TTS over WebSocket ---------- */
async function edgeTts(text: string, voice: string, rate: string): Promise<Uint8Array> {
  const gec = await secMsGec();
  const url =
    `wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1` +
    `?TrustedClientToken=${TRUSTED_TOKEN}&Sec-MS-GEC=${gec}` +
    `&Sec-MS-GEC-Version=${GEC_VERSION}&ConnectionId=${uuid()}`;

  return await new Promise<Uint8Array>((resolve, reject) => {
    const ws = new WebSocket(url);
    ws.binaryType = "arraybuffer";
    const chunks: Uint8Array[] = [];
    const timer = setTimeout(() => { try { ws.close(); } catch { /* ignore */ } reject(new Error("edge timeout")); }, 25000);

    ws.onopen = () => {
      const now = new Date().toISOString();
      ws.send(
        `X-Timestamp:${now}\r\nContent-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n` +
        `{"context":{"synthesis":{"audio":{"metadataoptions":{"sentenceBoundaryEnabled":"false","wordBoundaryEnabled":"false"},"outputFormat":"audio-24khz-48kbitrate-mono-mp3"}}}}`
      );
      const ssml =
        `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='en-US'>` +
        `<voice name='${voice}'><prosody pitch='+0Hz' rate='${rate}' volume='+0%'>${esc(text)}</prosody></voice></speak>`;
      ws.send(
        `X-RequestId:${uuid()}\r\nContent-Type:application/ssml+xml\r\n` +
        `X-Timestamp:${new Date().toISOString()}Z\r\nPath:ssml\r\n\r\n${ssml}`
      );
    };

    ws.onmessage = (ev) => {
      if (typeof ev.data === "string") {
        if (ev.data.includes("Path:turn.end")) {
          clearTimeout(timer);
          try { ws.close(); } catch { /* ignore */ }
          if (!chunks.length) { reject(new Error("edge returned no audio")); return; }
          let total = 0; chunks.forEach((c) => total += c.length);
          const out = new Uint8Array(total);
          let off = 0; chunks.forEach((c) => { out.set(c, off); off += c.length; });
          resolve(out);
        }
        return;
      }
      // Binary frame: 2-byte big-endian header length, header text, then audio bytes.
      const view = new Uint8Array(ev.data as ArrayBuffer);
      if (view.length < 2) return;
      const headerLen = (view[0] << 8) | view[1];
      const header = new TextDecoder().decode(view.slice(2, 2 + headerLen));
      if (header.includes("Path:audio")) {
        chunks.push(view.slice(2 + headerLen));
      }
    };

    ws.onerror = () => { clearTimeout(timer); reject(new Error("edge websocket error")); };
    ws.onclose = () => { clearTimeout(timer); };
  });
}

/** ---------- provider 2: Google Translate TTS over plain HTTPS ---------- */
async function googleTts(text: string, lang: string): Promise<Uint8Array> {
  // This endpoint caps at roughly 200 characters, so split on punctuation.
  const parts: string[] = [];
  let cur = "";
  for (const piece of text.split(/(?<=[.!?,;:])\s+/)) {
    if ((cur + " " + piece).trim().length > 190 && cur) { parts.push(cur.trim()); cur = ""; }
    cur += " " + piece;
  }
  if (cur.trim()) parts.push(cur.trim());

  const blobs: Uint8Array[] = [];
  for (const p of parts) {
    const u = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${encodeURIComponent(lang)}&q=${encodeURIComponent(p)}`;
    const r = await fetch(u, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!r.ok) throw new Error("google tts " + r.status);
    blobs.push(new Uint8Array(await r.arrayBuffer()));
  }
  let total = 0; blobs.forEach((b) => total += b.length);
  const out = new Uint8Array(total);
  let off = 0; blobs.forEach((b) => { out.set(b, off); off += b.length; });
  return out;
}

/** ---------- translation (free, for Hindi and friends) ---------- */
async function translate(text: string, target: string): Promise<string> {
  const u = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${encodeURIComponent(target)}&dt=t&q=${encodeURIComponent(text)}`;
  const r = await fetch(u, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!r.ok) throw new Error("translate " + r.status);
  const data = await r.json();
  if (!Array.isArray(data) || !Array.isArray(data[0])) throw new Error("translate shape");
  return data[0].map((seg: unknown[]) => seg[0]).join("");
}

// Names kept out of the translator so they come back correct.
const KEEP = ["Allah","Quran","Islam","Makkah","Madinah","Kaaba","Hajj","Zamzam","Ramadan",
  "Muhammad","Ibrahim","Ismail","Musa","Isa","Nuh","Yusuf","Dawud","Sulaiman","Yunus","Ayyub",
  "Khadijah","Fatimah","Aisha","Bilal","Jibreel","Surah","Hadith","Wonder Academy"];

async function translateSafe(text: string, target: string): Promise<string> {
  let masked = text;
  const marks: Record<string, string> = {};
  KEEP.forEach((w, i) => {
    const tag = `Q${i}Q`;
    const re = new RegExp(`\\b${w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "g");
    if (re.test(masked)) { masked = masked.replace(re, tag); marks[tag] = w; }
  });
  let out = await translate(masked, target);
  for (const [tag, w] of Object.entries(marks)) {
    out = out.replace(new RegExp(tag, "gi"), w);
  }
  return out;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return j({ error: "POST only" }, 405);

  const url = Deno.env.get("SUPABASE_URL")!;
  const anon = Deno.env.get("SUPABASE_ANON_KEY")!;
  const service = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

  const userClient = createClient(url, anon, {
    global: { headers: { Authorization: req.headers.get("Authorization") ?? "" } },
  });
  const { data: { user } } = await userClient.auth.getUser();
  if (!user) return j({ error: "Not signed in" }, 401);

  let body: {
    action?: string; voice?: string; name?: string; lang?: string;
    rate?: string; lines?: string[];
  };
  try { body = await req.json(); } catch { return j({ error: "Bad JSON" }, 400); }

  const admin = createClient(url, service);
  const voiceName = (body.name || "").trim();
  const msVoice = (body.voice || "en-US-AriaNeural").trim();
  const lang = (body.lang || "").trim();     // "" = keep English, "hi" = translate to Hindi
  const rate = (body.rate || "-8%").trim();

  /** action: test  - one clip, tells you exactly which provider worked */
  if (body.action === "test") {
    const sample = "The sun is a star. It gives us light and keeps us warm.";
    const say = lang ? await translateSafe(sample, lang).catch(() => sample) : sample;
    const report: Record<string, string> = {};
    try {
      const a = await edgeTts(say, msVoice, rate);
      report.edge = `ok, ${a.length} bytes`;
    } catch (e) { report.edge = "failed: " + (e as Error).message; }
    try {
      const g = await googleTts(say, lang || "en");
      report.google = `ok, ${g.length} bytes`;
    } catch (e) { report.google = "failed: " + (e as Error).message; }
    report.spoken = say;
    return j(report);
  }

  /** action: generate - a batch of lines, uploaded straight to the bucket */
  if (body.action === "generate") {
    if (!voiceName) return j({ error: "Missing voice name" }, 400);
    const lines = Array.isArray(body.lines) ? body.lines.slice(0, 40) : [];
    if (!lines.length) return j({ error: "No lines" }, 400);

    let made = 0, skipped = 0;
    const errors: string[] = [];
    const translations: Record<string, string> = {};
    let provider = "";

    for (const raw of lines) {
      const text = String(raw || "").trim();
      if (!text) { skipped++; continue; }
      const key = await keyFor(voiceName, text);
      const path = `${user.id}/${voiceName}/${key}.mp3`;

      const existing = await admin.storage.from(BUCKET).download(path);
      if (existing.data) { skipped++; continue; }

      let say = text;
      if (lang) {
        try { say = await translateSafe(text, lang); translations[text] = say; }
        catch { /* fall back to English for this line */ }
      }

      let audio: Uint8Array | null = null;
      try { audio = await edgeTts(say, msVoice, rate); provider = provider || "edge"; }
      catch {
        try { audio = await googleTts(say, lang || "en"); provider = provider || "google"; }
        catch (e2) { errors.push((e2 as Error).message); }
      }
      if (!audio || !audio.length) continue;

      const up = await admin.storage.from(BUCKET)
        .upload(path, audio, { contentType: "audio/mpeg", upsert: true });
      if (up.error) { errors.push(up.error.message); continue; }
      made++;
    }

    // Merge this batch into the manifest so the app knows what exists.
    const manPath = `${user.id}/${voiceName}/manifest.json`;
    let keys: string[] = [];
    let oldTr: Record<string, string> = {};
    const cur = await admin.storage.from(BUCKET).download(manPath);
    if (cur.data) {
      try { keys = JSON.parse(await cur.data.text()).keys || []; } catch { /* start fresh */ }
    }
    for (const raw of lines) {
      const t = String(raw || "").trim();
      if (t) keys.push(await keyFor(voiceName, t));
    }
    keys = Array.from(new Set(keys));
    await admin.storage.from(BUCKET).upload(
      manPath,
      new TextEncoder().encode(JSON.stringify({ voice: voiceName, lang, keys, updated: new Date().toISOString() })),
      { contentType: "application/json", upsert: true },
    );

    if (lang && Object.keys(translations).length) {
      const trPath = `${user.id}/${voiceName}/translations.json`;
      const prev = await admin.storage.from(BUCKET).download(trPath);
      if (prev.data) { try { oldTr = JSON.parse(await prev.data.text()); } catch { /* ignore */ } }
      await admin.storage.from(BUCKET).upload(
        trPath,
        new TextEncoder().encode(JSON.stringify({ ...oldTr, ...translations })),
        { contentType: "application/json", upsert: true },
      );
    }

    return j({ made, skipped, total: keys.length, provider, errors: errors.slice(0, 3) });
  }

  return j({ error: "Unknown action" }, 400);
});
