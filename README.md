# Wonder Academy

A learning app for kids with profiles, age-appropriate lessons, quizzes, and rewards. Works on phones, tablets, and computers. No build step, no dependencies to install.

## What's inside

- 8 categories, 30 concepts each. Science & Nature is fully written (stories + 600 quiz questions at two age levels). The other 7 categories have their full curriculum scaffolded and show "coming soon" until their content wave lands.
- Two age tiers, picked automatically from the child's age. Age 6 and under: shorter stories, 3-choice questions, spoken feedback. Age 7 and up: longer stories, 4-choice questions.
- No-repeat cycle: the Continue button never repeats a concept until all 30 in a category are finished. Then a new round opens. Kids can replay finished concepts anytime to improve their stars.
- Rewards: 1 star per correct answer, a Smarty Badge for scoring 8+, a Trophy for finishing a full category round.
- Read-to-me button on every story and question (uses the device's built-in voice).
- A video slot on every concept for your own links.

## Deploy to GitHub Pages

1. Create a new GitHub repository, e.g. `wonder-academy`.
2. Upload everything in this folder (keep the `content/` folder structure).
3. Repo Settings → Pages → Source: `main` branch, root folder. Save.
4. Your app is live at `https://YOURNAME.github.io/wonder-academy/` in a minute or two.

You can also just open `index.html` directly on any device to try it.

## Supabase setup (sync across devices)

Without Supabase the app still works, but progress stays on each device. To sync:

1. Create a free project at supabase.com.
2. Open the SQL Editor, paste the contents of `supabase.sql`, run it.
3. In Project Settings → API, copy the Project URL and the `anon public` key.
4. Paste both into `config.js`, and set `FAMILY_CODE` to any word your family picks.
5. Use the same `config.js` values on every device.

Note: the tables use open policies so the app works without logins. Anyone with your anon key could read these two tables, so the app only ever stores first name, age, avatar emoji, and quiz scores. Don't put anything else in there.

## Adding your own videos

Every concept has a `video: ''` field in its file under `content/`. Paste any YouTube link:

```js
{ id: 'sun', title: 'The Sun', ... video: 'https://www.youtube.com/watch?v=XXXX', ... }
```

The app converts it to an embedded player on that concept's page automatically.

## Content waves

Content ships in waves so each file stays reviewable:

- Wave 1 (done): app + Science & Nature complete.
- Next waves: Islamic History, Biology, Physics, Geography, Analytical, Reasoning, IQ.

Each wave just replaces one file in `content/`. Nothing else changes, and kids' progress is untouched.

### Content format (for adding your own)

Answers are always written first (`answer: 0`); the app shuffles the choices on screen. Young tier uses 3 choices, older uses 4, 10 questions each.

## Renaming the app

Change `APP_NAME` in `config.js`.
