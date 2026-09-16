/* Reasoning - 30 concepts.
   Concepts with pages and questions are playable. Empty ones show "coming soon" until a later wave.
   The correct answer is always written first (answer: 0); the app shuffles choices on screen. */
window.CONTENT = window.CONTENT || {};
window.CONTENT['reasoning'] = {
  id: "reasoning", title: "Reasoning", emoji: "💡", color: "#FF6B6B", tint: "#FFE3E3",
  concepts: [
  { id: "if-then", title: "If This, Then That", emoji: "🔀",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🌧️☂️", text: "IF it is raining, THEN I take an umbrella. If this happens, then that happens. It is like a little rule!" },
      { art: "🥶🧥", text: "IF it is cold outside, THEN I wear a warm coat. IF I am hungry, THEN I eat. You use if-then all day long." },
      { art: "🤔💡", text: "If-then helps you think ahead. IF I leave my toy outside, THEN it might get wet. So I bring it in!" }
    ],
    funFact: "Computers and robots follow if-then rules too. IF the button is pressed, THEN the light turns on. That is how they think!",
    tryThis: "Play the if-then game at dinner. One person says an IF and the next has to finish with a sensible THEN. Try silly ones too.",
    questions: [
      { q: "IF it is raining, THEN I take an...", choices: ["Umbrella", "Ice cream", "Pillow"], answer: 0 },
      { q: "IF I am hungry, THEN I...", choices: ["Eat", "Sleep", "Sing"], answer: 0 },
      { q: "IF it is very cold, THEN I wear a...", choices: ["Warm coat", "Swimsuit", "Sun hat"], answer: 0 },
      { q: "IF I am sleepy, THEN I should...", choices: ["Go to bed", "Run fast", "Eat sweets"], answer: 0 },
      { q: "IF the light is red, THEN cars must...", choices: ["Stop", "Go fast", "Beep"], answer: 0 },
      { q: "IF I drop a glass, THEN it might...", choices: ["Break", "Fly", "Grow"], answer: 0 },
      { q: "IF I water a plant, THEN it will...", choices: ["Grow", "Disappear", "Turn blue"], answer: 0 },
      { q: "IF I do not brush my teeth, THEN...", choices: ["They can get holes", "They get whiter", "Nothing ever"], answer: 0 },
      { q: "IF the sun is out, THEN it is...", choices: ["Daytime", "Nighttime", "Winter"], answer: 0 },
      { q: "Does if-then help you think ahead?", choices: ["Yes", "No", "Only at school"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "➡️🔗", text: "An if-then statement, called a conditional, links a condition to a consequence. If the condition is true, the consequence follows. This is the basic building block of logical reasoning and of every computer program ever written." },
      { art: "⚠️🔄", text: "A crucial trap: if-then does not work backwards. If it is raining then the ground is wet, but a wet ground does not prove it rained. Someone may have used a hose. Assuming the reverse is a classic reasoning error called affirming the consequent." },
      { art: "🚫🔍", text: "What you can do is reason from the negative. If it is raining then the ground is wet, so if the ground is dry, it definitely is not raining. This is valid and it is one of the most useful checks in logic and in science." },
      { art: "🧪📊", text: "Scientists use conditionals to test ideas. If my hypothesis is correct, then this experiment should produce that result. If the result does not appear, the hypothesis has a problem. Being willing to follow that logic honestly is what makes science work." }
    ],
    funFact: "Every app on your phone is built from millions of conditionals. If the password matches, then grant access. If the battery is under 20 percent, then show a warning.",
    tryThis: "Find an advertisement making an if-then claim, then ask whether the reverse is being implied. Ads often blur that line deliberately.",
    words: [
      { word: "Conditional", meaning: "An if-then statement linking condition to consequence." },
      { word: "Condition", meaning: "The if part of the statement." },
      { word: "Consequence", meaning: "The then part that follows." },
      { word: "Hypothesis", meaning: "An idea you test with an experiment." }
    ],
    questions: [
      { q: "What is a conditional?", choices: ["An if-then statement", "A question", "A category", "A pattern"], answer: 0 },
      { q: "If it rains then the ground is wet. The ground is wet. What can you conclude?", choices: ["Nothing for certain", "It definitely rained", "It did not rain", "It will rain again"], answer: 0 },
      { q: "If it rains then the ground is wet. The ground is dry. What follows?", choices: ["It is not raining", "It is raining", "It rained earlier", "Nothing"], answer: 0 },
      { q: "What is the if part called?", choices: ["The condition", "The consequence", "The result", "The proof"], answer: 0 },
      { q: "What is assuming the reverse of a conditional called?", choices: ["Affirming the consequent", "Deduction", "Induction", "Correlation"], answer: 0 },
      { q: "How do scientists use conditionals?", choices: ["To predict what an experiment should show", "To avoid testing", "To name results", "To sort data"], answer: 0 },
      { q: "If the test result does not appear as predicted, then...", choices: ["The hypothesis has a problem", "The experiment was pointless", "The hypothesis is proven", "Nothing can be learned"], answer: 0 },
      { q: "Are conditionals used in computer programs?", choices: ["Yes, constantly", "No, never", "Only in games", "Only in old programs"], answer: 0 },
      { q: "What is a hypothesis?", choices: ["An idea you test with an experiment", "A proven fact", "A guess you never check", "A type of conditional"], answer: 0 },
      { q: "Which reasoning is valid?", choices: ["If A then B; not B, so not A", "If A then B; B, so A", "If A then B; not A, so not B", "If A then B; so B always"], answer: 0 }
    ]
  } },

  { id: "predictions", title: "Making Predictions", emoji: "🔮",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "asking-why", title: "Asking Why", emoji: "❓",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "fact-opinion", title: "Fact or Opinion", emoji: "📰",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "✅📏", text: "A fact is something true that we can check. The sky is up. Water is wet. Dogs have four legs. We can all agree!" },
      { art: "💭🍦", text: "An opinion is what someone thinks or likes. Chocolate is the best flavour! That is an opinion. Someone else might say strawberry." },
      { art: "🤝😊", text: "Both are fine! Facts we check. Opinions we share. And it is okay for friends to like different things." }
    ],
    funFact: "Words like best, worst, prettiest, and yummiest are clues that someone is sharing an opinion, not a fact.",
    tryThis: "Say five things about your day. For each one, decide together: is that a fact we could check, or your opinion?",
    questions: [
      { q: "Which one is a fact?", choices: ["A cat has four legs", "Cats are the best", "Cats are cute"], answer: 0 },
      { q: "Which one is an opinion?", choices: ["Blue is the prettiest colour", "The sky can be blue", "Water is wet"], answer: 0 },
      { q: "A fact is something we can...", choices: ["Check", "Imagine", "Forget"], answer: 0 },
      { q: "An opinion is what someone...", choices: ["Thinks or likes", "Can prove", "Must believe"], answer: 0 },
      { q: "Which is a fact?", choices: ["Ice is cold", "Ice cream is yummy", "Winter is boring"], answer: 0 },
      { q: "Which is an opinion?", choices: ["Dogs are better than cats", "Dogs bark", "Dogs have fur"], answer: 0 },
      { q: "Can two friends have different opinions?", choices: ["Yes, that is fine", "No, never", "Only on Sundays"], answer: 0 },
      { q: "Which is a fact?", choices: ["There are 7 days in a week", "Fridays are the best day", "Weeks are too long"], answer: 0 },
      { q: "The word best is a clue for a...", choices: ["Opinion", "Fact", "Question"], answer: 0 },
      { q: "Which is a fact?", choices: ["An elephant is bigger than a mouse", "Elephants are scary", "Mice are cuter"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "✅🔬", text: "A fact is a statement that can be verified as true or false using evidence. Water boils at 100 degrees Celsius at sea level. Either the evidence supports it or it does not, and your feelings about it change nothing." },
      { art: "💭🎨", text: "An opinion expresses a judgement, preference, or belief. That painting is beautiful. Opinions are not wrong simply for being opinions, but they cannot be proven the way facts can, and different people can hold opposing ones reasonably." },
      { art: "🎭📰", text: "The tricky middle ground is opinion dressed as fact. This is the best phone on the market sounds factual but hides a judgement about what best means. News, advertising, and social media are full of these, and spotting them is a genuine skill." },
      { art: "🧠🔍", text: "Ask three questions of any claim: could evidence settle this, who is making the claim and what do they gain, and would a reasonable person disagree? A false claim is still not an opinion; it is simply a wrong fact." }
    ],
    funFact: "Informed opinions and uninformed ones are not equal. An opinion built on evidence and experience is far more reliable, even though neither is a fact.",
    tryThis: "Take one news article and highlight factual claims in one colour and opinions in another. Then check whether the opinions are clearly labelled as such.",
    words: [
      { word: "Fact", meaning: "A statement that evidence can verify." },
      { word: "Opinion", meaning: "A judgement, preference, or belief." },
      { word: "Evidence", meaning: "Information used to test whether something is true." },
      { word: "Bias", meaning: "A leaning that affects how someone presents information." }
    ],
    questions: [
      { q: "What makes a statement a fact?", choices: ["Evidence can verify it", "Many people believe it", "It sounds confident", "An expert said it"], answer: 0 },
      { q: "Which is an opinion?", choices: ["This is the best phone available", "This phone has 128 GB of storage", "This phone was released in 2024", "This phone weighs 180 grams"], answer: 0 },
      { q: "If a statement is false, is it an opinion?", choices: ["No, it is a wrong fact", "Yes, automatically", "Only if someone believes it", "It depends who says it"], answer: 0 },
      { q: "What is bias?", choices: ["A leaning that affects how information is presented", "A type of fact", "A deliberate lie", "A statistical error"], answer: 0 },
      { q: "Which question helps test a claim?", choices: ["Could evidence settle this?", "Do I like it?", "Is it popular?", "Is it short?"], answer: 0 },
      { q: "Are all opinions equally reliable?", choices: ["No, informed ones rest on evidence", "Yes, always", "Only expert ones count", "Opinions are never reliable"], answer: 0 },
      { q: "Why is best a warning word?", choices: ["It hides a judgement about criteria", "It is always false", "It is grammatically wrong", "It means the speaker is lying"], answer: 0 },
      { q: "Water boils at 100 degrees Celsius at sea level. This is...", choices: ["A fact", "An opinion", "A bias", "A hypothesis"], answer: 0 },
      { q: "Why should you ask who benefits from a claim?", choices: ["Their interest may shape how it is presented", "To be suspicious of everyone", "To find someone to blame", "It never matters"], answer: 0 },
      { q: "Can reasonable people disagree about opinions?", choices: ["Yes", "No", "Only about art", "Only about food"], answer: 0 }
    ]
  } },

  { id: "real-pretend", title: "Real or Pretend", emoji: "🦄",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "detective-clues", title: "Detective Clues", emoji: "🕵️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "what-next", title: "What Happens Next?", emoji: "📖",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "solving-problems", title: "Solving Problems", emoji: "🔧",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🤔❓", text: "A problem is something you want to fix. My tower keeps falling down! What can I do?" },
      { art: "💡💡💡", text: "Good thinkers try more than one idea. Maybe a bigger block at the bottom? Maybe fewer blocks on top?" },
      { art: "🔁🎉", text: "If the first idea does not work, try the next one. That is not failing. That is learning! Keep going until it works." }
    ],
    funFact: "Thomas Edison tried thousands of ideas before his light bulb worked. He said he had not failed, he had just found lots of ways that did not work!",
    tryThis: "Build the tallest tower you can from cups or blocks. When it falls, change ONE thing and try again. How tall can you get in five tries?",
    questions: [
      { q: "What is a problem?", choices: ["Something you want to fix", "A kind of toy", "A colour"], answer: 0 },
      { q: "If your first idea does not work, you should...", choices: ["Try another idea", "Stop forever", "Cry loudly"], answer: 0 },
      { q: "Good problem solvers try...", choices: ["More than one idea", "Only one idea", "No ideas"], answer: 0 },
      { q: "If your tower keeps falling, you could try...", choices: ["A bigger block at the bottom", "Closing your eyes", "Adding more on top quickly"], answer: 0 },
      { q: "Making a mistake means you are...", choices: ["Learning", "Bad at everything", "Finished"], answer: 0 },
      { q: "What should you do before trying?", choices: ["Think of an idea", "Give up", "Nothing"], answer: 0 },
      { q: "If you are stuck, you can...", choices: ["Ask for help", "Hide the problem", "Shout at it"], answer: 0 },
      { q: "Trying again is called being...", choices: ["Determined", "Silly", "Slow"], answer: 0 },
      { q: "How many ideas did Edison try?", choices: ["Thousands", "Two", "None"], answer: 0 },
      { q: "Is it okay if something takes lots of tries?", choices: ["Yes", "No", "Only for grown-ups"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🎯📋", text: "Strong problem solving follows a structure. First, define the problem precisely. My computer is broken is too vague; the screen stays black when I press power is something you can actually work with." },
      { art: "✂️🧩", text: "Second, break a big problem into smaller ones. An overwhelming task becomes a list of manageable pieces, and often one small piece turns out to be the real cause of everything." },
      { art: "💡🔬", text: "Third, generate several possible solutions before evaluating any of them. Judging ideas too early kills good ones. Then test the most promising, changing one variable at a time so you know what actually made the difference." },
      { art: "🔁📈", text: "Fourth, review the result. Did it work, partly work, or fail? Each attempt gives information, which is why engineers call this iteration rather than failure. The loop repeats until the problem is solved." }
    ],
    funFact: "Engineers deliberately build things to break in testing. Finding the failure point on purpose is cheaper and safer than discovering it after the product ships.",
    tryThis: "Take something that annoys you at home, like a messy desk. Write the problem precisely, list five possible fixes, try the easiest, and review after a week.",
    words: [
      { word: "Define", meaning: "To state exactly what the problem is." },
      { word: "Variable", meaning: "Something you can change in a test." },
      { word: "Iteration", meaning: "Repeating a cycle of trying and improving." },
      { word: "Evaluate", meaning: "To judge how well something worked." }
    ],
    questions: [
      { q: "What is the first step in problem solving?", choices: ["Define the problem precisely", "Try a random fix", "Ask for money", "Give up early"], answer: 0 },
      { q: "Why break a big problem into smaller parts?", choices: ["Smaller pieces are manageable and reveal the real cause", "It looks more professional", "It takes longer", "To avoid solving it"], answer: 0 },
      { q: "Why generate several solutions before judging?", choices: ["Judging too early kills good ideas", "It wastes time usefully", "More ideas are always better", "To confuse yourself"], answer: 0 },
      { q: "Why change one variable at a time?", choices: ["So you know what caused the change", "It is faster", "It uses less material", "It is traditional"], answer: 0 },
      { q: "What is iteration?", choices: ["Repeating a cycle of trying and improving", "Failing repeatedly", "Copying a solution", "Defining a problem"], answer: 0 },
      { q: "Which problem statement is most useful?", choices: ["The screen stays black when I press power", "My computer is broken", "Technology is annoying", "Something is wrong"], answer: 0 },
      { q: "Why do engineers break things on purpose in testing?", choices: ["Finding failure points early is cheaper and safer", "To practise", "To use up materials", "To impress clients"], answer: 0 },
      { q: "What does evaluate mean?", choices: ["To judge how well something worked", "To guess", "To describe", "To repeat"], answer: 0 },
      { q: "A failed attempt gives you...", choices: ["Information", "Nothing", "A reason to stop", "Proof it is impossible"], answer: 0 },
      { q: "What is a variable?", choices: ["Something you can change in a test", "A fixed rule", "A conclusion", "A type of problem"], answer: 0 }
    ]
  } },

  { id: "fair-sharing", title: "Fair Sharing", emoji: "🍕",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "rules-why", title: "Why We Have Rules", emoji: "🚦",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "safe-unsafe", title: "Safe or Not Safe", emoji: "🦺",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "needs-wants", title: "Needs and Wants", emoji: "🛒",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "first-next-last", title: "First, Next, Last", emoji: "🥇",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "comparing-choices", title: "Comparing Choices", emoji: "🤔",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "learning-mistakes", title: "Learning from Mistakes", emoji: "🌱",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "listening", title: "Listening Carefully", emoji: "👂",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "good-questions", title: "Asking Good Questions", emoji: "🙋",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "main-idea", title: "Finding the Main Idea", emoji: "⭐",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "imagination", title: "Real World or Imagination", emoji: "🎠",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "planning", title: "Planning Ahead", emoji: "🗓️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "guess-check", title: "Guess and Check", emoji: "🎲",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "evidence", title: "Looking at Evidence", emoji: "🔬",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "taking-turns", title: "Taking Turns Logic", emoji: "🔄",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "story-patterns", title: "Patterns in Stories", emoji: "📚",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "doesnt-belong", title: "What Doesn’t Belong", emoji: "🚫",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "making-groups", title: "Making Groups", emoji: "👥",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "other-views", title: "Seeing Both Sides", emoji: "👓",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "kind-choices", title: "Making Kind Choices", emoji: "💗",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "think-first", title: "Think Before You Act", emoji: "🛑",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "explain-answer", title: "Explaining Your Answer", emoji: "🗣️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } }
  ]
};
