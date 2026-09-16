/* Math Magic - 30 concepts. Filled concepts are playable; empty ones show "coming soon".
   The correct answer is always written first (answer: 0); the app shuffles choices on screen. */
window.CONTENT = window.CONTENT || {};
window.CONTENT['math'] = {
  id: "math", title: "Math Magic", emoji: "🔢", color: "#2A9D8F", tint: "#D8F0EC",
  concepts: [
  { id: "counting-to-20", title: "Counting to 20", emoji: "🔢",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "1️⃣2️⃣3️⃣", text: "Let's count! One, two, three, four, five. Five fingers on one hand. Count them now!" },
      { art: "🖐️🖐️", text: "Six, seven, eight, nine, ten. Ten fingers on two hands. You have ten fingers and ten toes!" },
      { art: "🍎🍎🍎", text: "Eleven, twelve, thirteen, fourteen, fifteen. Sixteen, seventeen, eighteen, nineteen, TWENTY! You did it!" },
      { art: "🐾🔢", text: "Counting works on anything. Steps, spoons, teddy bears. Touch each thing once as you say the number, and never skip one." }
    ],
    funFact: "The word for the number after 12 is thirteen, which means three-and-ten! Fourteen is four-and-ten. The teen numbers are all hiding a ten inside.",
    tryThis: "Count twenty steps across a room, touching the floor with your toe each time. Then count twenty of anything else: books, cars, blocks.",
    questions: [
      { q: "What comes after 4?", choices: ["5", "3", "6"], answer: 0 },
      { q: "How many fingers on one hand?", choices: ["5", "10", "2"], answer: 0 },
      { q: "How many fingers on two hands?", choices: ["10", "5", "20"], answer: 0 },
      { q: "What comes after 9?", choices: ["10", "8", "11"], answer: 0 },
      { q: "What comes after 12?", choices: ["13", "14", "11"], answer: 0 },
      { q: "What comes before 20?", choices: ["19", "21", "18"], answer: 0 },
      { q: "What comes after 15?", choices: ["16", "14", "17"], answer: 0 },
      { q: "When counting things, touch each one...", choices: ["Once", "Twice", "Never"], answer: 0 },
      { q: "Which is the biggest?", choices: ["20", "2", "12"], answer: 0 },
      { q: "What number is hiding inside thirteen?", choices: ["Ten", "Two", "Seven"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🔢🌍", text: "Our number system is called base ten, because it is built around groups of ten. That is no accident: humans have ten fingers, and the earliest counting was done on them. Every number you write uses just ten symbols, 0 to 9, rearranged." },
      { art: "🧱1️⃣3️⃣", text: "The teen numbers are ten plus something in disguise. Thirteen is three-and-ten, fourteen is four-and-ten. Sixteen through nineteen say it almost plainly. Only eleven and twelve keep their old names, which come from ancient words meaning one left over and two left over after ten." },
      { art: "🔢💯", text: "Once you understand ten-and-something, counting to a hundred is just the same trick repeated. Twenty is two tens, thirty is three tens. Twenty-three is two tens and three ones. The pattern never changes, all the way to a million and beyond." },
      { art: "🌏🖐️", text: "Not every culture chose ten. The ancient Babylonians counted in sixties, which is why we still have 60 seconds in a minute and 360 degrees in a circle. Some cultures counted in twenties using fingers and toes together, and French still says four-twenties for eighty." }
    ],
    funFact: "There are people who count on the twelve finger bones of one hand using the thumb as a pointer, which is why a dozen was such a popular grouping for centuries.",
    tryThis: "Try counting to 30 in twenties, saying one-twenty-ten for 30 the way old English did. Then count in sixties like a Babylonian. Ten will suddenly feel like a choice, not a law.",
    words: [
      { word: "Base ten", meaning: "A number system built around groups of ten." },
      { word: "Digit", meaning: "One of the ten symbols 0 to 9." },
      { word: "Dozen", meaning: "A group of twelve." },
      { word: "Babylonians", meaning: "An ancient people who counted in sixties." }
    ],
    questions: [
      { q: "Why is our number system based on ten?", choices: ["Humans have ten fingers", "Ten is a lucky number", "Kings decided it", "It is the smallest useful number"], answer: 0 },
      { q: "How many digits does base ten use?", choices: ["Ten", "Twenty", "Nine", "One hundred"], answer: 0 },
      { q: "What does thirteen literally mean?", choices: ["Three and ten", "Thirty", "Third", "Thirteen tens"], answer: 0 },
      { q: "What is unusual about eleven and twelve?", choices: ["They keep old names meaning one and two left over", "They are prime", "They are not numbers", "They are the same"], answer: 0 },
      { q: "What is twenty-three in tens and ones?", choices: ["Two tens and three ones", "Twenty tens and three", "Two and thirty", "Three tens and two ones"], answer: 0 },
      { q: "Who counted in sixties?", choices: ["The Babylonians", "The Romans", "The Egyptians", "The Greeks"], answer: 0 },
      { q: "What did that give us today?", choices: ["60 seconds in a minute and 360 degrees in a circle", "Ten fingers", "Base ten", "The word dozen"], answer: 0 },
      { q: "How does French say eighty?", choices: ["Four-twenties", "Eight-tens", "Eighty", "Two-forties"], answer: 0 },
      { q: "What is a dozen?", choices: ["Twelve", "Ten", "Twenty", "Six"], answer: 0 },
      { q: "How can you count to twelve on one hand?", choices: ["Using the finger bones with the thumb as pointer", "You cannot", "Using toes too", "Counting knuckles twice"], answer: 0 }
    ]
  } },

  { id: "shapes-around-us", title: "Shapes Around Us", emoji: "🔷",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🔴⚪", text: "A circle is round with no corners at all. A ball, a plate, the sun. Roll your finger around a circle. It never stops!" },
      { art: "🟥🟦", text: "A square has four sides that are all the same, and four corners. A window, a cracker, a block." },
      { art: "🔺⛰️", text: "A triangle has three sides and three points. A slice of pizza, a roof, a mountain. Tri means three!" },
      { art: "🟧📱", text: "A rectangle has four sides too, but two are long and two are short. A door, a phone, a book. Shapes are everywhere. Can you find five right now?" }
    ],
    funFact: "A circle is the only shape that rolls smoothly. That is why wheels are circles and not squares. Imagine a bumpy square-wheeled car!",
    tryThis: "Go on a shape hunt around one room. Find two circles, two squares, two rectangles, and one triangle. The triangle is usually the hardest!",
    questions: [
      { q: "Which shape has no corners?", choices: ["Circle", "Square", "Triangle"], answer: 0 },
      { q: "How many sides does a triangle have?", choices: ["3", "4", "5"], answer: 0 },
      { q: "How many sides does a square have?", choices: ["4", "3", "6"], answer: 0 },
      { q: "A ball is shaped like a...", choices: ["Circle", "Square", "Triangle"], answer: 0 },
      { q: "A slice of pizza is shaped like a...", choices: ["Triangle", "Circle", "Square"], answer: 0 },
      { q: "A door is shaped like a...", choices: ["Rectangle", "Circle", "Triangle"], answer: 0 },
      { q: "Which shape rolls smoothly?", choices: ["Circle", "Square", "Triangle"], answer: 0 },
      { q: "How many corners does a square have?", choices: ["4", "0", "3"], answer: 0 },
      { q: "What does tri mean?", choices: ["Three", "Two", "Ten"], answer: 0 },
      { q: "A rectangle has two long sides and two...", choices: ["Short sides", "Round sides", "No sides"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "📐🔷", text: "Flat shapes are called two-dimensional, or 2D, because they have length and width but no depth. Shapes with straight sides are polygons: triangle for three sides, quadrilateral for four, pentagon five, hexagon six, octagon eight. The Greek prefixes tell you the count." },
      { art: "🟦🟪", text: "Squares, rectangles, rhombuses and parallelograms are all quadrilaterals, and they nest inside each other. Every square is a rectangle, but not every rectangle is a square. Getting comfortable with that kind of nested definition is a core mathematical skill." },
      { art: "🔺📏", text: "Triangles are classified by their sides and angles. Equilateral has three equal sides, isosceles two, scalene none. A right triangle has one 90-degree corner. Triangles are the strongest shape for building because they cannot be pushed out of shape without bending a side, which is why bridges and roofs are full of them." },
      { art: "⚪🌀", text: "A circle is every point that sits the same distance from a centre. That distance is the radius, and twice it is the diameter. The distance around is the circumference, and dividing circumference by diameter always gives the same number, roughly 3.14159, called pi, for every circle in the universe." }
    ],
    funFact: "Bees build hexagons because among shapes that tile with no gaps, the hexagon encloses the most area for the least wall. Mathematicians only proved this formally in 1999.",
    tryThis: "Measure the circumference of three round objects with string, then the diameter with a ruler. Divide. You should get close to 3.14 every single time.",
    words: [
      { word: "Polygon", meaning: "A flat shape with straight sides." },
      { word: "Quadrilateral", meaning: "Any four-sided polygon." },
      { word: "Radius", meaning: "The distance from a circle's centre to its edge." },
      { word: "Pi", meaning: "Circumference divided by diameter, about 3.14." }
    ],
    questions: [
      { q: "What does 2D mean?", choices: ["Length and width but no depth", "Two shapes", "Double size", "Two corners"], answer: 0 },
      { q: "How many sides does a hexagon have?", choices: ["Six", "Five", "Eight", "Seven"], answer: 0 },
      { q: "Is every square a rectangle?", choices: ["Yes", "No", "Only big ones", "Only small ones"], answer: 0 },
      { q: "Which triangle has three equal sides?", choices: ["Equilateral", "Isosceles", "Scalene", "Right"], answer: 0 },
      { q: "Why are triangles used in bridges?", choices: ["They cannot be pushed out of shape without bending a side", "They look nice", "They are cheapest", "They are lightest"], answer: 0 },
      { q: "What is the radius?", choices: ["Distance from centre to edge", "Distance around the circle", "Distance across the circle", "The area"], answer: 0 },
      { q: "What is pi?", choices: ["Circumference divided by diameter", "Radius times two", "Area of a circle", "A type of polygon"], answer: 0 },
      { q: "About what is pi's value?", choices: ["3.14", "2.5", "4", "1.62"], answer: 0 },
      { q: "Why do bees build hexagons?", choices: ["Most area for the least wall with no gaps", "Bees have six legs", "Hexagons are easiest", "Random chance"], answer: 0 },
      { q: "How many sides does an octagon have?", choices: ["Eight", "Six", "Ten", "Four"], answer: 0 }
    ]
  } },

  { id: "adding-up", title: "Adding Up", emoji: "➕",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "taking-away", title: "Taking Away", emoji: "➖",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "odd-and-even", title: "Odd and Even", emoji: "🔟",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "skip-counting", title: "Skip Counting", emoji: "🦘",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "number-bonds", title: "Number Bonds to 10", emoji: "🔗",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "place-value", title: "Tens and Ones", emoji: "🧱",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "comparing-numbers", title: "Bigger or Smaller", emoji: "⚖️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "telling-time", title: "Telling the Time", emoji: "🕐",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "money-coins", title: "Coins and Money", emoji: "🪙",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "measuring-length", title: "Measuring Length", emoji: "📏",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "halves-quarters", title: "Halves and Quarters", emoji: "🍕",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "doubling", title: "Doubling", emoji: "✌️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "multiplication-groups", title: "Groups and Multiplying", emoji: "✖️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "division-sharing", title: "Sharing and Dividing", emoji: "➗",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "times-tables", title: "Times Tables 2, 5, 10", emoji: "📊",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "days-and-months", title: "Days, Weeks, Months", emoji: "📅",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "weight", title: "Heavy and Light Weight", emoji: "🏋️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "capacity", title: "Full, Empty, Capacity", emoji: "🥤",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "3d-shapes", title: "3D Shapes", emoji: "🎲",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "symmetry", title: "Symmetry", emoji: "🦋",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "turns-and-angles", title: "Turns and Angles", emoji: "🔄",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "graphs", title: "Picture Graphs", emoji: "📈",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "estimating", title: "Estimating", emoji: "🎯",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "word-problems", title: "Word Problems", emoji: "🧩",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "hundreds", title: "Counting to 100 and Beyond", emoji: "💯",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "fractions-thirds", title: "Thirds and More Fractions", emoji: "🍰",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "patterns-in-numbers", title: "Number Patterns", emoji: "🔁",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "big-numbers", title: "Big Numbers", emoji: "🌌",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } }
  ]
};
