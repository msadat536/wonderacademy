/* Inventors & Discoveries - 30 concepts. Filled concepts are playable; empty ones show "coming soon".
   The correct answer is always written first (answer: 0); the app shuffles choices on screen. */
window.CONTENT = window.CONTENT || {};
window.CONTENT['inventors'] = {
  id: "inventors", title: "Inventors & Discoveries", emoji: "💡", color: "#F4A261", tint: "#FDEBDA",
  concepts: [
  { id: "the-wheel", title: "The Wheel", emoji: "🛞",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🪨😫", text: "Long, long ago, people had to drag heavy things along the ground. Rocks, logs, food. It was slow and so hard!" },
      { art: "🪵🔄", text: "Then someone had a big idea. What if we put the heavy thing on top of round logs? It rolled! Much easier." },
      { art: "🛞🛒", text: "Then came an even better idea: a round wheel on a stick called an axle. Now we have carts, cars, bikes, and even skateboards!" }
    ],
    funFact: "Nobody knows exactly who invented the wheel. It was so long ago, more than 5,000 years, that their name was never written down.",
    tryThis: "Put a heavy book flat on the table and push it. Now put three pencils under it and push again. Feel the difference!",
    questions: [
      { q: "How did people move heavy things long ago?", choices: ["Dragged them", "Flew them", "Used trucks"], answer: 0 },
      { q: "What was the first rolling idea?", choices: ["Putting things on round logs", "Using balloons", "Using magnets"], answer: 0 },
      { q: "What is the stick through a wheel called?", choices: ["An axle", "A handle", "A rope"], answer: 0 },
      { q: "Which has wheels?", choices: ["A bike", "A boat", "A kite"], answer: 0 },
      { q: "Do we know who invented the wheel?", choices: ["No, it was too long ago", "Yes, a king", "Yes, a child"], answer: 0 },
      { q: "How long ago was the wheel invented?", choices: ["More than 5,000 years", "Last year", "100 years ago"], answer: 0 },
      { q: "Is a wheel round or square?", choices: ["Round", "Square", "Triangle"], answer: 0 },
      { q: "What did the wheel make easier?", choices: ["Moving heavy things", "Cooking", "Sleeping"], answer: 0 },
      { q: "Which one has wheels?", choices: ["A skateboard", "A pillow", "A cup"], answer: 0 },
      { q: "Rolling is easier than...", choices: ["Dragging", "Flying", "Sleeping"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🏺🔄", text: "The wheel appeared around 3500 BCE in Mesopotamia, in what is now Iraq, and curiously its first job was not transport. It was a potter's wheel, spinning clay. Only a few hundred years later did someone turn it on its side and put it under a cart." },
      { art: "🪵⚙️", text: "The clever part was never the round disc; people had rolled logs for ages. The breakthrough was the axle, a fixed rod the wheel turns around, which let the load ride above and stay put. That pairing is what engineers still call the wheel and axle, one of the six simple machines." },
      { art: "🌍❌", text: "Not every civilisation adopted it. The Inca built an enormous empire with roads and bridges but no wheeled vehicles, because steep Andean terrain and the lack of large draft animals made wheels less useful than llamas and human porters." },
      { art: "🚗🌀", text: "Today the wheel is inside almost every machine: gears are toothed wheels, pulleys are grooved wheels, turbines and hard drives spin on the same principle. Roughly 5,500 years on, we have not found a better way to turn effort into smooth motion." }
    ],
    funFact: "Wheeled luggage was only patented in 1970, thousands of years after the wheel. Sometimes the obvious combination takes a very long time.",
    tryThis: "Make a list of ten wheels in your home that are not on vehicles. Door hinges, fans, taps, and can openers all count. You will run out of paper before you run out of wheels.",
    words: [
      { word: "Axle", meaning: "The rod a wheel turns around." },
      { word: "Mesopotamia", meaning: "An ancient region in modern Iraq where the wheel appeared." },
      { word: "Simple machine", meaning: "A basic device that makes work easier, like a lever or wheel." },
      { word: "Draft animal", meaning: "An animal used to pull loads." }
    ],
    questions: [
      { q: "Where did the wheel first appear?", choices: ["Mesopotamia", "Egypt", "China", "Greece"], answer: 0 },
      { q: "What was the wheel's first job?", choices: ["A potter's wheel for clay", "A cart wheel", "A water wheel", "A toy"], answer: 0 },
      { q: "What was the real breakthrough?", choices: ["The axle", "The round shape", "Wooden spokes", "Rubber tyres"], answer: 0 },
      { q: "Roughly when did the wheel appear?", choices: ["3500 BCE", "500 CE", "10,000 BCE", "1500 CE"], answer: 0 },
      { q: "Why did the Inca not use wheeled vehicles?", choices: ["Steep terrain and no large draft animals", "They had not heard of wheels", "Wheels were banned", "They lacked wood"], answer: 0 },
      { q: "What did the Inca use instead?", choices: ["Llamas and human porters", "Horses", "Boats", "Camels"], answer: 0 },
      { q: "Which of these is a toothed wheel?", choices: ["A gear", "A pulley", "An axle", "A lever"], answer: 0 },
      { q: "Which is a grooved wheel?", choices: ["A pulley", "A gear", "A turbine", "A hinge"], answer: 0 },
      { q: "When was wheeled luggage patented?", choices: ["1970", "1870", "1670", "1990"], answer: 0 },
      { q: "How many simple machines are there traditionally?", choices: ["Six", "Three", "Ten", "Twelve"], answer: 0 }
    ]
  } },

  { id: "ibn-al-haytham", title: "Ibn al-Haytham and Light", emoji: "🔍",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "👁️💡", text: "Long ago, people thought our eyes shoot out little beams to see things, like tiny torches. A scientist named Ibn al-Haytham thought, hmm, is that really true?" },
      { art: "🕳️🌞", text: "He made a dark room with one tiny hole in the wall. Light came through the hole and made an upside-down picture of the outside on the far wall!" },
      { art: "📸✨", text: "So light comes INTO our eyes from things, not out of them. His idea about light is the same idea inside every camera and phone today." }
    ],
    funFact: "Ibn al-Haytham lived about 1,000 years ago and wrote a huge book about light with seven parts. People read it for hundreds of years!",
    tryThis: "Make a pinhole viewer: poke a tiny hole in one end of a box, cover the other end with baking paper, and point the hole at a bright window. Look at the paper.",
    questions: [
      { q: "What did people used to think eyes did?", choices: ["Shot out beams of light", "Made sounds", "Grew bigger"], answer: 0 },
      { q: "What did Ibn al-Haytham build?", choices: ["A dark room with a tiny hole", "A rocket", "A boat"], answer: 0 },
      { q: "What appeared on the far wall?", choices: ["An upside-down picture", "Nothing", "A rainbow"], answer: 0 },
      { q: "Where does light come from when we see?", choices: ["Into our eyes from things", "Out of our eyes", "From our ears"], answer: 0 },
      { q: "What uses his idea today?", choices: ["Cameras and phones", "Bicycles", "Spoons"], answer: 0 },
      { q: "How long ago did he live?", choices: ["About 1,000 years", "Last year", "About 10 years"], answer: 0 },
      { q: "How many parts did his book on light have?", choices: ["Seven", "One", "One hundred"], answer: 0 },
      { q: "Was the picture through the hole right way up?", choices: ["No, upside down", "Yes", "There was no picture"], answer: 0 },
      { q: "What did Ibn al-Haytham do when he was not sure?", choices: ["Tested it", "Guessed", "Gave up"], answer: 0 },
      { q: "What was his big subject?", choices: ["Light", "Fish", "Music"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "👁️❓", text: "Ibn al-Haytham, born in Basra around 965 CE and working in Cairo, took on a question that ancient Greek thinkers had argued about for centuries: does vision happen because our eyes send out rays, or because light enters them? He decided the argument should be settled by experiment, not by authority." },
      { art: "🕳️📐", text: "He used a camera obscura, a darkened room with a small aperture, and showed that light from outside travelled in straight lines through the hole and formed an inverted image on the far wall. He measured, varied the hole size, and reasoned carefully from what he observed." },
      { art: "📖🔭", text: "His seven-volume Kitab al-Manazir, the Book of Optics, described reflection, refraction, the anatomy of the eye, and how the brain interprets what the eye receives. Translated into Latin, it shaped European science for five hundred years and influenced Kepler and Newton." },
      { art: "🔬🧪", text: "His larger legacy is method. He insisted that claims be tested by repeatable experiment and that a scientist must doubt even his own conclusions. Many historians regard him as the first person to practise what we now call the scientific method." }
    ],
    funFact: "The story goes that he feigned madness to escape a job promise to the Caliph he could not fulfil, and did much of his optics work while confined at home for a decade.",
    tryThis: "Read one paragraph of the Book of Optics in translation online. Notice how he describes an experiment so that someone else could repeat it. That instruction to the reader is the invention.",
    words: [
      { word: "Camera obscura", meaning: "A darkened room where light through a small hole forms an image." },
      { word: "Refraction", meaning: "Light bending as it passes from one material into another." },
      { word: "Aperture", meaning: "A small opening that lets light through." },
      { word: "Scientific method", meaning: "Testing ideas by repeatable experiment rather than accepting authority." }
    ],
    questions: [
      { q: "Where was Ibn al-Haytham born?", choices: ["Basra", "Cairo", "Baghdad", "Damascus"], answer: 0 },
      { q: "What question did he settle?", choices: ["Whether eyes emit rays or receive light", "Whether the Earth moves", "Why the sky is blue", "How rainbows form"], answer: 0 },
      { q: "How did he settle it?", choices: ["By experiment", "By consulting Greek texts", "By vote", "By prayer alone"], answer: 0 },
      { q: "What is a camera obscura?", choices: ["A darkened room with a small hole forming an image", "An early photograph", "A telescope", "A mirror"], answer: 0 },
      { q: "What was his major book called?", choices: ["Kitab al-Manazir, the Book of Optics", "The Book of Healing", "Almagest", "The Elements"], answer: 0 },
      { q: "How many volumes did it have?", choices: ["Seven", "Three", "Twelve", "One"], answer: 0 },
      { q: "Which later scientists did it influence?", choices: ["Kepler and Newton", "Darwin and Wallace", "Curie and Rutherford", "Galileo only"], answer: 0 },
      { q: "What is refraction?", choices: ["Light bending between materials", "Light bouncing off a surface", "Light being absorbed", "Light splitting into colours only"], answer: 0 },
      { q: "What is his larger legacy?", choices: ["Insisting on repeatable experiment", "Inventing the camera", "Founding a university", "Mapping the stars"], answer: 0 },
      { q: "What does the image in a camera obscura look like?", choices: ["Inverted", "Upright", "Mirrored only", "Blurred beyond recognition"], answer: 0 }
    ]
  } },

  { id: "paper", title: "Paper", emoji: "📜",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "al-khwarizmi", title: "Al-Khwarizmi and Algebra", emoji: "🔢",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-compass", title: "The Compass", emoji: "🧭",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-printing-press", title: "The Printing Press", emoji: "📰",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "fatima-al-fihri", title: "Fatima al-Fihri and the First University", emoji: "🏛️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "archimedes", title: "Archimedes and the Bath", emoji: "🛁",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "ibn-sina", title: "Ibn Sina and Medicine", emoji: "⚕️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "galileo-telescope", title: "Galileo and the Telescope", emoji: "🔭",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "newton", title: "Newton and Gravity", emoji: "🍎",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "al-jazari", title: "Al-Jazari and Machines", emoji: "⚙️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-clock", title: "The Clock", emoji: "⏰",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-microscope", title: "The Microscope", emoji: "🔬",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-steam-engine", title: "The Steam Engine", emoji: "🚂",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "jenner-vaccines", title: "Edward Jenner and Vaccines", emoji: "💉",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "volta-battery", title: "Volta and the Battery", emoji: "🔋",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "faraday-electricity", title: "Faraday and Electricity", emoji: "⚡",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "ada-lovelace", title: "Ada Lovelace and the First Program", emoji: "💻",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-bicycle", title: "The Bicycle", emoji: "🚲",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "bell-telephone", title: "Bell and the Telephone", emoji: "📞",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "edison-light-bulb", title: "Edison and the Light Bulb", emoji: "💡",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "marie-curie", title: "Marie Curie and Radiation", emoji: "☢️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "wright-brothers", title: "The Wright Brothers Fly", emoji: "✈️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "fleming-penicillin", title: "Fleming and Penicillin", emoji: "🧫",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "carver", title: "George Washington Carver", emoji: "🥜",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "marconi-radio", title: "Marconi and Radio", emoji: "📻",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "turing-computers", title: "Alan Turing and Computers", emoji: "🖥️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-internet", title: "The Internet", emoji: "🌐",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "rockets", title: "Rockets to Space", emoji: "🚀",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } }
  ]
};
