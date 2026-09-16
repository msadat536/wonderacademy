/* Physics Fun - 30 concepts.
   Concepts with pages and questions are playable. Empty ones show "coming soon" until a later wave.
   The correct answer is always written first (answer: 0); the app shuffles choices on screen. */
window.CONTENT = window.CONTENT || {};
window.CONTENT['physics'] = {
  id: "physics", title: "Physics Fun", emoji: "⚡", color: "#F5B700", tint: "#FFF3CE",
  concepts: [
  { id: "push-pull", title: "Pushes and Pulls", emoji: "🛒",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🛒➡️", text: "A push moves something away from you. Push a toy car and off it goes! Push a door and it swings open." },
      { art: "🧲⬅️", text: "A pull brings something closer to you. Pull a wagon. Pull open a drawer. Pull your blanket up." },
      { art: "💪⚽", text: "Pushes and pulls are called forces. A big push makes things go fast. A little push makes them go slow." }
    ],
    funFact: "You use pushes and pulls hundreds of times a day without noticing. Opening a door, zipping your coat, even picking up a spoon!",
    tryThis: "Line up three toys. Give one a tiny push, one a medium push, and one a big push. Which one travelled the farthest?",
    questions: [
      { q: "What does a push do?", choices: ["Moves something away", "Brings something closer", "Makes it disappear"], answer: 0 },
      { q: "What does a pull do?", choices: ["Brings something closer", "Pushes it away", "Makes it heavier"], answer: 0 },
      { q: "Pushes and pulls are called...", choices: ["Forces", "Colours", "Shapes"], answer: 0 },
      { q: "Opening a drawer is a...", choices: ["Pull", "Push", "Jump"], answer: 0 },
      { q: "Kicking a ball is a...", choices: ["Push", "Pull", "Squeeze"], answer: 0 },
      { q: "A bigger push makes a toy go...", choices: ["Faster", "Slower", "Backwards"], answer: 0 },
      { q: "Pulling a wagon brings it...", choices: ["Closer to you", "Away from you", "Up in the air"], answer: 0 },
      { q: "Can a push change how fast something moves?", choices: ["Yes", "No", "Only on grass"], answer: 0 },
      { q: "Zipping your coat uses a...", choices: ["Pull", "Sneeze", "Song"], answer: 0 },
      { q: "Do you use forces every day?", choices: ["Yes, lots", "No, never", "Only on weekends"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "➡️⬅️", text: "A force is simply a push or a pull, and it is measured in units called newtons, named after Isaac Newton. Forces have both a size and a direction, which is why pushing a box left is a completely different force from pushing it right." },
      { art: "⚖️🟰", text: "When two forces are equal and opposite they are balanced, and nothing changes: a book on a table is pushed down by gravity and pushed up equally by the table. When forces are unbalanced, motion changes." },
      { art: "🚀📈", text: "Newton's first law says an object keeps doing what it is doing, still or moving, unless an unbalanced force acts on it. His second law says the bigger the force and the lighter the object, the greater the acceleration." },
      { art: "🎈💨", text: "Newton's third law says every force comes in a pair: for every action there is an equal and opposite reaction. Let go of an inflated balloon and air pushes backwards while the balloon shoots forwards. Rockets work exactly this way." }
    ],
    funFact: "You are pushing on the Earth with the same force it pulls on you. Earth is just so massive that your push moves it an unmeasurably small amount.",
    tryThis: "Sit on a wheeled chair and throw a heavy ball away from you. You will roll backwards. That is Newton's third law with your own body.",
    words: [
      { word: "Force", meaning: "A push or a pull, measured in newtons." },
      { word: "Balanced forces", meaning: "Equal opposite forces that cause no change in motion." },
      { word: "Acceleration", meaning: "How quickly speed or direction changes." },
      { word: "Newton", meaning: "The unit used to measure force." }
    ],
    questions: [
      { q: "What unit measures force?", choices: ["Newtons", "Metres", "Litres", "Degrees"], answer: 0 },
      { q: "What two things does a force have?", choices: ["Size and direction", "Colour and weight", "Speed and mass", "Height and width"], answer: 0 },
      { q: "What happens when forces are balanced?", choices: ["Motion does not change", "The object speeds up", "The object vanishes", "It always stops instantly"], answer: 0 },
      { q: "Newton's first law says an object keeps doing what it is doing unless...", choices: ["An unbalanced force acts on it", "It gets tired", "Time passes", "It is observed"], answer: 0 },
      { q: "According to Newton's second law, a lighter object with the same force will...", choices: ["Accelerate more", "Accelerate less", "Not move", "Get heavier"], answer: 0 },
      { q: "What does Newton's third law state?", choices: ["Every action has an equal and opposite reaction", "Force equals mass", "Objects always fall", "Energy is conserved"], answer: 0 },
      { q: "Why does a released balloon fly forward?", choices: ["Air pushes backwards out of it", "It is lighter than air", "The rubber pulls it", "Wind carries it"], answer: 0 },
      { q: "A book resting on a table is held up by...", choices: ["The table pushing up equally", "Nothing at all", "Air pressure only", "Magnetism"], answer: 0 },
      { q: "Rockets move using which law?", choices: ["The third law", "The first law only", "No law", "The law of gravity only"], answer: 0 },
      { q: "Who were these laws named after?", choices: ["Isaac Newton", "Albert Einstein", "Galileo", "Marie Curie"], answer: 0 }
    ]
  } },

  { id: "gravity", title: "Gravity", emoji: "🍎",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🍎⬇️", text: "Throw a ball up in the air. What happens? It comes back down! It always comes down." },
      { art: "🌍🧲", text: "Earth pulls everything toward it. That invisible pull is called gravity. It is why we do not float away." },
      { art: "👨‍🚀🌙", text: "In space there is much less pull. Astronauts float around inside their spaceship. Their food floats too!" }
    ],
    funFact: "On the Moon gravity is much weaker. If you can jump one step high here, you could jump six steps high on the Moon!",
    tryThis: "Drop a crumpled ball of paper and a flat sheet of paper at the same time. Which lands first? Now crumple both and try again.",
    questions: [
      { q: "What happens to a ball thrown up?", choices: ["It comes back down", "It stays up forever", "It turns into a bird"], answer: 0 },
      { q: "What is the invisible pull called?", choices: ["Gravity", "Gravy", "Grumble"], answer: 0 },
      { q: "What pulls things toward it?", choices: ["The Earth", "The clouds", "Your shoes"], answer: 0 },
      { q: "Why do we not float away?", choices: ["Gravity holds us down", "We are heavy sleepers", "Our shoes are sticky"], answer: 0 },
      { q: "What do astronauts do in space?", choices: ["Float around", "Sink to the floor", "Run fast"], answer: 0 },
      { q: "Is gravity stronger or weaker on the Moon?", choices: ["Weaker", "Stronger", "Exactly the same"], answer: 0 },
      { q: "Could you jump higher on the Moon?", choices: ["Yes, much higher", "No, lower", "You could not jump"], answer: 0 },
      { q: "Can you see gravity?", choices: ["No, it is invisible", "Yes, it is blue", "Only at night"], answer: 0 },
      { q: "What happens when you drop a spoon?", choices: ["It falls down", "It floats up", "It stays still"], answer: 0 },
      { q: "Does gravity work all the time?", choices: ["Yes", "Only in the day", "Only outside"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🌍🧲", text: "Gravity is the attraction between any two objects that have mass. Every object pulls on every other, but the force is tiny unless something is very massive. Earth is massive enough that its pull keeps us, the atmosphere, and the oceans firmly in place." },
      { art: "🍎📉", text: "Near Earth's surface, gravity accelerates falling objects at about 9.8 metres per second every second. Remarkably, this is the same for all objects regardless of weight: a hammer and a feather fall at identical rates in a vacuum, as astronaut David Scott demonstrated on the Moon in 1971." },
      { art: "⚖️🌙", text: "Gravity's strength depends on mass and distance. The Moon has about one sixth of Earth's surface gravity, so you would weigh one sixth as much there, though your mass, the actual amount of matter in you, would be unchanged." },
      { art: "🪐🌌", text: "Gravity also runs the universe at large. It holds the Moon in orbit around Earth, Earth around the Sun, and the Sun around the centre of the Milky Way. Where gravity becomes extreme enough, not even light can escape, and that is a black hole." }
    ],
    funFact: "Astronauts on the space station are not weightless because gravity is absent. Gravity there is nearly as strong as on the ground; they are in constant free fall around Earth.",
    tryThis: "Drop a coin and a crumpled paper ball from the same height at the same moment. They land together, because air resistance, not gravity, is what usually makes things fall differently.",
    words: [
      { word: "Mass", meaning: "The amount of matter in an object." },
      { word: "Weight", meaning: "The force of gravity pulling on an object's mass." },
      { word: "Free fall", meaning: "Falling with only gravity acting on you." },
      { word: "Orbit", meaning: "A curved path around an object, caused by gravity." }
    ],
    questions: [
      { q: "What is gravity?", choices: ["Attraction between objects with mass", "A kind of magnetism", "Air pushing down", "A type of energy wave"], answer: 0 },
      { q: "How fast does gravity accelerate falling objects near Earth?", choices: ["9.8 m/s each second", "100 m/s each second", "1 m/s each second", "It varies by weight"], answer: 0 },
      { q: "In a vacuum, a hammer and a feather...", choices: ["Fall at the same rate", "The hammer falls faster", "The feather falls faster", "Neither falls"], answer: 0 },
      { q: "What normally makes a feather fall slower on Earth?", choices: ["Air resistance", "Weaker gravity", "Its colour", "Its shape only"], answer: 0 },
      { q: "The Moon's surface gravity is about...", choices: ["One sixth of Earth's", "The same as Earth's", "Twice Earth's", "Zero"], answer: 0 },
      { q: "What is the difference between mass and weight?", choices: ["Mass is matter, weight is gravity's pull on it", "They are the same", "Weight is matter", "Mass changes on the Moon"], answer: 0 },
      { q: "Why do astronauts on the space station float?", choices: ["They are in constant free fall", "There is no gravity there", "They wear special suits", "They are too far from Earth"], answer: 0 },
      { q: "What holds Earth in orbit around the Sun?", choices: ["Gravity", "Magnetism", "Wind", "Nothing"], answer: 0 },
      { q: "What is a black hole?", choices: ["A place where gravity is so strong light cannot escape", "An empty area of space", "A dead planet", "A cold star"], answer: 0 },
      { q: "Gravity's strength depends on...", choices: ["Mass and distance", "Colour and shape", "Temperature", "Time of day"], answer: 0 }
    ]
  } },

  { id: "friction", title: "Friction", emoji: "🛷",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "magnets", title: "Magnets", emoji: "🧲",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🧲", text: "A magnet can pull some things toward it without even touching them. It is like an invisible hand!" },
      { art: "📎🔩", text: "Magnets stick to things made of iron and steel. Paper clips, nails, and the fridge door. Try it!" },
      { art: "🚫🪵", text: "Magnets do not stick to wood, plastic, paper, or your hand. Only certain metals feel the pull." }
    ],
    funFact: "Two magnets can push each other away! Turn one around and they snap together instead. Magnets have two ends that behave differently.",
    tryThis: "Take a fridge magnet around the house and test ten objects. Make two lists: sticks and does not stick. What do the sticking ones have in common?",
    questions: [
      { q: "What can a magnet do?", choices: ["Pull some things toward it", "Make things invisible", "Change colours"], answer: 0 },
      { q: "Which one sticks to a magnet?", choices: ["A steel nail", "A wooden spoon", "A paper cup"], answer: 0 },
      { q: "Does a magnet stick to plastic?", choices: ["No", "Yes", "Only red plastic"], answer: 0 },
      { q: "Where do many people keep magnets?", choices: ["On the fridge", "In the oven", "In the bath"], answer: 0 },
      { q: "Does a magnet need to touch something to pull it?", choices: ["No, it works from a little distance", "Yes, always", "Only underwater"], answer: 0 },
      { q: "Which is magnetic?", choices: ["A paper clip", "A leaf", "A sock"], answer: 0 },
      { q: "Can two magnets push each other away?", choices: ["Yes", "No", "Only big ones"], answer: 0 },
      { q: "Magnets stick to things made of...", choices: ["Iron and steel", "Glass", "Rubber"], answer: 0 },
      { q: "Is the pull of a magnet visible?", choices: ["No, it is invisible", "Yes, it glows", "It is bright blue"], answer: 0 },
      { q: "How many ends does a magnet have?", choices: ["Two", "One", "Five"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🧲NS", text: "Every magnet has two poles, north and south. Opposite poles attract and like poles repel. Cut a magnet in half and you do not get a separate north and south piece; you get two smaller magnets, each with both poles." },
      { art: "⚛️➡️", text: "Magnetism comes from the motion of electrons inside atoms. In most materials these effects cancel out, but in iron, nickel, and cobalt, groups of atoms called domains can line up in the same direction, and the material becomes magnetic." },
      { art: "🌍🧭", text: "Earth itself is a giant magnet, generated by swirling molten iron in its outer core. That field is what makes a compass needle swing north, and it deflects harmful charged particles from the Sun away from us." },
      { art: "⚡🔊", text: "Electricity and magnetism are two sides of one force. An electric current through a coil creates an electromagnet that can be switched on and off. This principle drives electric motors, doorbells, speakers, MRI scanners, and maglev trains that float above their tracks." }
    ],
    funFact: "Earth's magnetic poles have flipped many times in the past, roughly every few hundred thousand years. The last reversal was about 780,000 years ago.",
    tryThis: "Make a compass: stroke a needle 50 times in one direction with a magnet, then float it on a leaf in a bowl of water. It will slowly swing to point north.",
    words: [
      { word: "Pole", meaning: "One of the two ends of a magnet, north or south." },
      { word: "Attract", meaning: "To pull toward." },
      { word: "Repel", meaning: "To push away." },
      { word: "Electromagnet", meaning: "A magnet made by running electricity through a coil." }
    ],
    questions: [
      { q: "What happens when two north poles meet?", choices: ["They repel", "They attract", "Nothing happens", "They merge"], answer: 0 },
      { q: "What happens if you cut a magnet in half?", choices: ["You get two smaller magnets", "You get one north and one south piece", "It stops being magnetic", "It doubles in strength"], answer: 0 },
      { q: "Which metals are strongly magnetic?", choices: ["Iron, nickel and cobalt", "Gold, silver and copper", "Aluminium and tin", "Lead and zinc"], answer: 0 },
      { q: "What causes magnetism in atoms?", choices: ["The motion of electrons", "The weight of the nucleus", "Heat", "Light"], answer: 0 },
      { q: "What generates Earth's magnetic field?", choices: ["Swirling molten iron in the outer core", "The Moon", "Ocean currents", "The atmosphere"], answer: 0 },
      { q: "What is an electromagnet?", choices: ["A magnet made by electric current in a coil", "A very old magnet", "A magnet made of plastic", "A magnet that glows"], answer: 0 },
      { q: "Which of these uses magnets?", choices: ["Electric motors and speakers", "Candles", "Paper books", "Wooden chairs"], answer: 0 },
      { q: "What do aligned groups of atoms in a magnet get called?", choices: ["Domains", "Clusters", "Cells", "Poles"], answer: 0 },
      { q: "Why does a compass needle point north?", choices: ["It aligns with Earth's magnetic field", "It follows the Sun", "It is heavier on one end", "It points to the nearest mountain"], answer: 0 },
      { q: "Roughly when was the last reversal of Earth's magnetic poles?", choices: ["About 780,000 years ago", "Last year", "About 100 years ago", "It has never happened"], answer: 0 }
    ]
  } },

  { id: "light", title: "Light", emoji: "💡",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "shadows", title: "Shadows", emoji: "👤",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "mirrors", title: "Mirrors and Reflection", emoji: "🪞",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "sound", title: "Sound", emoji: "🔔",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "echoes", title: "Echoes", emoji: "🗣️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "vibrations", title: "Vibrations and Music", emoji: "🎸",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "speed-motion", title: "Speed and Motion", emoji: "🏎️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "balance", title: "Balance", emoji: "🤸",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "levers", title: "Levers", emoji: "🪵",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "wheels", title: "Wheels and Axles", emoji: "🛞",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "ramps", title: "Ramps", emoji: "⛷️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "pulleys", title: "Pulleys", emoji: "🏗️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "springs", title: "Springs and Bounce", emoji: "🦘",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "balloons-air", title: "Balloons and Air Power", emoji: "🎈",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "energy", title: "Energy Everywhere", emoji: "⚡",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "electricity", title: "Electricity", emoji: "🔌",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "static", title: "Static Electricity", emoji: "🎈",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "batteries", title: "Batteries", emoji: "🔋",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "how-planes-fly", title: "How Planes Fly", emoji: "✈️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "rockets", title: "Rockets", emoji: "🚀",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "waves", title: "Waves", emoji: "〰️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "colors-light", title: "The Colors of Light", emoji: "🌈",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "lenses", title: "Lenses and Glasses", emoji: "👓",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "heat-moves", title: "How Heat Moves", emoji: "🔥",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "compass", title: "Magnets and the Compass", emoji: "🧭",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "inventions", title: "Great Inventions", emoji: "💡",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } }
  ]
};
