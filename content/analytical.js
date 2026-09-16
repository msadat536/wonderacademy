/* Analytical Skills - 30 concepts.
   Concepts with pages and questions are playable. Empty ones show "coming soon" until a later wave.
   The correct answer is always written first (answer: 0); the app shuffles choices on screen. */
window.CONTENT = window.CONTENT || {};
window.CONTENT['analytical'] = {
  id: "analytical", title: "Analytical Skills", emoji: "🧩", color: "#FF9F1C", tint: "#FFEFD9",
  concepts: [
  { id: "patterns", title: "Finding Patterns", emoji: "🔷",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🔴🔵🔴🔵", text: "Red, blue, red, blue... what comes next? Red! That is a pattern. A pattern repeats the same way again and again." },
      { art: "👏👏🦶👏👏🦶", text: "Patterns can be sounds too. Clap, clap, stomp. Clap, clap, stomp. Can you keep it going?" },
      { art: "🦓🐝🌈", text: "Patterns are everywhere! Stripes on a zebra, stripes on a bee, colours in a rainbow. Look around and find one." }
    ],
    funFact: "Your fingerprint is a pattern of tiny lines, and nobody else in the whole world has the same one as you.",
    tryThis: "Make a pattern with spoons and forks on the table: spoon, fork, spoon, fork. Ask someone to add the next three.",
    questions: [
      { q: "Red, blue, red, blue, what comes next?", choices: ["Red", "Green", "Yellow"], answer: 0 },
      { q: "A pattern is something that...", choices: ["Repeats", "Disappears", "Gets louder"], answer: 0 },
      { q: "Cat, dog, cat, dog, cat, what is next?", choices: ["Dog", "Cat", "Bird"], answer: 0 },
      { q: "1, 2, 1, 2, 1, what comes next?", choices: ["2", "3", "1"], answer: 0 },
      { q: "Big, small, big, small, next is...", choices: ["Big", "Small", "Medium"], answer: 0 },
      { q: "Which animal has a striped pattern?", choices: ["Zebra", "Elephant", "Pig"], answer: 0 },
      { q: "Clap, stomp, clap, stomp, next?", choices: ["Clap", "Jump", "Sit"], answer: 0 },
      { q: "Star, moon, star, moon, star, next?", choices: ["Moon", "Star", "Sun"], answer: 0 },
      { q: "Can patterns be made of sounds?", choices: ["Yes", "No", "Only songs"], answer: 0 },
      { q: "A, B, A, B, A, what comes next?", choices: ["B", "A", "C"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🔁🔢", text: "A pattern is a rule that repeats. Finding the rule is the whole skill: once you know it, you can predict what comes next, fill in a missing piece, or extend a sequence as far as you like. Mathematicians and scientists do this constantly." },
      { art: "➕✖️", text: "Number patterns usually follow arithmetic rules. 2, 4, 6, 8 adds 2 each time. 3, 9, 27, 81 multiplies by 3. 1, 4, 9, 16 are the square numbers. Always ask: what am I doing to get from one term to the next?" },
      { art: "🌻🐚", text: "Some patterns appear throughout nature. The Fibonacci sequence, where each number is the sum of the two before it (1, 1, 2, 3, 5, 8, 13), shows up in sunflower seed spirals, pine cones, and nautilus shells." },
      { art: "🔍🧩", text: "Patterns are also how we spot what does not belong. If you know the rule, a break in it stands out immediately. This is how scientists notice anomalies, how proofreaders find typos, and how doctors spot something unusual on a scan." }
    ],
    funFact: "Bees build hexagonal honeycomb cells because hexagons tile a surface with no gaps while using the least wax. The pattern is the most efficient solution to a real engineering problem.",
    tryThis: "Write the Fibonacci sequence to 10 terms, then divide each number by the one before. The answers close in on 1.618, the golden ratio found in art and architecture.",
    words: [
      { word: "Sequence", meaning: "An ordered list of items following a rule." },
      { word: "Rule", meaning: "The instruction that generates a pattern." },
      { word: "Fibonacci", meaning: "A sequence where each number is the sum of the two before it." },
      { word: "Predict", meaning: "To work out what comes next using a rule." }
    ],
    questions: [
      { q: "2, 4, 6, 8, what comes next?", choices: ["10", "9", "12", "7"], answer: 0 },
      { q: "3, 9, 27, what is the rule?", choices: ["Multiply by 3", "Add 6", "Add 3", "Double it"], answer: 0 },
      { q: "1, 4, 9, 16, 25 are called...", choices: ["Square numbers", "Prime numbers", "Even numbers", "Fibonacci numbers"], answer: 0 },
      { q: "In Fibonacci, each number is...", choices: ["The sum of the two before it", "Double the last one", "A prime", "Three more than the last"], answer: 0 },
      { q: "1, 1, 2, 3, 5, 8, what comes next?", choices: ["13", "11", "10", "16"], answer: 0 },
      { q: "100, 50, 25, what is the rule?", choices: ["Divide by 2", "Subtract 50", "Subtract 25", "Divide by 4"], answer: 0 },
      { q: "Where does the Fibonacci sequence appear in nature?", choices: ["Sunflower seed spirals", "Rain drops", "Lightning", "Ocean waves"], answer: 0 },
      { q: "Why do bees use hexagons?", choices: ["They tile with no gaps using least wax", "They are easiest to draw", "Bees like six sides", "They are strongest against water"], answer: 0 },
      { q: "5, 10, 20, 40, next?", choices: ["80", "50", "45", "60"], answer: 0 },
      { q: "What is the first step in solving a pattern?", choices: ["Find the rule", "Guess the answer", "Count the items", "Skip it"], answer: 0 }
    ]
  } },

  { id: "sorting", title: "Sorting Things Out", emoji: "🧺",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🧺🔴🔵", text: "Sorting means putting things into groups that go together. All the red ones here, all the blue ones there." },
      { art: "🧦👕👖", text: "You can sort by colour, by size, or by what something is. Socks in one pile, shirts in another!" },
      { art: "✨🏠", text: "Sorting makes life easier. When toys are sorted, you can find the one you want fast. Try it with your blocks!" }
    ],
    funFact: "Shops sort everything on purpose. Fruit in one aisle, bread in another. Imagine hunting for milk if nothing was sorted!",
    tryThis: "Tip out a box of toys and sort them three different ways: by colour, then by size, then by type. The same toys, three different answers.",
    questions: [
      { q: "What does sorting mean?", choices: ["Putting things in groups", "Throwing things away", "Counting to ten"], answer: 0 },
      { q: "Which goes with apple and banana?", choices: ["Orange", "Shoe", "Chair"], answer: 0 },
      { q: "Which goes with cat and dog?", choices: ["Rabbit", "Table", "Spoon"], answer: 0 },
      { q: "You can sort things by...", choices: ["Colour", "Smell of Tuesday", "Nothing"], answer: 0 },
      { q: "Which one is NOT a fruit?", choices: ["Carrot", "Apple", "Grape"], answer: 0 },
      { q: "Where do socks belong?", choices: ["With clothes", "With food", "With cars"], answer: 0 },
      { q: "Which goes with red and blue?", choices: ["Green", "Loud", "Fast"], answer: 0 },
      { q: "Why do we sort toys?", choices: ["To find them easily", "To lose them", "To make noise"], answer: 0 },
      { q: "Which one is a vehicle?", choices: ["Bus", "Banana", "Bed"], answer: 0 },
      { q: "Which goes with circle and square?", choices: ["Triangle", "Purple", "Monday"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🗂️📊", text: "Sorting means organising items into categories by a shared attribute. The critical first step is choosing the attribute, because the same collection sorts completely differently depending on whether you pick colour, size, material, or function." },
      { art: "🌳🔀", text: "Categories can nest inside one another. Living things split into plants and animals, animals into vertebrates and invertebrates, vertebrates into mammals, birds, reptiles, amphibians, and fish. This is called a hierarchy, and biology, libraries, and computer file systems all use one." },
      { art: "⚡💻", text: "Computers sort constantly, and how they do it matters enormously. Sorting a million items with a slow method could take hours; a good algorithm like merge sort does it in seconds. Every search result and contact list you use relies on this." },
      { art: "🎯🧠", text: "Good sorting requires clear, consistent rules. If your categories overlap or leave gaps, items end up in two places or nowhere at all. That is why scientists argue so carefully about definitions before classifying anything." }
    ],
    funFact: "Carl Linnaeus built the naming system biologists still use in the 1700s, giving every species two names, like Homo sapiens for humans.",
    tryThis: "Sort your bookshelf or music by three different attributes and time yourself finding a specific item under each system. Which organisation actually works best for how you search?",
    words: [
      { word: "Attribute", meaning: "A feature used to sort things, like colour or size." },
      { word: "Category", meaning: "A group of things that share an attribute." },
      { word: "Hierarchy", meaning: "Categories nested inside larger categories." },
      { word: "Algorithm", meaning: "A step-by-step method for solving a problem." }
    ],
    questions: [
      { q: "What is the first step in sorting?", choices: ["Choosing the attribute to sort by", "Counting everything", "Naming each item", "Making piles at random"], answer: 0 },
      { q: "What is a hierarchy?", choices: ["Categories nested inside larger categories", "A list in alphabetical order", "A type of number", "A sorting machine"], answer: 0 },
      { q: "Which is a sorting attribute?", choices: ["Material", "Loudness of its name", "Yesterday", "Opinion"], answer: 0 },
      { q: "What happens if categories overlap?", choices: ["Items fit in more than one place", "Sorting becomes faster", "Nothing changes", "Items disappear"], answer: 0 },
      { q: "What is an algorithm?", choices: ["A step-by-step method for solving a problem", "A type of computer", "A category", "A number pattern"], answer: 0 },
      { q: "Who created the two-name species system?", choices: ["Carl Linnaeus", "Charles Darwin", "Isaac Newton", "Gregor Mendel"], answer: 0 },
      { q: "What is the scientific name for humans?", choices: ["Homo sapiens", "Homo erectus", "Primata", "Sapiens major"], answer: 0 },
      { q: "Why does sorting method matter for computers?", choices: ["A good algorithm is vastly faster", "It saves electricity only", "It looks tidier", "It uses less screen space"], answer: 0 },
      { q: "Vertebrates and invertebrates are subcategories of...", choices: ["Animals", "Plants", "Mammals", "Fish"], answer: 0 },
      { q: "Good categories should be...", choices: ["Clear and without gaps", "Flexible and vague", "As many as possible", "Based on opinion"], answer: 0 }
    ]
  } },

  { id: "sequencing", title: "What Comes Next?", emoji: "➡️",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "1️⃣2️⃣3️⃣", text: "Sequencing means putting things in the right order. First, then next, then last." },
      { art: "🥚🐣🐔", text: "An egg comes first. Then a fluffy chick. Then a big chicken. That is the right order!" },
      { art: "🧦👟", text: "Some orders really matter. Socks first, then shoes. Try the other way and it does not work at all!" }
    ],
    funFact: "Recipes are sequences. Bake the cake before you put the icing on, or you will have a very messy oven!",
    tryThis: "Draw three pictures of your morning: waking up, eating breakfast, leaving the house. Mix them up and ask someone to put them back in order.",
    questions: [
      { q: "What comes first?", choices: ["Egg", "Chicken", "Feather"], answer: 0 },
      { q: "Sequencing means putting things in...", choices: ["The right order", "A big pile", "The bin"], answer: 0 },
      { q: "What do you put on first?", choices: ["Socks", "Shoes", "Both together"], answer: 0 },
      { q: "Which comes first in the day?", choices: ["Morning", "Night", "Bedtime"], answer: 0 },
      { q: "Seed, sprout, then...", choices: ["Flower", "Seed again", "Rock"], answer: 0 },
      { q: "What do you do first when making toast?", choices: ["Put bread in the toaster", "Eat it", "Butter it"], answer: 0 },
      { q: "Baby, child, then...", choices: ["Grown-up", "Baby again", "Egg"], answer: 0 },
      { q: "Which comes last?", choices: ["Dessert", "Starter", "Main food"], answer: 0 },
      { q: "What comes after Monday?", choices: ["Tuesday", "Sunday", "Friday"], answer: 0 },
      { q: "1, 2, 3, then...", choices: ["4", "1", "7"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "➡️🔢", text: "Sequencing is arranging events or steps in their correct order. It sounds simple, but it underpins reading comprehension, following instructions, historical understanding, and every kind of planning." },
      { art: "⏱️🔗", text: "Order matters most when steps depend on each other. You cannot frame a house before pouring its foundation, or run a program before writing it. These are called dependencies, and identifying them is the core of project planning." },
      { art: "📖🕰️", text: "Stories and history rely on sequence too. Cause comes before effect, and getting the order wrong reverses the meaning entirely. Historians build timelines precisely so they can see what actually led to what." },
      { art: "💻⚙️", text: "Computer code is pure sequence. Instructions execute in order, and swapping two lines can break everything or change the result completely. Learning to think in ordered steps is the foundation of programming." }
    ],
    funFact: "The word algorithm comes from al-Khwarizmi, a 9th century mathematician in Baghdad whose careful step-by-step methods gave us the word algebra too.",
    tryThis: "Write instructions for making a sandwich and have someone follow them literally, doing nothing you did not explicitly say. You will discover how many steps you skipped.",
    words: [
      { word: "Sequence", meaning: "Items or events arranged in order." },
      { word: "Dependency", meaning: "A step that must happen before another can start." },
      { word: "Chronological", meaning: "Arranged in time order, earliest first." },
      { word: "Cause and effect", meaning: "One event leading to another." }
    ],
    questions: [
      { q: "What is a dependency?", choices: ["A step that must happen before another", "A type of order", "A missing step", "A repeated step"], answer: 0 },
      { q: "What does chronological mean?", choices: ["In time order, earliest first", "In alphabetical order", "In size order", "Randomly"], answer: 0 },
      { q: "Why does order matter in code?", choices: ["Instructions run in sequence and swapping them changes the result", "Code looks neater", "Computers prefer it", "It saves memory"], answer: 0 },
      { q: "In cause and effect, which comes first?", choices: ["The cause", "The effect", "They are simultaneous", "It varies"], answer: 0 },
      { q: "Where does the word algorithm come from?", choices: ["The mathematician al-Khwarizmi", "A Greek god", "A Latin word for order", "An English inventor"], answer: 0 },
      { q: "Which must come first when building a house?", choices: ["The foundation", "The roof", "The windows", "The paint"], answer: 0 },
      { q: "Why do historians build timelines?", choices: ["To see what led to what", "To count years", "To fill textbooks", "To rank importance"], answer: 0 },
      { q: "A recipe is an example of a...", choices: ["Sequence of steps", "Category", "Pattern of colours", "Hierarchy"], answer: 0 },
      { q: "What happens if you skip a step in a dependent sequence?", choices: ["Later steps may fail", "It goes faster", "Nothing changes", "It reverses"], answer: 0 },
      { q: "Al-Khwarizmi also gave us the word...", choices: ["Algebra", "Arithmetic", "Geometry", "Calculus"], answer: 0 }
    ]
  } },

  { id: "matching", title: "Matching Pairs", emoji: "🧦",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "odd-one-out", title: "The Odd One Out", emoji: "🔍",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "size-comparison", title: "Big, Bigger, Biggest", emoji: "📏",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "counting-groups", title: "Counting Groups", emoji: "🔢",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "shapes", title: "Shapes All Around", emoji: "🔺",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "symmetry", title: "Symmetry Magic", emoji: "🦋",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "mazes", title: "Mazes and Paths", emoji: "🌀",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "cause-effect", title: "Cause and Effect", emoji: "💥",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "categories", title: "Making Categories", emoji: "📦",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "opposites", title: "Opposites", emoji: "⬆️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "same-different", title: "Same and Different", emoji: "👯",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "ordering-steps", title: "Steps in Order", emoji: "🪜",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "parts-whole", title: "Parts and Wholes", emoji: "🧩",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "measuring", title: "Measuring Things", emoji: "📐",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "more-less", title: "More or Less", emoji: "⚖️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "heavy-light", title: "Heavy and Light", emoji: "🪨",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "fast-slow", title: "Fast and Slow", emoji: "🐢",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "before-after", title: "Before and After", emoji: "⏰",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "position-words", title: "Over, Under, Beside", emoji: "📍",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "what-belongs", title: "What Belongs Together", emoji: "🍎",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "true-false", title: "True or False", emoji: "✅",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "riddle-clues", title: "Solving with Clues", emoji: "🕵️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "memory", title: "Memory Power", emoji: "🧠",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "tangrams", title: "Tangram Shapes", emoji: "📐",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "building", title: "Building and Balancing", emoji: "🧱",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "estimation", title: "Smart Guessing", emoji: "🎯",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "problem-steps", title: "Solving Step by Step", emoji: "🪜",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } }
  ]
};
