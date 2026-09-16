# Wonder Academy

A learning app for kids with a real parent login, kid profiles, age-appropriate lessons, quizzes, and rewards. Works on phones, tablets, and computers. No build step, no dependencies to install.

## What's inside

- **Parent login** with a real email and password (Supabase Auth). Nobody reaches the app without signing in.
- **Parent PIN** for the parent area, so kids who already have a signed-in tablet cannot add or delete profiles.
- 12 categories, 30 concepts each, and every category is playable. Science & Nature has all 30 written (first 10 in storybook format). The other 7 categories each have their first 3 concepts written in full storybook format, with the remaining 27 showing "coming soon" until later waves. 51 playable concepts and 1,020 questions so far.
- **Storybook lessons.** Each concept is a set of illustrated pages the child taps through, not one block of text, ending with a "Did you know" fact, a hands-on "Try it at home" activity, and (older tier) a new-words list.
- **Real age separation.** The two tiers are written separately, not shortened versions of each other. Age 6 and under: 4 pages of short repetitive sentences (about 90 words), big type, giant emoji art, 3-choice questions, and pages that read themselves aloud automatically. Age 7 and up: 6 pages of genuine depth (about 280 words) with real vocabulary, numbers, and explanations, plus 4-choice questions.
- **Separate video slots per age**, so you can point a 4-year-old and an 8-year-old at different videos for the same topic.
- No-repeat cycle: Continue never repeats a concept until all 30 in a category are finished, then a new round opens.
- Rewards: 1 star per correct answer, a Smarty Badge for 8+, a Trophy per completed category round, a streak counter during quizzes, confetti and sound effects on good results.
- Read-to-me on every page and question, using the device voice.

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


## Installing on phones and tablets

The app is a PWA, so it installs from the browser with no app store.

**iPhone / iPad (must use Safari):** open the site, tap the Share button, scroll down, tap Add to Home Screen, tap Add. It launches fullscreen with no browser bars.

**Android (Chrome):** open the site, tap the three dots, tap Install app or Add to Home screen, confirm. Some phones show an Install banner at the bottom automatically.

**Windows / Mac (Chrome or Edge):** open the site and click the install icon in the address bar, or three dots > Cast, save and share > Install page as app.

### Updating an installed copy

The service worker uses a network-first strategy, so a fresh version is picked up as soon as the device is online. After pushing changes, bump `CACHE_VERSION` in `sw.js` and the `?v=` numbers in `index.html` to force it immediately. Closing and reopening the app twice guarantees the update has applied.

### Offline

Once a device has opened the app, lessons and quizzes keep working without internet. Progress saves locally and syncs to Supabase next time the device is online. Signing in for the first time does require a connection.



## Scores

Parent area > Scores tab. Every quiz attempt is logged, not just best scores. Pick a child and see:

- Headline numbers: quizzes taken, average score, overall percent correct, total time spent
- By category: average and percent per subject, with a bar and an improving / slipping / steady note
- Every quiz: a dated log of each attempt with score, round, level and time taken. Tap any row to see exactly which questions were answered wrong
- Needs practice: concepts where the most recent score was below 7, with the missed questions listed
- CSV export of the filtered list

Filter by category and by last 7 days, last 30 days, or all time.

Requires `supabase-update-4.sql` run once in the SQL Editor.

## Money rewards

Parent area > Rewards tab. Set how much a new star, a Smarty Badge, and a Trophy earn (for example 0.10, 0.50, 2.00). Only new achievements pay out, so replaying a lesson cannot farm money. Each child has a wallet shown on their My Rewards screen. When you buy them something, record it as a Redeem and the wallet counts down. You can also add a Bonus for anything outside the app. Every earn, bonus, and redemption is kept in a dated history per child, stored in Supabase.

Existing Supabase projects need `supabase-update-2.sql` run once in the SQL Editor. Fresh projects get it from `supabase.sql`.

## Narrator

Parent area > Narrator tab. Pick any voice installed on that device (accent, gender), set speed and pitch, and choose when to read aloud automatically: for young profiles only, for everyone, or only when tapped. Read to me on a story reads every page through to the end, including the fun fact and new words, and only stops if you tap Stop. Voices differ by device, so set it on each tablet and phone.

To add more voices: iPad Settings > Accessibility > Spoken Content > Voices. Android Settings > Accessibility > Text-to-speech output > Install voice data.

Pronunciation of Islamic names and terms is handled by `pronounce.js`. Add a line there for any word the narrator still gets wrong.


## Fixing pronunciation

Parent area > Words tab. Every Islamic term is listed with a play button. Tap to hear it; if it sounds wrong, tap Fix, type a spelling that sounds right when read aloud, and save. Your spellings are stored on your account, so all devices use them.

Spell by sound, not by Arabic transliteration. Doubling a vowel lengthens it (Madeenah beats Madinah). Avoid hyphens, since many voices read them as a pause.

Honorifics after names can be set to full Arabic, the English meaning, or skipped entirely.

Requires `supabase-update-3.sql` run once in the SQL Editor.

## Adding videos

Parent area > Videos tab. Choose a category, tap Find beside a lesson to open a YouTube search for that topic, copy a link, tap Add and paste it. The video appears on the last page of that story. Links save to your account and sync to every device, so no file editing is needed.

## Text size

Parent area > Narrator tab > Text size: Normal, Large, or Huge. Saved per device.

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

- Wave 1 (done): app, login, Science complete, first 10 in storybook format.
- Wave 2 (done): first 3 concepts of all 7 remaining categories, so every tile is playable.
- Wave 3 (done): Islamic History complete at all 30 concepts, 600 questions.
- Wave 4 (done): Physics Fun complete at all 30 concepts, 600 questions.
- Next waves: one category at a time to 30 concepts each, then the last 20 Science concepts converted to storybook format.
- Next waves: Islamic History, Biology, Physics, Geography, Analytical, Reasoning, IQ.

Each wave replaces one file in `content/`. Nothing else changes, and kids' progress is untouched.

### Content format (for adding your own)

```js
{ id: 'sun', title: 'The Sun', emoji: '☀️',
  scene: ['☀️','🌍','🌻'],
  video: { young: '', older: '' },
  young: {
    pages: [ { art: '☀️', text: 'Short, simple sentences.' }, ... ],
    funFact: '...', tryThis: '...',
    questions: [ { q: '...', choices: ['correct','wrong','wrong'], answer: 0 }, ... ]
  },
  older: {
    pages: [ ... 6 longer pages ... ],
    funFact: '...', tryThis: '...',
    words: [ { word: 'Fusion', meaning: '...' } ],
    questions: [ ... 4 choices each ... ]
  } }
```

The correct answer is always written first (`answer: 0`); the app shuffles the choices on screen so position gives nothing away. Young tier uses 3 choices, older uses 4, 10 questions each. A concept using the older `story: '...'` field instead of `pages` still works and renders as a single page.

## Files

| File | What it does |
|---|---|
| `config.js` | Your Supabase URL and key, app name. The only file you edit. |
| `auth.js` | Sign in, sign up, token refresh, authenticated requests. |
| `pronounce.js` | Pronunciation rules for the narrator. Edit to add words. |
| `supabase-update-2.sql` | Run once on an existing project to add the rewards ledger. |
| `content/science.js` | Storybook pages, facts, activities, and questions for Science. |
| `app.js` | All screens and game logic. |
| `styles.css` | Look and feel. |
| `supabase.sql` | Database schema and security policies. |
| `content/*.js` | Lesson content, one file per category. |

## Troubleshooting

**"One setup step left" screen.** `config.js` still has empty Supabase values.

**Sign-in says email not confirmed.** Click the link Supabase emailed you, or turn off email confirmation in Supabase settings.

**Blank page.** `index.html` must sit at the top level of the repo, not inside a subfolder.

**Progress not syncing between devices.** Both devices must be signed in to the same account, and each device needs the same `config.js`.
