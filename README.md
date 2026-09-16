# Wonder Academy

A learning app for kids with a real parent login, kid profiles, age-appropriate lessons, quizzes, and rewards. Works on phones, tablets, and computers. No build step, no dependencies to install.

## What's inside

- **Parent login** with a real email and password (Supabase Auth). Nobody reaches the app without signing in.
- **Parent PIN** for the parent area, so kids who already have a signed-in tablet cannot add or delete profiles.
- 8 categories, 30 concepts each. Science & Nature is fully written (stories plus 600 quiz questions at two age levels). The other 7 categories have their full curriculum scaffolded and show "coming soon" until their content wave lands.
- Two age tiers, picked from the child's age. Age 6 and under: shorter stories, 3-choice questions, spoken feedback. Age 7 and up: longer stories, 4-choice questions.
- No-repeat cycle: Continue never repeats a concept until all 30 in a category are finished, then a new round opens. Finished concepts can be replayed to improve stars.
- Rewards: 1 star per correct answer, a Smarty Badge for 8+, a Trophy per completed category round.
- Read-to-me button on every story and question (device voice).
- A video slot on every concept for your own YouTube links.

## Setup (required before anyone can sign in)

### 1. Supabase project

1. Create a free project at supabase.com.
2. SQL Editor, paste the contents of `supabase.sql`, run it. This creates three tables with row-level security so each parent account only sees its own data.
3. Authentication, Providers, Email: make sure Email is enabled.
4. Optional but easier: Authentication, Sign In / Providers, turn **off** "Confirm email". Then creating the account signs you straight in. Leave it on and you have to click the emailed link first.
5. Project Settings, API: copy the **Project URL** and the **anon public** key.
6. Paste both into `config.js`.

### 2. Deploy

1. Upload everything in this folder to your GitHub repo, keeping the `content/` folder.
2. Repo Settings, Pages, Source: `main` branch, `/ (root)`. Save.
3. The app is live at `https://YOURNAME.github.io/REPONAME/`.

### 3. First run

1. Open the app, tap "First time? Create an account", enter your email and a password.
2. Set a 4-digit parent PIN.
3. You land in the parent area. Add a profile for each child: name, age, avatar.
4. Tap Done. Kids now see the profile picker and just tap their face to play.

Kids stay signed in on that device. Sign out only from the parent area.

## Adding and removing profiles

Parent area, reached from the profile picker: tap **Parent area**, enter your PIN. There you can add profiles, remove them, change the PIN, and sign out. Removing a profile also deletes that child's progress.

## What the security actually does

- The Supabase login is real. Data is protected server-side by row-level security, so one account cannot read another account's profiles or scores, even with the anon key.
- The parent PIN is a convenience lock checked in the browser. It stops a curious eight-year-old from opening the parent area on an already-signed-in tablet. It would not stop someone who knows how to open browser developer tools. That is the right level for this job, but worth knowing.
- Stored data is limited on purpose: your email (held by Supabase Auth), each child's first name, age, avatar emoji, and quiz scores. Nothing else.

## Adding your own videos

Every concept has a `video: ''` field in its file under `content/`. Paste any YouTube link:

```js
{ id: 'sun', title: 'The Sun', ... video: 'https://www.youtube.com/watch?v=XXXX', ... }
```

The app converts it to an embedded player on that concept's page.

## Content waves

Content ships in waves so each file stays reviewable:

- Wave 1 (done): app, login, and Science & Nature complete.
- Next waves: Islamic History, Biology, Physics, Geography, Analytical, Reasoning, IQ.

Each wave replaces one file in `content/`. Nothing else changes, and kids' progress is untouched.

### Content format (for adding your own)

Answers are always written first (`answer: 0`); the app shuffles the choices on screen. Young tier uses 3 choices, older uses 4, 10 questions each.

## Files

| File | What it does |
|---|---|
| `config.js` | Your Supabase URL and key, app name. The only file you edit. |
| `auth.js` | Sign in, sign up, token refresh, authenticated requests. |
| `app.js` | All screens and game logic. |
| `styles.css` | Look and feel. |
| `supabase.sql` | Database schema and security policies. |
| `content/*.js` | Lesson content, one file per category. |

## Troubleshooting

**"One setup step left" screen.** `config.js` still has empty Supabase values.

**Sign-in says email not confirmed.** Click the link Supabase emailed you, or turn off email confirmation in Supabase settings.

**Blank page.** `index.html` must sit at the top level of the repo, not inside a subfolder.

**Progress not syncing between devices.** Both devices must be signed in to the same account, and each device needs the same `config.js`.
