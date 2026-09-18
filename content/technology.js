/* Technology - 30 concepts. minAge hides a concept from younger profiles.
   The correct answer is always written first (answer: 0); the app shuffles choices on screen. */
window.CONTENT = window.CONTENT || {};
window.CONTENT['technology'] = {
  id: "technology", title: "Technology", emoji: "💻", color: "#3D5AFE", tint: "#DDE3FF",
  concepts: [
  { id: "what-is-a-computer", title: "What Is a Computer?", emoji: "🖥️",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🖥️🤔", text: "A computer is a machine that follows instructions really, really fast. It cannot think on its own. It only does what it is told." },
      { art: "📱💻🎮", text: "Computers hide everywhere! Inside phones, tablets, game consoles, cars, even washing machines and microwaves." },
      { art: "⌨️🖱️👀", text: "You tell a computer what to do with a keyboard, a mouse, or your finger on a screen. It shows you the answer on the screen or with sound." }
    ],
    funFact: "The first computers were as big as a whole room and slower than the phone in your pocket. Now a computer can fit inside a watch!",
    tryThis: "Walk around your house and count every computer you can find. Remember, anything with a screen or buttons that does something probably has one inside.",
    questions: [
      { q: "What is a computer?", choices: ["A machine that follows instructions fast", "An animal", "A kind of food"], answer: 0 },
      { q: "Can a computer think on its own?", choices: ["No, it does what it is told", "Yes, always", "Only at night"], answer: 0 },
      { q: "Which has a computer inside?", choices: ["A phone", "A rock", "A spoon"], answer: 0 },
      { q: "How do you tell a computer what to do?", choices: ["Keyboard, mouse or touch", "Shouting", "Waving"], answer: 0 },
      { q: "How big were the first computers?", choices: ["As big as a room", "As big as a coin", "Invisible"], answer: 0 },
      { q: "Where can a computer fit now?", choices: ["Inside a watch", "Only in a building", "Only in a car"], answer: 0 },
      { q: "Where does a computer show you the answer?", choices: ["On a screen", "On the floor", "In a book"], answer: 0 },
      { q: "Does a washing machine have a computer?", choices: ["Yes, usually", "No, never", "Only new ones cannot"], answer: 0 },
      { q: "Which one is a computer?", choices: ["A tablet", "A pillow", "A tree"], answer: 0 },
      { q: "Computers follow instructions...", choices: ["Very fast", "Very slowly", "Never"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🖥️⚙️", text: "A computer is a machine that takes input, processes it according to instructions, stores results, and produces output. Every computer, from a supercomputer to a smart watch, does exactly those four things and nothing more. The magic is speed: billions of simple operations every second." },
      { art: "🧠💾", text: "Inside are a few key parts. The CPU is the processor that executes instructions. RAM is fast temporary memory holding whatever is being worked on now. Storage keeps files when the power is off. Input devices bring information in; output devices like screens and speakers send it out." },
      { art: "📜💻", text: "Hardware is the physical machine; software is the instructions it runs. The same hardware can be a calculator, a game, or a word processor depending purely on which software is loaded. This separation is why computers are so flexible compared with any other machine." },
      { art: "🏛️📉", text: "The first electronic computers in the 1940s filled rooms, used thousands of glowing valves, and could do a few thousand calculations a second. A modern phone does trillions. That improvement, roughly doubling every two years for decades, is called Moore's Law, and it reshaped the world." }
    ],
    funFact: "The Apollo guidance computer that landed people on the Moon in 1969 had less processing power than a modern musical greeting card.",
    tryThis: "Open your device's settings and find its storage, memory and processor details. Then look up the same numbers for a 1990s computer. The ratio is almost unbelievable.",
    words: [
      { word: "CPU", meaning: "The processor that carries out instructions." },
      { word: "RAM", meaning: "Fast temporary memory for whatever is in use now." },
      { word: "Hardware", meaning: "The physical parts of a computer." },
      { word: "Software", meaning: "The instructions a computer runs." }
    ],
    questions: [
      { q: "What four things does every computer do?", choices: ["Input, process, store, output", "Think, feel, learn, sleep", "Read, write, draw, play", "Heat, cool, spin, stop"], answer: 0 },
      { q: "What is the CPU?", choices: ["The processor that executes instructions", "The screen", "The keyboard", "The battery"], answer: 0 },
      { q: "What is RAM?", choices: ["Fast temporary memory", "Long-term storage", "A type of screen", "A network cable"], answer: 0 },
      { q: "What is software?", choices: ["The instructions a computer runs", "The physical machine", "The power supply", "The casing"], answer: 0 },
      { q: "Why are computers so flexible?", choices: ["The same hardware runs different software", "They are small", "They are fast", "They are cheap"], answer: 0 },
      { q: "What did 1940s computers use?", choices: ["Thousands of glowing valves", "Silicon chips", "Batteries", "Magnets only"], answer: 0 },
      { q: "What is Moore's Law?", choices: ["Computing power roughly doubling every two years", "A law about screens", "A safety rule", "A tax on computers"], answer: 0 },
      { q: "Which is an output device?", choices: ["A screen", "A keyboard", "A mouse", "A microphone"], answer: 0 },
      { q: "Which is an input device?", choices: ["A keyboard", "A speaker", "A printer", "A screen"], answer: 0 },
      { q: "How does the Apollo computer compare to a greeting card?", choices: ["The greeting card has more power", "They are equal", "Apollo was far more powerful", "Neither has a computer"], answer: 0 }
    ]
  } },

  { id: "screens-and-pixels", title: "Screens and Pixels", emoji: "📺",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "how-a-phone-works", title: "How a Phone Works", emoji: "📱",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-internet-basics", title: "What Is the Internet?", emoji: "🌐",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "passwords-and-safety", title: "Passwords and Staying Safe", emoji: "🔐",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🔐🤫", text: "A password is a secret word that keeps your things safe. Only you and your grown-ups should know it. Never tell a friend or a stranger." },
      { art: "👤❓", text: "On the internet, people can pretend to be someone else. If anyone online asks your name, your school, or where you live, stop and tell a grown-up straight away." },
      { art: "🛑👨‍👩‍👧", text: "If something on a screen makes you feel scared, confused, or funny inside, that is a signal. Close it and go tell a grown-up. You will never be in trouble for telling." }
    ],
    funFact: "A good password is like a long silly sentence. PurpleElephantEatsSocks is much harder to guess than 1234, and much easier to remember!",
    tryThis: "Make up a silly four-word password with a grown-up, like GreenDragonLovesPizza. Do not use it anywhere yet, just practise how long passwords work.",
    questions: [
      { q: "What is a password?", choices: ["A secret word that keeps things safe", "A game", "A type of food"], answer: 0 },
      { q: "Who can you tell your password?", choices: ["Only your grown-ups", "Your friends", "Anyone online"], answer: 0 },
      { q: "If someone online asks where you live, you should...", choices: ["Stop and tell a grown-up", "Tell them", "Guess"], answer: 0 },
      { q: "Can people online pretend to be someone else?", choices: ["Yes", "No, never", "Only robots"], answer: 0 },
      { q: "If something on screen scares you, what do you do?", choices: ["Close it and tell a grown-up", "Keep watching", "Hide it"], answer: 0 },
      { q: "Will you get in trouble for telling?", choices: ["No, never", "Yes", "Sometimes"], answer: 0 },
      { q: "Which is a better password?", choices: ["PurpleElephantEatsSocks", "1234", "Your name"], answer: 0 },
      { q: "Should you share your school's name online?", choices: ["No", "Yes", "Only the address"], answer: 0 },
      { q: "A password should be...", choices: ["Secret", "Shouted", "Written on your hand"], answer: 0 },
      { q: "Who helps you stay safe online?", choices: ["Your grown-ups", "Strangers", "Nobody"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🔐📏", text: "Password strength comes mostly from length, not from symbols. A computer can try billions of guesses a second, so a short password with a symbol falls fast, while four random common words like correct horse battery staple would take centuries. Length beats complexity." },
      { art: "🔁🚫", text: "Never reuse a password across sites. When one website is hacked, criminals try that same email and password everywhere else, a technique called credential stuffing. A password manager creates and remembers a unique one for each site, and is what security experts actually use." },
      { art: "📱✅", text: "Two-factor authentication adds a second check, usually a code on your phone, so a stolen password alone is not enough. Turn it on for anything that matters. It is the single most effective protection available to an ordinary user." },
      { art: "🎣⚠️", text: "Phishing is a fake message pretending to be from a real company, trying to get you to type your password on a fake page. Clues: urgency, spelling mistakes, an address that is nearly but not quite right. When in doubt, do not click the link; go to the real site yourself." }
    ],
    funFact: "The most common password in the world is still 123456. Attackers try it first, and it works on millions of accounts every year.",
    tryThis: "Look at a real email from a company and find the sender address. Then look up what a phishing version of that email typically looks like. The differences are small and worth learning.",
    words: [
      { word: "Credential stuffing", meaning: "Trying leaked passwords on many other sites." },
      { word: "Password manager", meaning: "An app that creates and stores unique passwords." },
      { word: "Two-factor authentication", meaning: "A second check, like a phone code, beyond the password." },
      { word: "Phishing", meaning: "A fake message trying to steal your login." }
    ],
    questions: [
      { q: "What matters most for password strength?", choices: ["Length", "Symbols", "Capital letters", "Numbers"], answer: 0 },
      { q: "Why is correct horse battery staple strong?", choices: ["Its length makes it take centuries to guess", "It has symbols", "It is a famous phrase", "It is short"], answer: 0 },
      { q: "What is credential stuffing?", choices: ["Trying leaked passwords on other sites", "Stuffing a password with symbols", "Guessing birthdays", "Sharing passwords"], answer: 0 },
      { q: "Why never reuse a password?", choices: ["One breach then unlocks every account", "It is hard to remember", "Sites forbid it", "It slows you down"], answer: 0 },
      { q: "What does a password manager do?", choices: ["Creates and stores a unique password per site", "Guesses passwords", "Shares passwords", "Deletes passwords"], answer: 0 },
      { q: "What is two-factor authentication?", choices: ["A second check beyond the password", "Two passwords", "Two accounts", "A backup email"], answer: 0 },
      { q: "What is phishing?", choices: ["A fake message trying to steal your login", "A virus", "A type of password", "A search engine"], answer: 0 },
      { q: "What is a phishing clue?", choices: ["Urgency and a nearly-right address", "A long email", "A company logo", "A polite greeting"], answer: 0 },
      { q: "What should you do with a suspicious link?", choices: ["Go to the real site yourself instead", "Click it to check", "Forward it to friends", "Reply asking if it is real"], answer: 0 },
      { q: "What is the most common password in the world?", choices: ["123456", "password1", "qwerty", "letmein"], answer: 0 }
    ]
  } },

  { id: "robots", title: "Robots", emoji: "🤖",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "what-is-code", title: "What Is Code?", emoji: "⌨️", minAge: 6,
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "giving-instructions", title: "Giving Clear Instructions", emoji: "📋",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "loops-and-repeats", title: "Loops and Repeats", emoji: "🔁", minAge: 6,
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "if-then-in-code", title: "If-Then in Code", emoji: "🔀", minAge: 7,
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "bugs-and-debugging", title: "Bugs and Debugging", emoji: "🐛", minAge: 6,
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "how-touchscreens-work", title: "How Touchscreens Work", emoji: "👆",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "cameras-and-photos", title: "Cameras and Photos", emoji: "📷",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "gps-and-maps", title: "GPS and Maps", emoji: "🗺️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "wifi-and-signals", title: "Wi-Fi and Invisible Signals", emoji: "📶",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "how-search-works", title: "How Search Engines Work", emoji: "🔍", minAge: 7,
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "what-is-ai", title: "What Is Artificial Intelligence?", emoji: "🧠", minAge: 7,
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "voice-assistants", title: "Talking to Computers", emoji: "🎙️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "storing-data", title: "Where Files Live", emoji: "💾", minAge: 6,
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-cloud", title: "What Is the Cloud?", emoji: "☁️", minAge: 7,
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "binary-ones-and-zeros", title: "Ones and Zeros", emoji: "0️⃣", minAge: 7,
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "3d-printing", title: "3D Printing", emoji: "🖨️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "drones", title: "Drones", emoji: "🛸",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "electric-cars", title: "Electric Cars", emoji: "🔌",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "smart-homes", title: "Smart Homes", emoji: "🏠",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "screen-time-balance", title: "Screen Time Balance", emoji: "⏳",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "being-kind-online", title: "Being Kind Online", emoji: "💬", minAge: 6,
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "what-is-a-website", title: "What Is a Website?", emoji: "🧩", minAge: 7,
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "video-games-how", title: "How Video Games Work", emoji: "🎮", minAge: 6,
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "future-tech", title: "Technology of the Future", emoji: "🚀",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } }
  ]
};
