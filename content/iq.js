/* IQ Boosters - 30 concepts.
   Concepts with pages and questions are playable. Empty ones show "coming soon" until a later wave.
   The correct answer is always written first (answer: 0); the app shuffles choices on screen. */
window.CONTENT = window.CONTENT || {};
window.CONTENT['iq'] = {
  id: "iq", title: "IQ Boosters", emoji: "🧠", color: "#9B5DE5", tint: "#F0E4FC",
  concepts: [
  { id: "number-patterns", title: "Number Patterns", emoji: "🔢",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "2️⃣4️⃣6️⃣", text: "Numbers can make patterns too! 2, 4, 6, 8. Each one is two bigger than the one before." },
      { art: "🔟5️⃣", text: "Patterns can go down as well. 10, 9, 8, 7. Each one is one smaller. Counting backwards!" },
      { art: "🕵️🔢", text: "Be a number detective. Look at the numbers and ask: what is happening each time? Then you can guess what comes next!" }
    ],
    funFact: "When you count 2, 4, 6, 8 you are saying the even numbers. When you count 1, 3, 5, 7 those are the odd ones.",
    tryThis: "Count by twos up to 20, then by fives up to 50. Clap on every number. Your brain will start to feel the pattern.",
    questions: [
      { q: "2, 4, 6, what comes next?", choices: ["8", "7", "10"], answer: 0 },
      { q: "1, 2, 3, 4, next?", choices: ["5", "6", "3"], answer: 0 },
      { q: "10, 9, 8, next?", choices: ["7", "9", "11"], answer: 0 },
      { q: "5, 10, 15, next?", choices: ["20", "16", "25"], answer: 0 },
      { q: "2, 4, 6, 8 are called...", choices: ["Even numbers", "Odd numbers", "Big numbers"], answer: 0 },
      { q: "1, 3, 5, 7 are called...", choices: ["Odd numbers", "Even numbers", "Small numbers"], answer: 0 },
      { q: "3, 6, 9, next?", choices: ["12", "10", "11"], answer: 0 },
      { q: "20, 19, 18, next?", choices: ["17", "21", "16"], answer: 0 },
      { q: "1, 1, 1, 1, next?", choices: ["1", "2", "0"], answer: 0 },
      { q: "10, 20, 30, next?", choices: ["40", "35", "31"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🔢🔍", text: "To crack a number pattern, calculate the difference between consecutive terms. If the differences are constant, the rule is addition or subtraction. 5, 9, 13, 17 has a constant difference of 4, so the next term is 21." },
      { art: "✖️📈", text: "If the differences grow, check for multiplication instead. 2, 6, 18, 54 multiplies by 3 each time. These are geometric sequences, and they grow astonishingly fast: doubling from 1 just 30 times passes a billion." },
      { art: "📐🔺", text: "Some patterns come from shapes. Square numbers 1, 4, 9, 16 are dots arranged in squares. Triangular numbers 1, 3, 6, 10 are dots stacked in triangles, each adding one more row than the last." },
      { art: "🎩🧮", text: "There is a famous story that young Carl Gauss, asked to add every number from 1 to 100, found the answer in seconds. He paired 1 with 100, 2 with 99, and so on: fifty pairs each summing to 101, giving 5,050." }
    ],
    funFact: "Fold a piece of paper in half 42 times, in theory, and the stack would reach the Moon. Doubling is deceptively powerful.",
    tryThis: "Work out the sum of 1 to 50 using Gauss's pairing trick, then check with a calculator. Once you see the shortcut you will never add them one by one again.",
    words: [
      { word: "Consecutive", meaning: "Following one after another in order." },
      { word: "Difference", meaning: "The gap between two numbers." },
      { word: "Geometric sequence", meaning: "A sequence where each term is multiplied by the same number." },
      { word: "Square number", meaning: "A number made by multiplying a number by itself." }
    ],
    questions: [
      { q: "5, 9, 13, 17, next?", choices: ["21", "20", "19", "23"], answer: 0 },
      { q: "2, 6, 18, 54, what is the rule?", choices: ["Multiply by 3", "Add 4", "Add 12", "Double it"], answer: 0 },
      { q: "1, 4, 9, 16 are...", choices: ["Square numbers", "Triangular numbers", "Prime numbers", "Even numbers"], answer: 0 },
      { q: "1, 3, 6, 10, 15 are...", choices: ["Triangular numbers", "Square numbers", "Fibonacci numbers", "Odd numbers"], answer: 0 },
      { q: "What is the sum of 1 to 100?", choices: ["5,050", "1,000", "10,000", "4,950"], answer: 0 },
      { q: "How did Gauss solve it quickly?", choices: ["Paired numbers summing to 101", "Used a calculator", "Guessed", "Added very fast"], answer: 0 },
      { q: "If differences are constant, the rule involves...", choices: ["Addition or subtraction", "Multiplication", "Squaring", "Nothing"], answer: 0 },
      { q: "100, 50, 25, 12.5, the rule is...", choices: ["Divide by 2", "Subtract 50", "Subtract 25", "Divide by 4"], answer: 0 },
      { q: "Doubling from 1, how many steps to pass a billion?", choices: ["About 30", "About 100", "About 1,000", "About 10"], answer: 0 },
      { q: "What is a geometric sequence?", choices: ["Each term multiplied by the same number", "Each term plus the same number", "Terms in a shape", "Random numbers"], answer: 0 }
    ]
  } },

  { id: "shape-patterns", title: "Shape Patterns", emoji: "🔶",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "analogies", title: "This Is to That", emoji: "🔗",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🐶🐾", text: "Dog goes with puppy, like cat goes with kitten. A grown-up animal and its baby. They go together!" },
      { art: "🧦👟", text: "Foot goes with shoe, like hand goes with glove. Can you feel how they match?" },
      { art: "🤝", text: "This is called matching pairs. Find how the first two go together, then find the same match for the next one." }
    ],
    funFact: "Your brain is brilliant at matching. That is how you knew a new dog was a dog even though you had never seen that exact one before!",
    tryThis: "Play the matching game: say two things that go together, then let someone else make a new pair that matches the same way.",
    questions: [
      { q: "Dog is to puppy as cat is to...", choices: ["Kitten", "Dog", "Fish"], answer: 0 },
      { q: "Hand is to glove as foot is to...", choices: ["Shoe", "Hat", "Nose"], answer: 0 },
      { q: "Bird is to sky as fish is to...", choices: ["Water", "Tree", "Road"], answer: 0 },
      { q: "Hot is to cold as big is to...", choices: ["Small", "Huge", "Round"], answer: 0 },
      { q: "Cow is to milk as chicken is to...", choices: ["Egg", "Wool", "Honey"], answer: 0 },
      { q: "Day is to night as up is to...", choices: ["Down", "Over", "Fast"], answer: 0 },
      { q: "Teacher is to school as doctor is to...", choices: ["Hospital", "Garden", "Beach"], answer: 0 },
      { q: "Wheel is to car as wing is to...", choices: ["Bird", "Rock", "House"], answer: 0 },
      { q: "Happy is to sad as wet is to...", choices: ["Dry", "Rainy", "Blue"], answer: 0 },
      { q: "Bee is to honey as sheep is to...", choices: ["Wool", "Milk", "Eggs"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🔗🧠", text: "An analogy states that one pair of things relates in the same way as another pair. A is to B as C is to D. The skill is identifying the precise relationship in the first pair, then applying that exact relationship to find the missing term." },
      { art: "📚🏷️", text: "Relationships come in recognisable types: part to whole (finger to hand), tool to user (hammer to carpenter), cause to effect (fire to smoke), opposite (hot to cold), and category to example (bird to eagle). Naming the type makes the answer obvious." },
      { art: "🔬💡", text: "Analogies are not just puzzles; they drive real discovery. Rutherford compared the atom to a tiny solar system. Darwin reasoned from farm animal breeding to natural selection. Explaining electricity as water in pipes helps engineers think clearly about circuits." },
      { art: "⚠️🚧", text: "Every analogy eventually breaks down, and knowing where is as important as the analogy itself. Electrons are not really little balls, and atoms are not really solar systems. Analogies are thinking tools, not descriptions of reality." }
    ],
    funFact: "Analogy questions appear on nearly every aptitude test worldwide, because spotting abstract relationships predicts problem-solving ability better than memorising facts.",
    tryThis: "Explain something you understand well using an analogy to something completely different, then find the point where your analogy stops working. That boundary teaches you a lot.",
    words: [
      { word: "Analogy", meaning: "A comparison showing two pairs relate the same way." },
      { word: "Relationship", meaning: "How two things connect to each other." },
      { word: "Abstract", meaning: "An idea rather than a physical object." },
      { word: "Model", meaning: "A simplified version used to understand something complex." }
    ],
    questions: [
      { q: "Finger is to hand as petal is to...", choices: ["Flower", "Stem", "Garden", "Root"], answer: 0 },
      { q: "Hammer is to carpenter as scalpel is to...", choices: ["Surgeon", "Hospital", "Patient", "Medicine"], answer: 0 },
      { q: "Fire is to smoke as rain is to...", choices: ["Puddle", "Cloud", "Sky", "Storm"], answer: 0 },
      { q: "Bird is to eagle as tree is to...", choices: ["Oak", "Forest", "Leaf", "Wood"], answer: 0 },
      { q: "What type of relationship is finger to hand?", choices: ["Part to whole", "Cause to effect", "Opposite", "Tool to user"], answer: 0 },
      { q: "Who compared the atom to a solar system?", choices: ["Rutherford", "Newton", "Darwin", "Einstein"], answer: 0 },
      { q: "Why do analogies eventually break down?", choices: ["They are simplifications, not descriptions of reality", "They are always wrong", "People misuse them", "They are too old"], answer: 0 },
      { q: "Electricity is often explained as...", choices: ["Water flowing in pipes", "Wind in trees", "Fire in a box", "Sound in air"], answer: 0 },
      { q: "Book is to library as painting is to...", choices: ["Gallery", "Artist", "Canvas", "Colour"], answer: 0 },
      { q: "Why do aptitude tests use analogies?", choices: ["Spotting abstract relationships predicts problem solving", "They are easy to mark", "They test memory", "They are traditional"], answer: 0 }
    ]
  } },

  { id: "memory-challenge", title: "Memory Challenge", emoji: "🧠",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "spot-difference", title: "Spot the Difference", emoji: "👀",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "hidden-pictures", title: "Hidden Pictures", emoji: "🖼️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "riddles", title: "Riddles", emoji: "❓",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "❓🤭", text: "A riddle is a puzzle question with a clever answer. It makes your brain go hmmmm!" },
      { art: "👂🔑", text: "Listen carefully to every word. The clues are hiding right inside the question. What has hands but cannot clap? A clock!" },
      { art: "🧠✨", text: "If you do not know, that is okay. Guess, laugh, and try another. Riddles are for fun!" }
    ],
    funFact: "People have been telling riddles for thousands of years. Kids in ancient Egypt told riddles to each other, just like you!",
    tryThis: "Learn one riddle by heart and tell it to three different people today. Watch their faces while they think.",
    questions: [
      { q: "What has hands but cannot clap?", choices: ["A clock", "A bird", "A tree"], answer: 0 },
      { q: "What has legs but cannot walk?", choices: ["A table", "A cat", "A baby"], answer: 0 },
      { q: "What gets wetter the more it dries?", choices: ["A towel", "A rock", "The sun"], answer: 0 },
      { q: "What has a face but no eyes?", choices: ["A clock", "A doll", "A mask"], answer: 0 },
      { q: "I am yellow and monkeys love me. What am I?", choices: ["A banana", "A rock", "A shoe"], answer: 0 },
      { q: "What has teeth but cannot bite?", choices: ["A comb", "A dog", "A shark"], answer: 0 },
      { q: "I am full of holes but hold water. What am I?", choices: ["A sponge", "A cup", "A box"], answer: 0 },
      { q: "What goes up but never comes down?", choices: ["Your age", "A ball", "Rain"], answer: 0 },
      { q: "What has a neck but no head?", choices: ["A bottle", "A giraffe", "A duck"], answer: 0 },
      { q: "I shine at night and am not the Moon. What am I?", choices: ["A star", "The Sun", "A rock"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🧩🗝️", text: "Riddles work by misdirection. They use words with more than one meaning, or describe something so unusually that your brain reaches for the wrong category. Solving them means noticing the assumption you made without realising it." },
      { art: "💭🔄", text: "The most useful technique is to challenge each assumption in turn. If a riddle mentions hands, ask what else has hands besides people. This deliberate reframing is called lateral thinking, and it is a genuine problem-solving tool." },
      { art: "🏛️📜", text: "Riddles are ancient. The Riddle of the Sphinx from Greek myth asked what walks on four legs in the morning, two at noon, and three in the evening. The answer is a human: crawling as a baby, walking upright, then using a cane in old age." },
      { art: "🎯🧠", text: "This kind of thinking transfers directly to real work. Scientists, detectives, and engineers all progress by questioning assumptions everyone else took for granted. The habit of asking what if I am wrong about this is genuinely valuable." }
    ],
    funFact: "Lateral thinking as a named concept was coined by Edward de Bono in 1967, but the technique is as old as the riddles the Sphinx was telling.",
    tryThis: "Try this classic: a man lives on the 20th floor and takes the lift down every morning, but coming home he only rides to the 10th and walks. Why? He is short and cannot reach the higher button, unless it is raining and he has an umbrella.",
    words: [
      { word: "Riddle", meaning: "A puzzle question with a clever, often tricky answer." },
      { word: "Lateral thinking", meaning: "Solving problems by approaching them from unexpected angles." },
      { word: "Assumption", meaning: "Something you take to be true without checking." },
      { word: "Misdirection", meaning: "Leading attention away from the real answer." }
    ],
    questions: [
      { q: "How do riddles usually trick you?", choices: ["By misdirection and hidden assumptions", "By using rare words", "By being very long", "By having no answer"], answer: 0 },
      { q: "What is the answer to the Riddle of the Sphinx?", choices: ["A human", "A horse", "A tree", "A river"], answer: 0 },
      { q: "What does three legs in the evening represent?", choices: ["An old person with a cane", "A tripod", "A three-legged stool", "A tricycle"], answer: 0 },
      { q: "What is lateral thinking?", choices: ["Approaching problems from unexpected angles", "Thinking very fast", "Thinking in straight lines", "Memorising answers"], answer: 0 },
      { q: "Who coined the term lateral thinking?", choices: ["Edward de Bono", "Isaac Newton", "Socrates", "Alan Turing"], answer: 0 },
      { q: "What is an assumption?", choices: ["Something taken as true without checking", "A proven fact", "A question", "A wrong answer"], answer: 0 },
      { q: "What is the best first step on a hard riddle?", choices: ["Question your assumptions", "Guess quickly", "Look up the answer", "Ignore the wording"], answer: 0 },
      { q: "Why does riddle-solving transfer to real work?", choices: ["Questioning assumptions drives real discovery", "Riddles appear in job interviews", "It improves memory", "It is entertaining"], answer: 0 },
      { q: "What has many keys but opens no locks?", choices: ["A piano", "A janitor", "A map", "A puzzle"], answer: 0 },
      { q: "The more of me you take, the more you leave behind. What am I?", choices: ["Footsteps", "Money", "Time", "Water"], answer: 0 }
    ]
  } },

  { id: "logic-grids", title: "Logic Puzzles", emoji: "🔲",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "counting-puzzles", title: "Counting Puzzles", emoji: "🧮",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "mirror-images", title: "Mirror Images", emoji: "🪞",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "rotations", title: "Turning Shapes", emoji: "🔄",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "missing-piece", title: "The Missing Piece", emoji: "🧩",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "codes-symbols", title: "Codes and Symbols", emoji: "🔣",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "word-play", title: "Word Play", emoji: "🔤",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "rhyming", title: "Rhyming Brain", emoji: "🎵",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "quick-opposites", title: "Quick Opposites", emoji: "↔️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "speed-sorting", title: "Speed Sorting", emoji: "⚡",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "what-comes-next", title: "What Comes Next?", emoji: "➡️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "size-puzzles", title: "Size Puzzles", emoji: "📏",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "direction-puzzles", title: "Direction Puzzles", emoji: "🧭",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "order-puzzles", title: "Who Comes First?", emoji: "🏁",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "mini-sudoku", title: "Mini Sudoku", emoji: "🔟",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "stick-shapes", title: "Stick Shapes", emoji: "🥢",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "balance-puzzles", title: "Balance Puzzles", emoji: "⚖️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "map-puzzles", title: "Map Puzzles", emoji: "🗺️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "time-puzzles", title: "Time Puzzles", emoji: "⏰",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "money-puzzles", title: "Money Puzzles", emoji: "🪙",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "measure-puzzles", title: "Measuring Puzzles", emoji: "📐",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "story-problems", title: "Story Problems", emoji: "📖",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "super-challenge", title: "Super Mixed Challenge", emoji: "🏆",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } }
  ]
};
