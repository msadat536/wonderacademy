# Generate your voice library for free on Google Colab

Colab gives you a free GPU for a few hours at a time. That is enough to generate all the
story pages in your cloned voice in one sitting, and questions in another.

## One-time prep on your PC

1. Record yourself: 15 to 30 seconds, quiet room, normal storytelling pace, reading anything.
   Save as `sample.wav` (any recorder app; on Windows the Sound Recorder app works, export as WAV or convert with ffmpeg).
2. In the app folder run `node voice-library\export-content.js`. That writes `voice-library\content.json`.
3. From Supabase copy three things:
   - Project URL (Project Settings > API)
   - service_role key (Project Settings > API, the secret one, never put this in the app)
   - your user id (Authentication > Users, the UUID next to your email)
4. Run `supabase-all-updates.sql` once so the `voice-library` bucket exists.

## In Colab (colab.research.google.com)

Runtime > Change runtime type > T4 GPU. Then paste these cells one at a time.

Cell 1, install:
```
!pip -q install chatterbox-tts edge-tts requests
!apt -qq install -y ffmpeg
```

Cell 2, upload files (click the button and pick `generate.py`, `content.json`, `pronounce.js`, `sample.wav`):
```
from google.colab import files
up = files.upload()
```

Cell 3, your keys:
```
import os
os.environ["SUPABASE_URL"] = "https://YOURPROJECT.supabase.co"
os.environ["SUPABASE_SERVICE_KEY"] = "PASTE_SERVICE_ROLE_KEY"
os.environ["OWNER_ID"] = "PASTE_YOUR_USER_UUID"
```

Cell 4, test with 5 clips first:
```
!python generate.py --engine chatterbox --sample sample.wav --name dad --only page --limit 5
```
Open the app, Parent area > Narrator > Free voice library, type `dad`, open any Science lesson. If the first
pages are in your voice, continue.

Cell 5, all story pages (roughly 1 to 3 hours on a T4):
```
!python generate.py --engine chatterbox --sample sample.wav --name dad --only page,extras,video,phrase
```

Cell 6, later or another day, questions and choices (longer; do it category by category):
```
!python generate.py --engine chatterbox --sample sample.wav --name dad --only question,choice --categories physics,islamic-history
```

If Colab disconnects, just rerun the same cell. Finished clips are skipped.

## Hindi or Urdu in your voice

Record `sample.wav` speaking Hindi, then add `--language hi --no-respell` (or `--language ar` for Arabic).
The multilingual model reads the English lessons in your Hindi-accented voice. It cannot translate them.

## No GPU and no Colab? Use the free Microsoft voices instead

These are not your voice, but they are excellent, free, and run on any PC in minutes:
```
pip install edge-tts requests
python voice-library\generate.py --engine edge --voice en-US-AriaNeural --name aria
python voice-library\generate.py --engine edge --voice en-IN-NeerjaNeural --name neerja
python voice-library\generate.py --engine edge --voice hi-IN-SwaraNeural --name swara
```
See all voices: `edge-tts --list-voices`
