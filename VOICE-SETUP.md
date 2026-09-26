# How the voice works

There are three ways the app can talk. It tries them in this order, per sentence,
and silently falls back. Nothing ever goes quiet.

    1. Your voice library   (free, your voice, needs a one-time batch job)
    2. ElevenLabs live      (paid, your voice, optional — skip it)
    3. Device voice         (free, robotic, works out of the box, always there)

Right now, with no setup at all, you are on option 3. That already works.

## The free way to get your own voice (option 1)

The idea: a free open-source voice cloner reads every line in the app **once, in a
batch, on your PC or a free Google Colab GPU**, and saves the MP3s into your own
Supabase storage. The app then plays those MP3s.

Nothing happens while the kids use the app. Generation only happens when you run
the script. If a line has no MP3 yet, that line uses the device voice.

### What you do once

**1. Database**
Supabase > SQL Editor > New query > paste `supabase-all-updates.sql` > Run.
Safe to run again any time. This creates the `voice-library` storage bucket.

**2. Record yourself**
15 to 30 seconds. Quiet room. Read anything, at the pace you would read a bedtime
story. Save as `sample.wav` in the `voice-library` folder.
(Windows Sound Recorder exports .m4a — convert with `ffmpeg -i in.m4a sample.wav`.)

**3. Get three values from Supabase**
- Project URL: Project Settings > API
- service_role key: Project Settings > API (the secret one)
- Your user id: Authentication > Users, the UUID next to your email

**The service_role key must never go in config.js or the repo.** It only ever goes
in your terminal or a Colab cell.

**4. Export the script list**

    cd E:\wonder-academy
    node voice-library\export-content.js

Writes `voice-library\content.json`: 9,318 lines, 402,567 characters.

**5. Generate**

Install once:

    pip install chatterbox-tts edge-tts requests
    winget install ffmpeg

Then set your keys and run:

    cd E:\wonder-academy\voice-library
    set SUPABASE_URL=https://juirydvjggrkhnlucwpp.supabase.co
    set SUPABASE_SERVICE_KEY=paste_service_role_key
    set OWNER_ID=paste_your_user_uuid

    python generate.py --engine chatterbox --sample sample.wav --name dad --limit 5

Those five clips take a few minutes. Go to the app, Parent area > Narrator >
"Your own voice, free", type `dad`, tap Check then Use library. Open a Science
lesson. **If the first page is in your voice, it works.** If you do not like the
quality, stop here; you have lost ten minutes, not an evening.

Then run the real pass and walk away:

    python generate.py --engine chatterbox --sample sample.wav --name dad --only page,extras,video,phrase

That is every story page, fun fact and activity prompt: about 1,050 clips.
Later, the quiz lines, category by category whenever you feel like it:

    python generate.py --engine chatterbox --sample sample.wav --name dad --only question,choice --categories physics
    python generate.py --engine chatterbox --sample sample.wav --name dad --only question,choice --categories islamic-history

Stop it any time with Ctrl+C. Run it again and it skips everything already done.

### How long

| Your PC | Story pass (~1,050) | Everything (~9,300) |
|---|---|---|
| NVIDIA graphics card | about 1 hour | overnight |
| No dedicated GPU | overnight | a few nights |
| Free Colab T4 GPU | 1 to 2 hours, tab must stay open | 4 sessions |

Check which you have: Win+R, type `dxdiag`, Display tab. NVIDIA GeForce or RTX
means the fast row. Colab instructions are in `voice-library/COLAB.md`.

### If you would rather not clone your voice

Same script, Microsoft's free neural voices, any PC, minutes not hours. Not your
voice, but far better than the built-in ones:

    python generate.py --engine edge --voice en-US-AriaNeural --name aria
    python generate.py --engine edge --voice en-IN-NeerjaNeural --name neerja
    python generate.py --engine edge --voice hi-IN-SwaraNeural --name swara

List them all: `edge-tts --list-voices`

### Hindi

Record `sample.wav` speaking Hindi, then add `--language hi --no-respell`.
You get the English lessons read in your Hindi-accented voice. It cannot translate
the lessons; the text stays English.

## When I add new content later

Run `node voice-library\export-content.js` again, then rerun the generate command.
Only the new lines get made.

## Storage

The full library is roughly 300 MB. Supabase free tier gives you 1 GB.

## The paid option (skip unless you want it)

`tts-function.ts` plus an ElevenLabs Starter plan (~$5/month) generates lines live
instead of in a batch, at higher quality. Setup is in the README. The free library
above does not need this file at all, and the app works fine without it.

## Troubleshooting

**"No library named dad found"** — the generate script has not uploaded anything
yet, or the name does not match. The name in the app must equal `--name`.

**Kids hear the robot voice on some lines** — those lines are not generated yet.
Expected until you finish a pass. Questions come last by design.

**Nothing plays at all** — check Parent area for a red "Database update needed"
banner. If it is there, run `supabase-all-updates.sql`.
