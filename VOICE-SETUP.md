# Better voices, set up inside the app

No PC. No downloads. No Python. You do this from your phone.

## One-time: deploy the voice function

This is the only setup step, and it is copy and paste.

1. Supabase → SQL Editor → paste `supabase-all-updates.sql` → Run.
   (Safe to run again. Creates the storage bucket the voices live in.)

2. Deploy the function. Either way works:

   **From PowerShell (easiest, no dashboard hunting):**
   ```
   cd E:\wonder-academy
   powershell -ExecutionPolicy Bypass -File .\deploy-voice-function.ps1
   ```
   A browser opens once to sign you in to Supabase, then it deploys. No Docker.

   **Or from the dashboard:** Edge Functions → **Deploy a new function**
   - Name it exactly: `voice`
   - Delete whatever is in the editor
   - Paste the entire contents of `voice-function.ts`
   - Deploy

That is it. No API key, no billing, nothing to install.

## Then, in the app

Parent area → **Narrator** → **Voice Studio**

Pick a voice:

| | |
|---|---|
| 🇺🇸 Woman, American | Aria |
| 🇺🇸 Man, American | Guy |
| 🇮🇳 Woman, Indian | Neerja |
| 🇮🇳 Man, Indian | Prabhat |
| 🇮🇳 Hindi, woman | Swara, lessons translated to Hindi |
| 🇮🇳 Hindi, man | Madhur, lessons translated to Hindi |

Then three buttons, in order:

**1. Test it** — makes one clip and tells you whether it worked, and what it will
say. Takes a few seconds. Do this first.

**2. Make the voices** — generates everything. A progress bar shows how far along
it is. Keep the app open, but you can put the phone down. You can Stop at any
point and pick up later; it never redoes finished work.

**3. Use this voice** — switches the app over. This syncs to every device, so you
only do it once, not once per phone.

There is a **Back to basic phone voice** button if you want to undo it.

## The kids can switch it themselves

Once a voice exists, nobody needs the parent area to change it. There is a **🗣
button** on the home screen, on every lesson page and during the quiz. Tapping it
opens a panel with:

- every voice that has been generated, plus **Phone voice** which always works
- **🐢 Slower / 🚶 Normal / 🐇 Faster** reading speed
- a **🔊 Try it** button so they can hear it before committing

Picking a Hindi voice switches the on-screen text to Hindi at the same time, so
Aliza can flip between English and Hindi mid-lesson. The choice saves to your
Supabase account, so it follows them to the iPad and both phones.

They can only pick from voices you have already made — the 🗣 panel never
generates anything, so there is no way for them to run up work by tapping around.

## About the Hindi option

A Hindi voice reading English text just gives you English in a Hindi accent,
because the lesson text is English. So the Hindi options **translate each lesson
first**, then speak the Hindi, and the app switches the on-screen text to Hindi to
match. Islamic names are protected from the translator, so Allah, Quran, Makkah,
Muhammad and so on come back correct.

## What to expect

There are about 9,200 lines. Story pages are generated first, then fun facts, then
quiz questions, so the storytelling improves early. Anything not generated yet
still uses the basic phone voice, so nothing ever breaks mid-lesson.

You can make several voices and switch between them. Generate `aria` for English
and `hindi` for Hindi, then swap whenever you like.

## If something goes wrong

**"Could not reach the voice function"** — the function is not deployed, or not
named exactly `voice`. Check Supabase → Edge Functions.

**Test says neither provider responded** — send me what it printed. It names the
exact failure for both providers, which tells me what to fix.

**Nothing plays after step 3** — open the parent area and look for a red "Database
update needed" banner. If it is there, run `supabase-all-updates.sql`.

## Your own cloned voice

Still possible, but it needs a graphics card and runs on your PC, so it is no
longer the recommended route. If you want it, `voice-library/SETUP-MY-VOICE.bat`
is still there and still works.
