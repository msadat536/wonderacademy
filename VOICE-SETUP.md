# Getting a better voice (no coding, no payment)

The app reads lessons out loud. By default it uses the robot voice built into the
phone, which sounds bad. This makes it sound like a real person.

You do this once, on your Windows PC. It is free.

## The easy way

1. Open the folder `E:\wonder-academy\voice-library`
2. Double-click **SETUP-MY-VOICE.bat**
3. Answer the questions it asks
4. Leave it running, go do something else

That is it. When it finishes, it tells you what to type in the app.

## What it will ask you

**First time only**, it needs three things from Supabase. Open supabase.com and
click your wonderacademy project:

| It asks for | Where to find it |
|---|---|
| Project URL | Left sidebar bottom → Project Settings → API |
| service_role key | Same page, scroll to "service_role", click reveal |
| Your user UUID | Left sidebar → Authentication → Users, next to your email |

It saves these in `my-settings.txt` in that folder, so it never asks again.

**That service_role key is a master password for your database.** The script keeps
it on your PC only. Never paste it into `config.js`, and never commit
`my-settings.txt` to GitHub.

## Then it gives you a menu

**Option 1 — A much better voice.** Recommended. About 15 minutes, works on any PC,
no graphics card needed. You pick from a US woman, US man, Indian woman, Indian man,
or Hindi woman. These are real neural voices and sound close to human.

**Option 2 — Your own voice.** You record 30 seconds, it clones you. The script
walks you through recording with the Windows Sound Recorder. Honest warning: this
needs a decent NVIDIA graphics card. Without one it runs all night. Check with
Win+R → `dxdiag` → Display tab. If it does not say NVIDIA, use option 1.

**Option 3 — Test 5 clips.** Five minutes. Makes five clips so you can hear the
result before committing to the full run. Start here.

## After it finishes

On your phone or tablet:

    Parent area  →  Narrator  →  "Your own voice, free"
    Type the name it told you (aria, or dad, or whatever you chose)
    Tap Check, then Use library

Open any Science lesson. The story should be in the new voice.

This setting syncs to all your devices automatically. You only do it once, not
once per phone.

## Things that are normal, not bugs

**Some lines still sound robotic.** The script does story pages first, then quiz
questions. Anything not made yet falls back to the robot voice. Run the script
again any time to fill in more.

**It takes hours on option 2.** Expected without a graphics card. You can close
the window with Ctrl+C and run it again later; it picks up exactly where it
stopped and never redoes work.

**I add new lessons later.** Just double-click the .bat again. It only makes the
new lines.

## If something goes wrong

**"Python is not installed"** — open the Microsoft Store, search Python 3.12,
click Get. Two minutes. Then run the .bat again.

**"No library named X found" in the app** — the name in the app must exactly match
the name the script used. The script prints it at the end.

**Nothing plays at all** — open the parent area and look for a red "Database update
needed" banner. If it is there, run `supabase-all-updates.sql` in Supabase →
SQL Editor first.

## How much space

The full set of voice files is roughly 300 MB. Supabase gives you 1 GB free.

---

*There is also a paid option using ElevenLabs, set up through `tts-function.ts`.
You do not need it and it is not recommended. The free route above covers
everything.*
