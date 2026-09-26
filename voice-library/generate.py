#!/usr/bin/env python3
"""
Wonder Academy - free voice library generator.

Generates an MP3 for every spoken line in content.json and uploads them to your
Supabase storage, so the app can play YOUR voice with no paid service.

Two free engines:
  chatterbox  Clone your voice from a short recording (sample.wav, 10 to 30 seconds).
              Open source, by Resemble AI. Needs a GPU to be fast: use Google Colab (free).
  edge        Microsoft Edge neural voices (free, excellent, many languages incl. Hindi).
              Not your voice, but runs anywhere in minutes with no GPU.

Setup (once):
  pip install edge-tts requests
  pip install chatterbox-tts          # only for the chatterbox engine
  ffmpeg must be installed            # Colab has it; on Windows: winget install ffmpeg

Environment variables (or edit the DEFAULTS block below):
  SUPABASE_URL          https://xxxx.supabase.co
  SUPABASE_SERVICE_KEY  the service_role key from Project Settings > API (keep secret, never in the app)
  OWNER_ID              your user id from Supabase > Authentication > Users

Examples:
  python generate.py --engine edge --voice en-US-AriaNeural --name aria
  python generate.py --engine edge --voice hi-IN-SwaraNeural --name swara
  python generate.py --engine chatterbox --sample sample.wav --name dad
  python generate.py --engine chatterbox --sample sample.wav --name dad --only page,extras --categories physics,story-time

Run it again any time: lines already uploaded are skipped.
"""

import argparse, asyncio, hashlib, json, os, re, subprocess, sys, tempfile, time
import requests

DEFAULTS = {
    "SUPABASE_URL": "",
    "SUPABASE_SERVICE_KEY": "",
    "OWNER_ID": "",
}

BUCKET = "voice-library"

# ---------- pronunciation (mirrors pronounce.js: honorifics expanded, names respelled) ----------
HONORIFICS = {"saw": " sallallaahu alayhi wa sallam ", "as": " alayhis salaam ",
              "ra_m": " radiyallaahu anhu ", "ra_f": " radiyallaahu anhaa "}
FEMALE = r"(Khadijah|Maryam|Aisha|Fatimah|Hajar|Hawwa|Asiya|Zaynab|Hafsa|Sumayyah)"

def spoken_form(text, respell=True):
    t = text
    t = re.sub(r"\uFDFA|ﷺ", HONORIFICS["saw"], t)
    t = re.sub(r"\(\s*AS\s*\)", HONORIFICS["as"], t)
    def ra(m):
        before = t[max(0, m.start() - 44):m.start()]
        return HONORIFICS["ra_f"] if re.search(FEMALE + r"[^A-Za-z]*$", before, re.I) else HONORIFICS["ra_m"]
    t = re.sub(r"\(\s*RA\s*\)", ra, t)
    if respell:
        table = load_pronounce_table()
        for word, say in table:
            t = re.sub(r"\b" + re.escape(word) + r"\b", say, t)
    return re.sub(r"\s{2,}", " ", t).strip()

_table = None
def load_pronounce_table():
    global _table
    if _table is not None:
        return _table
    _table = []
    p = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "pronounce.js")
    if os.path.exists(p):
        src = open(p, encoding="utf-8").read()
        for m in re.finditer(r"\['([^']+)',\s*'([^']+)'\]", src):
            _table.append((m.group(1), m.group(2)))
    return _table

# ---------- hashing (must match app.js: sha256(voice + '|' + rawtext), first 32 hex chars) ----------
def key_for(voice_name, raw_text):
    return hashlib.sha256((voice_name + "|" + raw_text).encode("utf-8")).hexdigest()[:32]

# ---------- supabase storage ----------
class Store:
    def __init__(self, url, key, owner, voice):
        self.url = url.rstrip("/"); self.key = key; self.owner = owner; self.voice = voice
        self.lang = ""
        self.h = {"apikey": key, "Authorization": "Bearer " + key}
        self.manifest_path = f"{owner}/{voice}/manifest.json"
        self.manifest = self.load_manifest()

    def load_manifest(self):
        r = requests.get(f"{self.url}/storage/v1/object/authenticated/{BUCKET}/{self.manifest_path}", headers=self.h)
        if r.status_code == 200:
            try:
                return set(r.json().get("keys", []))
            except Exception:
                return set()
        return set()

    def save_manifest(self):
        body = json.dumps({"voice": self.voice, "lang": getattr(self, "lang", ""),
                           "keys": sorted(self.manifest),
                           "updated": time.strftime("%Y-%m-%d %H:%M")}).encode()
        hh = dict(self.h); hh["Content-Type"] = "application/json"; hh["x-upsert"] = "true"
        r = requests.post(f"{self.url}/storage/v1/object/{BUCKET}/{self.manifest_path}", headers=hh, data=body)
        r.raise_for_status()

    def upload_json(self, filename, obj):
        hh = dict(self.h); hh["Content-Type"] = "application/json"; hh["x-upsert"] = "true"
        body = json.dumps(obj, ensure_ascii=False).encode("utf-8")
        r = requests.post(f"{self.url}/storage/v1/object/{BUCKET}/{self.owner}/{self.voice}/{filename}",
                          headers=hh, data=body)
        r.raise_for_status()

    def upload(self, key, mp3_path):
        hh = dict(self.h); hh["Content-Type"] = "audio/mpeg"; hh["x-upsert"] = "true"
        with open(mp3_path, "rb") as f:
            r = requests.post(f"{self.url}/storage/v1/object/{BUCKET}/{self.owner}/{self.voice}/{key}.mp3", headers=hh, data=f.read())
        if r.status_code >= 300:
            hint = ""
            if r.status_code in (400, 404):
                hint = "  ->  Run supabase-all-updates.sql in Supabase SQL Editor first; the voice-library bucket is missing."
            elif r.status_code in (401, 403):
                hint = "  ->  Check your service_role key (not the anon key)."
            raise RuntimeError(f"upload failed {r.status_code}: {r.text[:160]}{hint}")
        self.manifest.add(key)

# ---------- translation ----------
LANG_NAMES = {"hi": "Hindi", "ur": "Urdu", "ar": "Arabic", "bn": "Bengali",
              "gu": "Gujarati", "ta": "Tamil", "te": "Telugu", "mr": "Marathi",
              "pa": "Punjabi", "es": "Spanish", "fr": "French", "de": "German"}

# Words to keep as-is so the meaning is not mangled.
KEEP = ["Allah", "Quran", "Islam", "Makkah", "Madinah", "Kaaba", "Hajj", "Zamzam",
        "Ramadan", "Muhammad", "Ibrahim", "Ismail", "Musa", "Isa", "Nuh", "Yusuf",
        "Dawud", "Sulaiman", "Yunus", "Ayyub", "Khadijah", "Fatimah", "Aisha",
        "Bilal", "Jibreel", "Surah", "Hadith", "Wonder Academy"]


class Translator:
    """Batch translator with an on-disk cache so reruns never re-translate."""

    def __init__(self, lang, here):
        self.lang = lang
        self.path = os.path.join(here, f"translations-{lang}.json")
        self.cache = {}
        if os.path.exists(self.path):
            try:
                self.cache = json.load(open(self.path, encoding="utf-8"))
            except Exception:
                self.cache = {}
        try:
            from deep_translator import GoogleTranslator
            self.engine = GoogleTranslator(source="en", target=lang)
        except ImportError:
            sys.exit("Translation needs one extra package. Run:  pip install deep-translator")

    def get(self, text):
        key = text.strip()
        if key in self.cache:
            return self.cache[key]
        protected = key
        marks = {}
        for i, w in enumerate(KEEP):
            tag = f"@{i}@"
            if re.search(r"\b" + re.escape(w) + r"\b", protected):
                protected = re.sub(r"\b" + re.escape(w) + r"\b", tag, protected)
                marks[tag] = w
        for attempt in range(3):
            try:
                out = self.engine.translate(protected)
                break
            except Exception:
                time.sleep(2 + attempt * 3)
                out = None
        if not out:
            return key
        for tag, w in marks.items():
            out = out.replace(tag, w).replace(tag.replace("@", "＠"), w)
        self.cache[key] = out
        return out

    def save(self):
        json.dump(self.cache, open(self.path, "w", encoding="utf-8"), ensure_ascii=False, indent=1)


# ---------- engines ----------
def to_mp3(wav_path, mp3_path):
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", wav_path, "-codec:a", "libmp3lame", "-b:a", "48k", "-ar", "22050", mp3_path], check=True)

class EdgeEngine:
    def __init__(self, voice, rate):
        import edge_tts
        self.edge_tts = edge_tts; self.voice = voice; self.rate = rate
    def synth(self, text, out_mp3):
        async def run():
            c = self.edge_tts.Communicate(text, self.voice, rate=self.rate)
            await c.save(out_mp3)
        asyncio.run(run())

class ChatterboxEngine:
    def __init__(self, sample, language):
        import torch, torchaudio
        self.torchaudio = torchaudio
        self.sample = sample
        self.language = language
        device = "cuda" if torch.cuda.is_available() else ("mps" if hasattr(torch.backends, "mps") and torch.backends.mps.is_available() else "cpu")
        print("device:", device)
        if language and language != "en":
            from chatterbox.mtl_tts import ChatterboxMultilingualTTS
            self.model = ChatterboxMultilingualTTS.from_pretrained(device=device)
            self.multi = True
        else:
            from chatterbox.tts import ChatterboxTTS
            self.model = ChatterboxTTS.from_pretrained(device=device)
            self.multi = False
    def synth(self, text, out_mp3):
        if self.multi:
            wav = self.model.generate(text, language_id=self.language, audio_prompt_path=self.sample, exaggeration=0.45, cfg_weight=0.5)
        else:
            wav = self.model.generate(text, audio_prompt_path=self.sample, exaggeration=0.45, cfg_weight=0.5)
        tmp = out_mp3 + ".wav"
        self.torchaudio.save(tmp, wav, self.model.sr)
        to_mp3(tmp, out_mp3)
        os.remove(tmp)

# ---------- main ----------
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--engine", choices=["edge", "chatterbox"], required=True)
    ap.add_argument("--name", required=True, help="library name, e.g. dad or aria. Choose this same name in the app.")
    ap.add_argument("--voice", default="en-US-AriaNeural", help="edge voice id (run: edge-tts --list-voices)")
    ap.add_argument("--rate", default="-8%", help="edge speaking rate, e.g. -10%% slower")
    ap.add_argument("--sample", default="sample.wav", help="chatterbox: your voice recording")
    ap.add_argument("--language", default="en", help="chatterbox: en, hi, ar, ur ... (multilingual model)")
    ap.add_argument("--only", default="page,extras,video,question,choice,phrase", help="kinds to generate, comma separated")
    ap.add_argument("--categories", default="", help="limit to categories, comma separated")
    ap.add_argument("--no-respell", action="store_true", help="do not respell Islamic names (use for chatterbox multilingual)")
    ap.add_argument("--limit", type=int, default=0, help="stop after N new clips (for testing)")
    ap.add_argument("--dry", action="store_true", help="count only, generate nothing")
    ap.add_argument("--translate", default="", help="translate lessons before speaking, e.g. hi for Hindi. Requires: pip install deep-translator")
    a = ap.parse_args()

    here0 = os.path.dirname(os.path.abspath(__file__))
    saved = {}
    cfg = os.path.join(here0, "my-settings.txt")
    if os.path.exists(cfg):
        for line in open(cfg, encoding="utf-8"):
            if "=" in line:
                k2, v2 = line.strip().split("=", 1)
                saved[k2.strip()] = v2.strip()

    url = os.environ.get("SUPABASE_URL") or saved.get("SUPABASE_URL") or DEFAULTS["SUPABASE_URL"]
    key = os.environ.get("SUPABASE_SERVICE_KEY") or saved.get("SUPABASE_SERVICE_KEY") or DEFAULTS["SUPABASE_SERVICE_KEY"]
    owner = os.environ.get("OWNER_ID") or saved.get("OWNER_ID") or DEFAULTS["OWNER_ID"]
    if not (url and key and owner):
        sys.exit("Missing Supabase settings. Easiest fix: double-click SETUP-MY-VOICE.bat instead of running this directly.")
    if not url.startswith("http"):
        sys.exit("SUPABASE_URL looks wrong. It should start with https:// and end with .supabase.co")

    here = os.path.dirname(os.path.abspath(__file__))
    lines = json.load(open(os.path.join(here, "content.json"), encoding="utf-8"))
    kinds = set(a.only.split(","))
    cats = set(a.categories.split(",")) if a.categories else None
    todo = [l for l in lines if l["kind"] in kinds and (cats is None or l["category"] in cats or l["kind"] == "phrase")]

    store = Store(url, key, owner, a.name)
    pending = [l for l in todo if key_for(a.name, l["text"]) not in store.manifest]
    chars = sum(len(l["text"]) for l in pending)
    print(f"library '{a.name}': {len(store.manifest)} clips already uploaded, {len(pending)} to generate ({chars} characters)")
    if a.dry or not pending:
        return

    tr = None
    if a.translate:
        lang_name = LANG_NAMES.get(a.translate, a.translate)
        print(f"translating lessons to {lang_name} first (cached, so only new lines cost time)")
        tr = Translator(a.translate, here)
        store.lang = a.translate
        if a.engine == "edge" and not a.voice.lower().startswith(a.translate):
            print(f"  NOTE: voice '{a.voice}' is not a {lang_name} voice.")
            print(f"        Use a {lang_name} voice or it will read {lang_name} text with an English accent.")

    engine = EdgeEngine(a.voice, a.rate) if a.engine == "edge" else ChatterboxEngine(a.sample, a.language)
    respell = not a.no_respell and a.engine == "edge" and not a.translate

    tmpdir = tempfile.mkdtemp()
    done = 0; t0 = time.time()
    for i, l in enumerate(pending):
        k = key_for(a.name, l["text"])
        out = os.path.join(tmpdir, k + ".mp3")
        try:
            say = l["text"]
            if tr:
                say = tr.get(say)
            else:
                say = spoken_form(say, respell)
            engine.synth(say, out)
            store.upload(k, out)
            os.remove(out)
            done += 1
        except Exception as e:
            print("  skipped:", l["text"][:50], "->", e)
        if done and done % 25 == 0:
            store.save_manifest()
            if tr:
                tr.save()
            rate = (time.time() - t0) / done
            print(f"  {done}/{len(pending)} done, ~{int(rate * (len(pending) - done) / 60)} min left")
        if a.limit and done >= a.limit:
            break
    store.save_manifest()
    if tr:
        tr.save()
        try:
            store.upload_json("translations.json", tr.cache)
            print(f"uploaded {len(tr.cache)} translations, so the app shows {LANG_NAMES.get(a.translate, a.translate)} on screen too")
        except Exception as e:
            print("could not upload translations:", e)
    print(f"finished: {done} new clips, library now {len(store.manifest)} clips.")
    print(f"In the app: Parent area > Narrator > 'Your own voice, free' > type '{a.name}' > Check > Use library.")

if __name__ == "__main__":
    main()
