/* Physics Fun - 30 concepts, all playable.
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
  young: {
    pages: [
      { art: "🤚🤚", text: "Rub your hands together fast. Feel that? They get warm! That rubbing feeling is called friction." },
      { art: "🛷❄️", text: "Friction slows things down. A sled slides far on smooth ice because there is little friction. On grass it stops quickly." },
      { art: "👟🛑", text: "Friction helps us too! Your shoes grip the floor so you do not slip. Without friction you could never stop running." }
    ],
    funFact: "Ice skaters glide because the blade makes a tiny bit of water under it. Less friction means more sliding!",
    tryThis: "Push a toy car on carpet, then on a wooden floor, then on a towel. Which surface stops it fastest? That is friction at work.",
    questions: [
      { q: "What do you feel when you rub your hands?", choices: ["Warmth", "Cold", "Wind"], answer: 0 },
      { q: "What is the rubbing force called?", choices: ["Friction", "Gravity", "Magnetism"], answer: 0 },
      { q: "Where does a sled slide farthest?", choices: ["On ice", "On grass", "On sand"], answer: 0 },
      { q: "Which has more friction?", choices: ["Grass", "Ice", "Glass"], answer: 0 },
      { q: "What helps your shoes grip?", choices: ["Friction", "Wind", "Light"], answer: 0 },
      { q: "Without friction you could not...", choices: ["Stop running", "Sleep", "Eat"], answer: 0 },
      { q: "Friction makes things...", choices: ["Slow down", "Speed up", "Disappear"], answer: 0 },
      { q: "Friction can make things...", choices: ["Warm", "Cold", "Wet"], answer: 0 },
      { q: "Which is smoother?", choices: ["Ice", "A towel", "Sandpaper"], answer: 0 },
      { q: "Why do ice skaters glide?", choices: ["Very little friction", "Lots of friction", "No gravity"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🔍🤚", text: "Friction is a force that resists motion when two surfaces touch. Even surfaces that look perfectly smooth are jagged under a microscope, and those tiny peaks catch on each other. Pressing harder pushes the peaks together more, which is why friction increases with weight." },
      { art: "🛷📉", text: "There are two kinds. Static friction holds a still object in place and is stronger. Kinetic friction acts once it is sliding and is weaker. That is why a heavy box is hardest to start moving, and easier once it is going." },
      { art: "🔥⚙️", text: "Friction turns motion into heat, which is how rubbing sticks makes fire and how brakes stop a car: the energy of movement becomes heat in the brake pads. It also wears parts down, which is why engines need oil as a lubricant." },
      { art: "👟🛞", text: "Friction is not the enemy. Walking, driving, writing and holding anything all depend on it. Tyres are designed with tread to keep friction on wet roads. Engineers spend as much effort increasing friction where it is needed as reducing it where it is not." }
    ],
    funFact: "About one fifth of all the energy used by a car engine is spent overcoming friction. Better lubricants are a genuine climate technology.",
    tryThis: "Tilt a board with a book on it until the book just starts to slide, and note the angle. Repeat with a cloth under the book. The angle where it slips measures friction.",
    words: [
      { word: "Friction", meaning: "A force that resists motion between touching surfaces." },
      { word: "Static friction", meaning: "Friction holding a still object in place." },
      { word: "Kinetic friction", meaning: "Friction acting on an object already sliding." },
      { word: "Lubricant", meaning: "A substance like oil that reduces friction." }
    ],
    questions: [
      { q: "What causes friction at a microscopic level?", choices: ["Tiny jagged peaks catching on each other", "Magnetism", "Air pressure", "Static electricity"], answer: 0 },
      { q: "Which friction is stronger?", choices: ["Static", "Kinetic", "They are equal", "Neither exists"], answer: 0 },
      { q: "Why is a heavy box hardest to start moving?", choices: ["Static friction must be overcome first", "It has more gravity", "Air resists it", "It is magnetic"], answer: 0 },
      { q: "What does friction turn motion into?", choices: ["Heat", "Light", "Sound only", "Electricity"], answer: 0 },
      { q: "How do car brakes work?", choices: ["Friction turns movement energy into heat", "Magnets stop the wheels", "Air slows the car", "Gravity pulls it back"], answer: 0 },
      { q: "What is a lubricant?", choices: ["A substance that reduces friction", "A rough surface", "A type of brake", "A heat source"], answer: 0 },
      { q: "Why do tyres have tread?", choices: ["To keep friction on wet roads", "To look good", "To reduce weight", "To hold air"], answer: 0 },
      { q: "Friction increases with...", choices: ["Weight pressing the surfaces together", "Colour", "Temperature only", "Speed only"], answer: 0 },
      { q: "Roughly how much car engine energy goes to overcoming friction?", choices: ["About one fifth", "About half", "Almost none", "Nearly all"], answer: 0 },
      { q: "Which activity depends on friction?", choices: ["Walking", "Floating", "Falling", "Seeing"], answer: 0 }
    ]
  } },

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
  young: {
    pages: [
      { art: "💡🌞", text: "Light lets us see. The sun gives light in the day. Lamps and torches give light at night." },
      { art: "➡️📏", text: "Light travels in straight lines, very very fast. Faster than anything else in the whole universe!" },
      { art: "🪟🧱", text: "Light goes through some things, like glass and water. It cannot go through a wall or a door. That is why rooms get dark." }
    ],
    funFact: "Light from the sun travels 150 million kilometres to reach us, and it only takes about 8 minutes. Nothing is faster!",
    tryThis: "In a dark room, shine a torch through a glass of water, then through a book, then through your hand. What happens each time?",
    questions: [
      { q: "What does light let us do?", choices: ["See", "Hear", "Smell"], answer: 0 },
      { q: "What gives light in the day?", choices: ["The sun", "The moon", "A book"], answer: 0 },
      { q: "How does light travel?", choices: ["In straight lines", "In circles", "In zigzags"], answer: 0 },
      { q: "Is light fast or slow?", choices: ["Very fast", "Very slow", "It does not move"], answer: 0 },
      { q: "Which one can light pass through?", choices: ["Glass", "A wall", "A door"], answer: 0 },
      { q: "How long does sunlight take to reach Earth?", choices: ["About 8 minutes", "8 seconds", "8 days"], answer: 0 },
      { q: "What gives light at night?", choices: ["A lamp", "A rock", "A chair"], answer: 0 },
      { q: "Why do rooms get dark?", choices: ["Light cannot pass through walls", "Light gets tired", "Light sleeps"], answer: 0 },
      { q: "Is anything faster than light?", choices: ["No", "Yes, sound", "Yes, cars"], answer: 0 },
      { q: "Can light pass through water?", choices: ["Yes", "No", "Only at night"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "💡📏", text: "Light is a form of energy that travels as a wave and also behaves like a stream of particles called photons. Physicists spent centuries arguing which it was before concluding it is genuinely both, a idea called wave-particle duality." },
      { art: "🚀⚡", text: "Light travels at 299,792 kilometres per second in a vacuum, the fastest anything can go. Nothing with mass can reach that speed. Because the distance is so vast, looking at distant stars means looking into the past." },
      { art: "🪟🧱", text: "Materials are transparent if light passes through freely, translucent if it passes but scatters, like frosted glass, and opaque if it is blocked. When light hits an opaque object it is absorbed, reflected, or both, and what bounces back is what your eye receives." },
      { art: "🌈👁️", text: "Visible light is only a narrow band of the electromagnetic spectrum. Beyond red is infrared, microwaves and radio; beyond violet is ultraviolet, X-rays and gamma rays. Your eyes evolved to detect the exact band the Sun emits most strongly." }
    ],
    funFact: "The nearest star system after the Sun is over four light years away, so its light left before you were born and only arrives now.",
    tryThis: "Point a TV remote at your phone camera and press a button. Many cameras can see the infrared light your eyes cannot, and it shows as a purple flash.",
    words: [
      { word: "Photon", meaning: "A single particle of light." },
      { word: "Transparent", meaning: "Letting light pass through clearly." },
      { word: "Opaque", meaning: "Blocking light completely." },
      { word: "Spectrum", meaning: "The full range of electromagnetic waves, only part of which we see." }
    ],
    questions: [
      { q: "What is a photon?", choices: ["A single particle of light", "A unit of sound", "A type of atom", "A colour"], answer: 0 },
      { q: "What is wave-particle duality?", choices: ["Light behaves as both wave and particle", "Light has two colours", "Light travels two ways", "Light splits in water"], answer: 0 },
      { q: "How fast does light travel in a vacuum?", choices: ["About 299,792 km per second", "About 300 km per second", "About 3,000 km per second", "Instantly"], answer: 0 },
      { q: "What does translucent mean?", choices: ["Light passes but scatters", "Light is blocked", "Light passes clearly", "Light is absorbed"], answer: 0 },
      { q: "What lies just beyond red on the spectrum?", choices: ["Infrared", "Ultraviolet", "X-rays", "Gamma rays"], answer: 0 },
      { q: "What lies just beyond violet?", choices: ["Ultraviolet", "Infrared", "Radio waves", "Microwaves"], answer: 0 },
      { q: "Why does looking at stars mean looking into the past?", choices: ["Their light took years to arrive", "Stars are old", "Time runs slower there", "Telescopes delay images"], answer: 0 },
      { q: "What happens when light hits an opaque object?", choices: ["It is absorbed, reflected, or both", "It passes through", "It disappears", "It speeds up"], answer: 0 },
      { q: "Can anything with mass reach light speed?", choices: ["No", "Yes, in space", "Yes, near a black hole", "Only photons with mass"], answer: 0 },
      { q: "Why can your eyes see this particular band?", choices: ["It is what the Sun emits most strongly", "It is the fastest band", "It is the only band that exists", "It is the safest band"], answer: 0 }
    ]
  } },

  { id: "shadows", title: "Shadows", emoji: "👤",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "👤☀️", text: "A shadow happens when something blocks the light. Your body blocks the sunlight, so a dark shape appears behind you." },
      { art: "📏🌅", text: "In the morning and evening your shadow is long and stretchy. At midday, when the sun is high, it is short and stubby." },
      { art: "🐰🖐️", text: "You can make shadow animals with your hands and a torch. A rabbit, a bird, a dog. Try it on the wall tonight!" }
    ],
    funFact: "Your shadow is always the same shape as whatever is blocking the light. It has no colour of its own at all, it is just a place light could not reach.",
    tryThis: "Stand outside in the sun in the morning and have someone chalk around your shadow. Do it again at lunchtime and in the evening. Three different sizes!",
    questions: [
      { q: "What makes a shadow?", choices: ["Something blocking light", "Water", "Wind"], answer: 0 },
      { q: "When is your shadow longest?", choices: ["Morning and evening", "Midday", "Midnight"], answer: 0 },
      { q: "When is your shadow shortest?", choices: ["Midday", "Sunrise", "Sunset"], answer: 0 },
      { q: "Can you make shadow animals?", choices: ["Yes, with your hands", "No", "Only with a camera"], answer: 0 },
      { q: "What colour is a shadow?", choices: ["Dark, with no colour of its own", "Bright red", "Green"], answer: 0 },
      { q: "What do you need to make a shadow?", choices: ["A light and an object", "Only water", "Only wind"], answer: 0 },
      { q: "A shadow is a place light could not...", choices: ["Reach", "Sleep", "Grow"], answer: 0 },
      { q: "Does your shadow change during the day?", choices: ["Yes", "No", "Only on Sundays"], answer: 0 },
      { q: "Where does your shadow fall?", choices: ["Opposite the light", "Toward the light", "Straight up"], answer: 0 },
      { q: "Can you have a shadow at night with a torch?", choices: ["Yes", "No", "Only outside"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "👤📐", text: "Because light travels in straight lines, an opaque object leaves a region behind it where light cannot reach. That region is a shadow. Its sharpness depends on the light source: a small point source gives crisp edges, a broad source gives soft ones." },
      { art: "🌑🌗", text: "Shadows from a large source have two parts. The umbra is the fully dark core where the source is entirely blocked, and the penumbra is the fuzzy rim where it is only partly blocked. That is why your shadow edge is blurry on a sunny day." },
      { art: "🌍🌕", text: "Eclipses are shadows on an enormous scale. A solar eclipse is the Moon's shadow falling on Earth; a lunar eclipse is Earth's shadow falling on the Moon. Both are only possible because of a coincidence in size and distance." },
      { art: "📏🌍", text: "Around 240 BCE, Eratosthenes used shadows to measure Earth. He knew the Sun stood directly overhead at Syene at noon on the solstice, while in Alexandria it cast a 7-degree shadow. From that angle and the distance between the cities, he calculated Earth's circumference within a few percent." }
    ],
    funFact: "Eratosthenes worked out the size of the planet with a stick, a shadow, and arithmetic, more than 1,700 years before anyone sailed around it.",
    tryThis: "Put a stick upright outside and mark the shadow tip every 30 minutes across a day. The curve you draw is the same data Eratosthenes used.",
    words: [
      { word: "Umbra", meaning: "The fully dark centre of a shadow." },
      { word: "Penumbra", meaning: "The partly shaded fuzzy edge of a shadow." },
      { word: "Eclipse", meaning: "When one body's shadow falls on another." },
      { word: "Circumference", meaning: "The distance all the way around a circle or sphere." }
    ],
    questions: [
      { q: "Why do shadows form?", choices: ["Light travels in straight lines and is blocked", "Light bends around objects", "Objects absorb darkness", "Air scatters light"], answer: 0 },
      { q: "What is the umbra?", choices: ["The fully dark core of a shadow", "The fuzzy edge", "The lit area", "The light source"], answer: 0 },
      { q: "What is the penumbra?", choices: ["The partly shaded fuzzy rim", "The dark centre", "A type of eclipse", "A light source"], answer: 0 },
      { q: "What gives the crispest shadow edges?", choices: ["A small point light source", "A broad light source", "Sunlight through cloud", "Many lamps"], answer: 0 },
      { q: "What is a solar eclipse?", choices: ["The Moon's shadow falling on Earth", "Earth's shadow on the Moon", "The Sun going dark", "A cloud covering the Sun"], answer: 0 },
      { q: "What is a lunar eclipse?", choices: ["Earth's shadow falling on the Moon", "The Moon's shadow on Earth", "The Moon disappearing", "A new moon"], answer: 0 },
      { q: "Who measured Earth using shadows?", choices: ["Eratosthenes", "Archimedes", "Aristotle", "Ptolemy"], answer: 0 },
      { q: "Roughly when did he do it?", choices: ["240 BCE", "1240 CE", "240 CE", "1500 CE"], answer: 0 },
      { q: "What angle did he measure in Alexandria?", choices: ["7 degrees", "45 degrees", "90 degrees", "23 degrees"], answer: 0 },
      { q: "How accurate was his result?", choices: ["Within a few percent", "Off by half", "Off by ten times", "Completely wrong"], answer: 0 }
    ]
  } },

  { id: "mirrors", title: "Mirrors and Reflection", emoji: "🪞",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🪞😊", text: "When you look in a mirror you see yourself. That is because light bounces off you, hits the mirror, and bounces back to your eyes." },
      { art: "✋🔄", text: "Mirrors swap left and right. Wave your right hand and your mirror friend waves their left. Try it!" },
      { art: "🥄🌊", text: "Shiny spoons and still water are mirrors too. Anything smooth and shiny can bounce light back." }
    ],
    funFact: "Try writing your name on paper and holding it up to a mirror. The letters go backwards! Some people can write that way on purpose.",
    tryThis: "Hold two mirrors facing each other with a small toy between them. How many copies can you count? It looks like they go on forever.",
    questions: [
      { q: "Why can you see yourself in a mirror?", choices: ["Light bounces back to your eyes", "The mirror draws you", "The mirror remembers"], answer: 0 },
      { q: "What do mirrors swap?", choices: ["Left and right", "Up and down", "Colours"], answer: 0 },
      { q: "If you wave your right hand, the mirror waves...", choices: ["Its left", "Its right", "Nothing"], answer: 0 },
      { q: "Which one can act like a mirror?", choices: ["A shiny spoon", "A brick", "A sponge"], answer: 0 },
      { q: "What must a surface be to reflect well?", choices: ["Smooth and shiny", "Rough and dull", "Soft"], answer: 0 },
      { q: "Can still water work like a mirror?", choices: ["Yes", "No", "Only at night"], answer: 0 },
      { q: "What happens to writing in a mirror?", choices: ["It goes backwards", "It disappears", "It gets bigger"], answer: 0 },
      { q: "What bounces off the mirror?", choices: ["Light", "Sound", "Water"], answer: 0 },
      { q: "Two mirrors facing each other make...", choices: ["Many copies", "One copy", "No copies"], answer: 0 },
      { q: "Bouncing light is called...", choices: ["Reflection", "Rejection", "Retraction"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🪞📐", text: "Reflection follows one simple rule: the angle light arrives at equals the angle it leaves, measured from a line perpendicular to the surface. This is the law of reflection, and it holds for every mirror, every time." },
      { art: "🔍🔄", text: "A flat mirror produces a virtual image: it appears behind the glass, upright, the same size, and reversed front to back. It is not really left-right reversal, it is depth reversal, which is why text appears backwards but not upside down." },
      { art: "🥄🔭", text: "Curved mirrors change the image. Concave mirrors curve inward and can magnify or focus light to a point, which is how reflecting telescopes and makeup mirrors work. Convex mirrors bulge outward, shrinking the image but widening the view, which is why they are used on car wing mirrors and shop corners." },
      { art: "🌫️🧱", text: "Everything reflects light, not just mirrors. The difference is smoothness. A mirror gives specular reflection, where rays stay organised. A wall gives diffuse reflection, scattering rays in all directions, which is why you see the wall but not yourself in it." }
    ],
    funFact: "The James Webb Space Telescope uses 18 hexagonal gold-coated mirrors that unfolded in space, because a single mirror that size could not fit in any rocket.",
    tryThis: "Bounce a torch beam off a mirror onto a wall at different angles and measure them with a protractor. The incoming and outgoing angles will match every time.",
    words: [
      { word: "Reflection", meaning: "Light bouncing off a surface." },
      { word: "Virtual image", meaning: "An image that appears to be where no light actually is." },
      { word: "Concave", meaning: "Curving inward, able to focus light." },
      { word: "Convex", meaning: "Bulging outward, widening the view." }
    ],
    questions: [
      { q: "What is the law of reflection?", choices: ["The angle in equals the angle out", "Light always bends", "Light slows at a mirror", "Light splits in two"], answer: 0 },
      { q: "What kind of image does a flat mirror make?", choices: ["A virtual image", "A real image", "A projected image", "No image"], answer: 0 },
      { q: "What is actually reversed in a mirror?", choices: ["Front and back, that is depth", "Left and right", "Up and down", "Colour"], answer: 0 },
      { q: "What does a concave mirror do?", choices: ["Focuses light and can magnify", "Widens the view", "Blocks light", "Splits colours"], answer: 0 },
      { q: "Where are convex mirrors used?", choices: ["Car wing mirrors and shop corners", "Telescopes", "Microscopes", "Periscopes only"], answer: 0 },
      { q: "What is specular reflection?", choices: ["Organised reflection from a smooth surface", "Scattered reflection", "Absorbed light", "Bent light"], answer: 0 },
      { q: "What is diffuse reflection?", choices: ["Light scattered in all directions", "Light focused to a point", "Light absorbed", "Light bent"], answer: 0 },
      { q: "Why can you see a wall but not yourself in it?", choices: ["It reflects diffusely", "It absorbs all light", "It is opaque", "It has no colour"], answer: 0 },
      { q: "What kind of mirrors does the James Webb telescope use?", choices: ["18 gold-coated hexagons", "One large glass disc", "Convex plastic", "Liquid mercury"], answer: 0 },
      { q: "Which telescope type uses a concave mirror?", choices: ["A reflecting telescope", "A refracting telescope", "A radio telescope", "A microscope"], answer: 0 }
    ]
  } },

  { id: "sound", title: "Sound", emoji: "🔔",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🔔〰️", text: "Sound happens when something shakes very fast. That shaking is called vibrating. A bell rings because it is vibrating!" },
      { art: "👂〰️", text: "The shaking makes the air wiggle, and the wiggles travel to your ears. That is how you hear." },
      { art: "🥁🤏", text: "Big shakes make loud sounds. Small shakes make quiet ones. Fast shakes are high and squeaky, slow shakes are low and rumbly." }
    ],
    funFact: "Put your fingers gently on your throat and hum. You can feel the vibrating! Your voice is made by tiny flaps shaking inside your neck.",
    tryThis: "Stretch a rubber band between your fingers and pluck it. Watch it blur as it vibrates, and listen. Stretch it tighter and pluck again. Higher!",
    questions: [
      { q: "What makes sound?", choices: ["Something shaking fast", "Something glowing", "Something freezing"], answer: 0 },
      { q: "What is fast shaking called?", choices: ["Vibrating", "Melting", "Floating"], answer: 0 },
      { q: "What travels to your ears?", choices: ["Wiggles in the air", "Water", "Light"], answer: 0 },
      { q: "Big shakes make sounds that are...", choices: ["Loud", "Quiet", "Silent"], answer: 0 },
      { q: "Fast shakes make sounds that are...", choices: ["High and squeaky", "Low and rumbly", "Silent"], answer: 0 },
      { q: "What part of you hears sound?", choices: ["Ears", "Eyes", "Nose"], answer: 0 },
      { q: "Where can you feel your voice vibrating?", choices: ["Your throat", "Your foot", "Your elbow"], answer: 0 },
      { q: "A bell rings because it is...", choices: ["Vibrating", "Sleeping", "Glowing"], answer: 0 },
      { q: "Slow shakes make sounds that are...", choices: ["Low", "High", "Invisible"], answer: 0 },
      { q: "A tighter rubber band sounds...", choices: ["Higher", "Lower", "The same"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "〰️🔔", text: "Sound is a vibration travelling through a material as a pressure wave. A vibrating object squeezes the air next to it, that squeeze pushes the next patch of air, and the disturbance ripples outward. The air itself barely moves; the wave does." },
      { art: "📊🎵", text: "Two properties describe it. Frequency, measured in hertz, is how many vibrations per second and determines pitch: high frequency is a high note. Amplitude is the size of the vibration and determines loudness, measured in decibels." },
      { art: "🏃💨", text: "Sound travels about 343 metres per second in air, far slower than light, which is why you see lightning before you hear thunder. It moves faster in denser materials: roughly 1,500 m/s in water and 5,000 m/s in steel." },
      { art: "🌌🔇", text: "Sound needs a medium. In a vacuum there are no particles to pass the vibration along, so space is genuinely silent. Humans hear roughly 20 to 20,000 hertz, and that upper limit drops with age. Dogs hear to 45,000 and bats beyond 100,000." }
    ],
    funFact: "Elephants communicate using infrasound below 20 hertz, too low for humans to hear, and those calls can travel several kilometres through the ground.",
    tryThis: "Fill glasses with different amounts of water and tap them. More water vibrates slower, giving a lower note. You have built a frequency instrument.",
    words: [
      { word: "Frequency", meaning: "Vibrations per second, measured in hertz, setting pitch." },
      { word: "Amplitude", meaning: "The size of a vibration, setting loudness." },
      { word: "Medium", meaning: "The material a wave travels through." },
      { word: "Decibel", meaning: "The unit used to measure loudness." }
    ],
    questions: [
      { q: "What is sound?", choices: ["A vibration travelling as a pressure wave", "A type of light", "A chemical reaction", "A magnetic field"], answer: 0 },
      { q: "What does frequency determine?", choices: ["Pitch", "Loudness", "Speed", "Direction"], answer: 0 },
      { q: "What does amplitude determine?", choices: ["Loudness", "Pitch", "Speed", "Colour"], answer: 0 },
      { q: "How fast does sound travel in air?", choices: ["About 343 m/s", "About 34 m/s", "About 3,000 m/s", "Instantly"], answer: 0 },
      { q: "Where does sound travel fastest?", choices: ["Steel", "Air", "Water", "A vacuum"], answer: 0 },
      { q: "Why is space silent?", choices: ["A vacuum has no particles to carry the vibration", "Sound freezes", "There is no air pressure to hear", "Sound is absorbed by stars"], answer: 0 },
      { q: "What is the human hearing range?", choices: ["About 20 to 20,000 Hz", "20 to 200 Hz", "1 to 100 Hz", "100 to 1,000,000 Hz"], answer: 0 },
      { q: "What unit measures loudness?", choices: ["Decibel", "Hertz", "Newton", "Watt"], answer: 0 },
      { q: "What is infrasound?", choices: ["Sound below 20 hertz", "Sound above 20,000 hertz", "Very loud sound", "Sound in water"], answer: 0 },
      { q: "Why do you see lightning before hearing thunder?", choices: ["Light travels far faster than sound", "Thunder starts later", "Sound bends", "Thunder is quieter"], answer: 0 }
    ]
  } },

  { id: "echoes", title: "Echoes", emoji: "🗣️",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🗣️⛰️", text: "Shout in a big empty place and your voice comes back to you. Hello... hello... hello. That is an echo!" },
      { art: "🧱↩️", text: "Sound bounces off hard walls, just like a ball bounces off the floor. It comes back to your ears a moment later." },
      { art: "🦇🌙", text: "Bats use echoes to fly in the dark. They squeak, listen for the echo, and know exactly where everything is!" }
    ],
    funFact: "Soft things like curtains and carpets soak sound up instead of bouncing it. That is why a room full of cushions has almost no echo.",
    tryThis: "Shout in an empty room with hard floors, then in a room with a carpet and curtains. Which one echoes? Now you know why cinemas have soft walls.",
    questions: [
      { q: "What is an echo?", choices: ["Your sound coming back", "A new sound", "A song"], answer: 0 },
      { q: "What does sound bounce off?", choices: ["Hard walls", "Soft cushions", "Air only"], answer: 0 },
      { q: "Which animal uses echoes to fly at night?", choices: ["Bat", "Dog", "Fish"], answer: 0 },
      { q: "Where do you hear echoes best?", choices: ["A big empty place", "A tiny cupboard", "In bed"], answer: 0 },
      { q: "What soaks up sound?", choices: ["Curtains and carpets", "Bricks", "Glass"], answer: 0 },
      { q: "Does an echo come back straight away?", choices: ["A moment later", "Instantly", "The next day"], answer: 0 },
      { q: "Sound bounces like a...", choices: ["Ball", "Cloud", "Feather"], answer: 0 },
      { q: "Why do cinemas have soft walls?", choices: ["To stop echoes", "To look nice", "To keep warm"], answer: 0 },
      { q: "A bat squeaks and then...", choices: ["Listens for the echo", "Goes to sleep", "Sings"], answer: 0 },
      { q: "Which room echoes more?", choices: ["Hard floors", "Thick carpet", "A bed"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "〰️🧱", text: "An echo is sound reflected back from a hard surface. For your brain to register it as separate rather than blurred into the original, the reflection must arrive at least about 0.1 seconds later, which means the surface has to be roughly 17 metres away or more." },
      { art: "🦇📡", text: "Bats and dolphins use echolocation: they emit a pulse and time how long the echo takes to return. Since sound speed is known, the delay gives distance, and the changing pitch reveals whether the target is moving toward or away." },
      { art: "🚢🌊", text: "Humans copied this. Sonar sends a sound pulse through water and times the return to map the seabed or find submarines. Ultrasound scanners do the same inside the body, which is how expectant parents see a baby before it is born." },
      { art: "🏛️🎵", text: "Architects manage reflections deliberately. Concert halls are shaped so reflections arrive quickly enough to enrich the sound rather than blur it, a property called reverberation. Recording studios do the opposite, using foam and angled surfaces to kill reflections entirely." }
    ],
    funFact: "Doctors can measure blood flow using the pitch shift in reflected ultrasound, the same Doppler effect that makes a passing siren drop in pitch.",
    tryThis: "Clap once in a stairwell and count how long the sound lingers. That linger is reverberation, and it is the single biggest factor in how a room sounds.",
    words: [
      { word: "Echo", meaning: "Sound reflected back from a surface." },
      { word: "Echolocation", meaning: "Finding objects by emitting sound and timing the echo." },
      { word: "Sonar", meaning: "Using sound pulses underwater to detect objects." },
      { word: "Reverberation", meaning: "Many overlapping reflections making sound linger in a room." }
    ],
    questions: [
      { q: "What is an echo?", choices: ["Sound reflected from a hard surface", "A louder sound", "A slower sound", "A repeated word"], answer: 0 },
      { q: "How far away must a surface be for a distinct echo?", choices: ["About 17 metres or more", "About 1 metre", "About 100 metres", "Any distance"], answer: 0 },
      { q: "What is echolocation?", choices: ["Emitting sound and timing the echo to locate things", "Seeing in the dark", "Smelling prey", "Feeling vibrations in the ground"], answer: 0 },
      { q: "Which animals use it?", choices: ["Bats and dolphins", "Horses and cows", "Eagles and owls", "Snakes and lizards"], answer: 0 },
      { q: "What does sonar do?", choices: ["Uses sound pulses underwater to detect objects", "Uses light underwater", "Uses magnets", "Uses radio waves underwater"], answer: 0 },
      { q: "What medical tool works the same way?", choices: ["Ultrasound scanning", "X-ray", "MRI", "Blood test"], answer: 0 },
      { q: "What is reverberation?", choices: ["Many overlapping reflections making sound linger", "A single echo", "Sound absorption", "Silence"], answer: 0 },
      { q: "Why do recording studios use foam?", choices: ["To kill reflections", "To keep warm", "To look professional", "To amplify sound"], answer: 0 },
      { q: "How does delay give distance?", choices: ["Sound speed is known, so time tells distance", "Louder means closer", "Pitch tells distance", "It does not"], answer: 0 },
      { q: "What effect lets doctors measure blood flow?", choices: ["The Doppler pitch shift", "Reverberation", "Diffraction", "Refraction"], answer: 0 }
    ]
  } },

  { id: "vibrations", title: "Vibrations and Music", emoji: "🎸",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🎸〰️", text: "Pluck a guitar string and watch it blur. It is moving back and forth so fast your eyes cannot keep up. That is a vibration." },
      { art: "🥁🎺", text: "Every instrument works by vibrating something. A drum skin shakes. A guitar string shakes. In a trumpet, your lips shake!" },
      { art: "📏🎶", text: "Short and tight things shake fast and sound high. Long and loose things shake slowly and sound low. That is how music works!" }
    ],
    funFact: "Deaf people can enjoy music by feeling the vibrations through the floor or through a balloon held against their chest.",
    tryThis: "Stretch cling film over a bowl, sprinkle a few grains of rice on it, and play loud music nearby. Watch the rice jump as the vibrations arrive!",
    questions: [
      { q: "What happens when you pluck a string?", choices: ["It vibrates", "It melts", "It glows"], answer: 0 },
      { q: "What vibrates in a drum?", choices: ["The skin", "The stick only", "The air inside only"], answer: 0 },
      { q: "What vibrates in a trumpet?", choices: ["Your lips", "Your hair", "The valves"], answer: 0 },
      { q: "Short tight strings sound...", choices: ["High", "Low", "Silent"], answer: 0 },
      { q: "Long loose strings sound...", choices: ["Low", "High", "Squeaky"], answer: 0 },
      { q: "Why does a plucked string look blurry?", choices: ["It moves too fast to see", "It is dirty", "It is glowing"], answer: 0 },
      { q: "How can deaf people enjoy music?", choices: ["By feeling vibrations", "They cannot", "Only by reading"], answer: 0 },
      { q: "Every instrument works by...", choices: ["Vibrating something", "Heating something", "Freezing something"], answer: 0 },
      { q: "What makes rice jump on cling film?", choices: ["Vibrations from the sound", "Wind", "Magnets"], answer: 0 },
      { q: "Vibration means moving...", choices: ["Back and forth fast", "In a straight line", "Very slowly"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🎸📊", text: "A vibrating string's pitch depends on three things: its length, its tension, and its thickness. Shorter, tighter, thinner all raise the pitch. That is why a guitarist pressing a fret shortens the string to play a higher note, and why bass strings are thick." },
      { art: "🎵🔢", text: "A string does not vibrate at one frequency alone. Alongside the fundamental, it vibrates in halves, thirds and quarters, producing quieter overtones called harmonics. The particular mix of harmonics is what makes a violin and a piano sound different playing the same note." },
      { art: "📻⚡", text: "Every object has a natural frequency at which it vibrates most readily. Push it at exactly that rate and the vibration grows dramatically. This is resonance, and it is why a singer can shatter a wine glass and why a swing goes higher when you push in rhythm." },
      { art: "🌉⚠️", text: "Resonance can be destructive. Soldiers break step crossing bridges because a marching rhythm could match a bridge's natural frequency. Engineers add dampers to skyscrapers for the same reason, so wind and earthquakes cannot build up a matching rhythm." }
    ],
    funFact: "Taipei 101 contains a 660-tonne steel ball hanging near the top. It swings opposite to the building's sway, cancelling the vibration. You can go and look at it.",
    tryThis: "Hold a ruler over a table edge and twang it. Slide it longer and shorter and listen to the pitch change. You are directly controlling frequency with length.",
    words: [
      { word: "Frequency", meaning: "How many vibrations happen each second." },
      { word: "Harmonic", meaning: "A quieter extra frequency that shapes an instrument's tone." },
      { word: "Resonance", meaning: "A large vibration built up by pushing at the natural frequency." },
      { word: "Damper", meaning: "A device that absorbs unwanted vibration." }
    ],
    questions: [
      { q: "Which raises a string's pitch?", choices: ["Making it shorter", "Making it longer", "Making it looser", "Making it thicker"], answer: 0 },
      { q: "Why are bass strings thick?", choices: ["Thicker strings vibrate slower, giving low notes", "They last longer", "They are louder", "They are cheaper"], answer: 0 },
      { q: "What are harmonics?", choices: ["Quieter extra frequencies alongside the main one", "Very loud notes", "Silent vibrations", "Echoes"], answer: 0 },
      { q: "Why do a violin and piano sound different on the same note?", choices: ["Different mixes of harmonics", "Different pitches", "Different volumes", "Different speeds"], answer: 0 },
      { q: "What is resonance?", choices: ["Vibration growing when pushed at the natural frequency", "Sound bouncing back", "Sound being absorbed", "A type of harmonic"], answer: 0 },
      { q: "Why does a swing go higher when pushed in rhythm?", choices: ["Resonance", "Friction", "Gravity increases", "Air pressure"], answer: 0 },
      { q: "Why do soldiers break step on bridges?", choices: ["A marching rhythm could resonate with the bridge", "To move faster", "For tradition only", "To stay quiet"], answer: 0 },
      { q: "What is a damper?", choices: ["A device absorbing unwanted vibration", "A type of string", "A loudspeaker", "A tuning tool"], answer: 0 },
      { q: "What is inside Taipei 101?", choices: ["A 660-tonne steel ball damper", "A water tank", "A giant spring", "Nothing unusual"], answer: 0 },
      { q: "What three things set a string's pitch?", choices: ["Length, tension and thickness", "Colour, length and age", "Volume, pitch and tone", "Material only"], answer: 0 }
    ]
  } },

  { id: "speed-motion", title: "Speed and Motion", emoji: "🏎️",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🏎️🐢", text: "Some things move fast, like a race car. Some things move slowly, like a snail. Speed is how quickly something gets somewhere." },
      { art: "📏⏱️", text: "To know the speed you need two things: how far it went, and how long it took. A long way in a short time means fast!" },
      { art: "🏃💨", text: "You can change speed. Run, then walk, then stop. Speeding up, slowing down, and stopping are all changes in motion." }
    ],
    funFact: "A cheetah can run about 100 kilometres per hour, as fast as a car on the motorway. But it can only keep going for about 30 seconds!",
    tryThis: "Measure ten steps across a room. Time yourself walking it, then hopping it, then crawling it. Same distance, different times, different speeds.",
    questions: [
      { q: "What is speed?", choices: ["How quickly something gets somewhere", "How heavy something is", "How loud something is"], answer: 0 },
      { q: "Which is fast?", choices: ["A race car", "A snail", "A rock"], answer: 0 },
      { q: "What two things do you need to know speed?", choices: ["How far and how long", "Colour and size", "Weight and shape"], answer: 0 },
      { q: "A long way in a short time means...", choices: ["Fast", "Slow", "Stopped"], answer: 0 },
      { q: "Which is slow?", choices: ["A snail", "A jet", "A cheetah"], answer: 0 },
      { q: "Can you change your speed?", choices: ["Yes", "No", "Only on Sundays"], answer: 0 },
      { q: "How fast can a cheetah run?", choices: ["About 100 km per hour", "About 10 km per hour", "About 500 km per hour"], answer: 0 },
      { q: "How long can a cheetah keep that up?", choices: ["About 30 seconds", "All day", "One hour"], answer: 0 },
      { q: "Slowing down is a change in...", choices: ["Motion", "Colour", "Weight"], answer: 0 },
      { q: "Which takes longer to cross a room?", choices: ["Crawling", "Running", "Hopping fast"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "📏➗⏱️", text: "Speed is distance divided by time. Travel 100 metres in 10 seconds and your speed is 10 metres per second. That single formula, rearranged, also gives you distance from speed and time, or time from distance and speed." },
      { art: "🧭➡️", text: "Velocity is speed with a direction attached. Driving 50 km/h north and 50 km/h south are the same speed but opposite velocities. That distinction matters enormously in physics, because direction changes are changes in motion." },
      { art: "📈🚀", text: "Acceleration is the rate at which velocity changes. A car going from 0 to 100 km/h in 5 seconds is accelerating. Braking is acceleration too, just negative. And turning at constant speed is still acceleration, because direction is changing." },
      { art: "🏃📊", text: "Average speed differs from instantaneous speed. A two-hour journey of 120 km averages 60 km/h, but you were probably stopped at lights and doing 90 elsewhere. Speedometers show instantaneous speed; journey planners use average." }
    ],
    funFact: "The fastest human sprint speed ever recorded is about 44 km/h, held by Usain Bolt over a short stretch of his 100 metre world record.",
    tryThis: "Time a car passing between two fixed points a known distance apart and calculate its speed. Then compare with the posted limit. You have just built a speed camera.",
    words: [
      { word: "Speed", meaning: "Distance travelled divided by time taken." },
      { word: "Velocity", meaning: "Speed together with a direction." },
      { word: "Acceleration", meaning: "The rate at which velocity changes." },
      { word: "Instantaneous", meaning: "At one exact moment rather than averaged." }
    ],
    questions: [
      { q: "How is speed calculated?", choices: ["Distance divided by time", "Time divided by distance", "Distance times time", "Distance plus time"], answer: 0 },
      { q: "What is your speed covering 100 m in 10 s?", choices: ["10 m/s", "1 m/s", "100 m/s", "1,000 m/s"], answer: 0 },
      { q: "What is velocity?", choices: ["Speed with a direction", "Speed doubled", "Average speed", "Top speed"], answer: 0 },
      { q: "What is acceleration?", choices: ["The rate velocity changes", "Top speed", "Distance covered", "Time taken"], answer: 0 },
      { q: "Is braking acceleration?", choices: ["Yes, negative acceleration", "No", "Only in cars", "Only downhill"], answer: 0 },
      { q: "Is turning at constant speed acceleration?", choices: ["Yes, because direction changes", "No", "Only at high speed", "Only in circles"], answer: 0 },
      { q: "What does a speedometer show?", choices: ["Instantaneous speed", "Average speed", "Total distance", "Acceleration"], answer: 0 },
      { q: "120 km in 2 hours averages...", choices: ["60 km/h", "120 km/h", "30 km/h", "240 km/h"], answer: 0 },
      { q: "Driving north and south at 50 km/h means...", choices: ["Same speed, opposite velocity", "Same velocity", "Different speed", "No motion"], answer: 0 },
      { q: "What is the fastest recorded human sprint speed?", choices: ["About 44 km/h", "About 20 km/h", "About 100 km/h", "About 60 km/h"], answer: 0 }
    ]
  } },

  { id: "balance", title: "Balance", emoji: "🤸",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🤸⚖️", text: "Stand on one foot. Wobble wobble! Your body is working hard to stay balanced and not fall over." },
      { art: "🏗️📦", text: "Things stay up when their weight is spread evenly. A wide bottom is steadier than a narrow one. That is why towers have big bases." },
      { art: "🚲👀", text: "When you ride a bike you balance without even thinking. Your ears help! Tiny parts deep inside them tell your brain which way is up." }
    ],
    funFact: "Flamingos can sleep standing on one leg. Their leg locks in place so it takes almost no effort at all.",
    tryThis: "Build the tallest tower of blocks you can. Then build one with a really wide base. Which one survives a gentle table wobble?",
    questions: [
      { q: "What happens when you stand on one foot?", choices: ["You wobble and balance", "You float", "You get taller"], answer: 0 },
      { q: "Which base is steadier?", choices: ["A wide one", "A narrow one", "A pointy one"], answer: 0 },
      { q: "What helps you know which way is up?", choices: ["Your ears", "Your knees", "Your hair"], answer: 0 },
      { q: "Why do towers have big bases?", choices: ["To stay steady", "To look nice", "To be heavy"], answer: 0 },
      { q: "Which bird sleeps on one leg?", choices: ["Flamingo", "Penguin", "Chicken"], answer: 0 },
      { q: "Do you think about balancing on a bike?", choices: ["No, your body does it", "Yes, every second", "You cannot balance"], answer: 0 },
      { q: "Weight spread evenly means...", choices: ["Better balance", "Falling over", "Getting heavier"], answer: 0 },
      { q: "A tall thin tower is...", choices: ["Wobbly", "Very steady", "Impossible"], answer: 0 },
      { q: "Where are the balance parts?", choices: ["Deep inside your ears", "In your toes", "In your nose"], answer: 0 },
      { q: "What does your brain do with that information?", choices: ["Keeps you upright", "Makes you sleepy", "Makes noise"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "⚖️📍", text: "Every object has a centre of mass, the single point where its weight can be treated as acting. An object stays upright as long as a line dropped straight down from that point falls inside its base of support. Tip it past that and gravity takes over." },
      { art: "🏗️📐", text: "This gives two rules for stability: a wider base and a lower centre of mass. Racing cars are wide and low for exactly this reason, and a double-decker bus is tested by tilting it to check where it topples." },
      { art: "🤸🧠", text: "Human balance combines three systems: the vestibular system in your inner ear, which senses tilt and acceleration using fluid and tiny hairs; vision, which gives a reference; and proprioception, your sense of where your limbs are. Close your eyes on one leg and you remove one of the three." },
      { art: "🎪🪢", text: "Tightrope walkers carry a long pole to increase their rotational inertia, making them turn more slowly and giving them time to correct. Some poles droop at the ends, lowering the centre of mass below the wire entirely, which makes toppling almost impossible." }
    ],
    funFact: "The Leaning Tower of Pisa still stands because its centre of mass, despite the tilt, remains just inside its base. Engineers reduced the lean in the 1990s to keep it that way.",
    tryThis: "Stand with your heels and back flat against a wall and try to pick up something from the floor. You cannot, because the wall stops you shifting your centre of mass forward.",
    words: [
      { word: "Centre of mass", meaning: "The point where an object's weight acts." },
      { word: "Base of support", meaning: "The area beneath an object that holds it up." },
      { word: "Vestibular system", meaning: "The balance organs in the inner ear." },
      { word: "Proprioception", meaning: "Your sense of where your own body parts are." }
    ],
    questions: [
      { q: "What is the centre of mass?", choices: ["The point where an object's weight acts", "The heaviest part", "The geometric middle only", "The base"], answer: 0 },
      { q: "When does an object stay upright?", choices: ["When a line down from its centre of mass falls inside its base", "When it is heavy", "When it is symmetrical", "Always"], answer: 0 },
      { q: "What two things improve stability?", choices: ["Wider base and lower centre of mass", "Taller and narrower", "Heavier top", "Smoother surface"], answer: 0 },
      { q: "Why are racing cars wide and low?", choices: ["For stability at speed", "To look fast", "To reduce weight", "For passenger room"], answer: 0 },
      { q: "Where is the vestibular system?", choices: ["The inner ear", "The eyes", "The spine", "The feet"], answer: 0 },
      { q: "What is proprioception?", choices: ["Sensing where your limbs are", "Seeing clearly", "Hearing balance", "Feeling temperature"], answer: 0 },
      { q: "Which three systems give human balance?", choices: ["Vestibular, vision and proprioception", "Vision, hearing and touch", "Muscles, bones and skin", "Heart, lungs and brain"], answer: 0 },
      { q: "Why do tightrope walkers carry a pole?", choices: ["It increases rotational inertia, slowing any turn", "It adds weight", "It helps them see", "It is tradition"], answer: 0 },
      { q: "What do drooping pole ends achieve?", choices: ["They lower the centre of mass below the wire", "They add grip", "They balance wind", "They look dramatic"], answer: 0 },
      { q: "Why does the Tower of Pisa still stand?", choices: ["Its centre of mass is still inside its base", "It is very light", "It is held by cables", "It is not really leaning"], answer: 0 }
    ]
  } },

  { id: "levers", title: "Levers", emoji: "🪵",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🪵⚖️", text: "A lever is a strong stick that helps you lift heavy things. Push down on one end and the other end lifts up!" },
      { art: "🛝👫", text: "A seesaw is a lever. The middle bit it balances on is called the pivot. Sit further back and you can lift a bigger friend!" },
      { art: "✂️🥄", text: "Levers are everywhere. Scissors, a wheelbarrow, a bottle opener, even a spoon getting the lid off a tin." }
    ],
    funFact: "A long time ago a scientist named Archimedes said that if you gave him a lever long enough, he could move the whole Earth!",
    tryThis: "Balance a ruler on a pencil. Put a coin on one end and try to lift it by pressing the other. Now move the pencil closer to the coin. Easier!",
    questions: [
      { q: "What does a lever help you do?", choices: ["Lift heavy things", "Stay warm", "See far"], answer: 0 },
      { q: "What is the middle balance point called?", choices: ["Pivot", "Handle", "Corner"], answer: 0 },
      { q: "Which is a lever?", choices: ["A seesaw", "A ball", "A pillow"], answer: 0 },
      { q: "If you sit further back on a seesaw you can lift...", choices: ["Someone bigger", "Nobody", "Only yourself"], answer: 0 },
      { q: "Which one is a lever?", choices: ["Scissors", "A cup", "A sock"], answer: 0 },
      { q: "Who said he could move the Earth with a lever?", choices: ["Archimedes", "Newton", "Einstein"], answer: 0 },
      { q: "Push down one end and the other end...", choices: ["Lifts up", "Also goes down", "Disappears"], answer: 0 },
      { q: "A wheelbarrow is a...", choices: ["Lever", "Magnet", "Mirror"], answer: 0 },
      { q: "A lever is usually a strong...", choices: ["Stick or bar", "Rope", "Cloth"], answer: 0 },
      { q: "Moving the pivot closer to the load makes lifting...", choices: ["Easier", "Harder", "Impossible"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🪵📐", text: "A lever is a rigid bar turning on a pivot called a fulcrum. It trades distance for force: push a long way with a small force and the load moves a short way with a large force. The total work stays the same, which is why levers multiply force but never create energy." },
      { art: "1️⃣2️⃣3️⃣", text: "There are three classes. First class has the fulcrum between effort and load, like a seesaw or scissors. Second class has the load in the middle, like a wheelbarrow or nutcracker. Third class has the effort in the middle, like tweezers or a fishing rod." },
      { art: "💪🦴", text: "Your body is full of third-class levers. Your forearm pivots at the elbow, the bicep pulls close to the joint, and the hand carries the load far away. That arrangement sacrifices force for speed and range of movement, which is why your arm can move fast but not lift enormously." },
      { art: "🌍🗣️", text: "Archimedes understood the principle in the third century BCE and reportedly said: give me a place to stand and a lever long enough, and I will move the Earth. He was mathematically correct, though the lever would need to be longer than the observable universe." }
    ],
    funFact: "A nail clipper is two levers working together, and a pair of scissors is two first-class levers sharing one fulcrum.",
    tryThis: "Try opening a tin of paint with a coin, then with a long screwdriver. Same force from your hand, wildly different result, purely because of lever length.",
    words: [
      { word: "Fulcrum", meaning: "The pivot point a lever turns on." },
      { word: "Effort", meaning: "The force you apply to a lever." },
      { word: "Load", meaning: "The weight or resistance the lever moves." },
      { word: "Mechanical advantage", meaning: "How much a machine multiplies your force." }
    ],
    questions: [
      { q: "What is a fulcrum?", choices: ["The pivot a lever turns on", "The load", "The effort", "The bar itself"], answer: 0 },
      { q: "What does a lever trade?", choices: ["Distance for force", "Force for heat", "Time for weight", "Energy for speed"], answer: 0 },
      { q: "Does a lever create energy?", choices: ["No, the total work stays the same", "Yes", "Only long levers do", "Only with a heavy load"], answer: 0 },
      { q: "Where is the fulcrum in a first-class lever?", choices: ["Between effort and load", "At the end", "Under the load", "Under the effort"], answer: 0 },
      { q: "Which is a second-class lever?", choices: ["A wheelbarrow", "Scissors", "Tweezers", "A seesaw"], answer: 0 },
      { q: "Which is a third-class lever?", choices: ["Tweezers", "A nutcracker", "A crowbar", "A seesaw"], answer: 0 },
      { q: "What class of lever is your forearm?", choices: ["Third", "First", "Second", "None"], answer: 0 },
      { q: "What does that arrangement sacrifice?", choices: ["Force, in exchange for speed and range", "Speed, for force", "Nothing", "Accuracy"], answer: 0 },
      { q: "When did Archimedes describe the principle?", choices: ["Third century BCE", "Third century CE", "Fifteenth century", "Nineteenth century"], answer: 0 },
      { q: "What is mechanical advantage?", choices: ["How much a machine multiplies your force", "The weight of a machine", "The speed of a lever", "The length of a bar"], answer: 0 }
    ]
  } },

  { id: "wheels", title: "Wheels and Axles", emoji: "🛞",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🛞➡️", text: "A wheel is round so it rolls. Rolling is much easier than dragging because only a tiny bit touches the ground at a time." },
      { art: "🛒🚲", text: "The stick through the middle is the axle. The wheel spins around the axle while the cart or the bike stays on top." },
      { art: "⚙️🎡", text: "Wheels are not just for going places. A doorknob, a tap, a ferris wheel and a gear are all wheels doing different jobs." }
    ],
    funFact: "Try pushing a heavy box across the floor, then put it on a skateboard. Same box, same you, totally different effort. That is the wheel!",
    tryThis: "Find five wheels in your home that are not on a car or a bike. Taps, doorknobs, and the dial on a washing machine all count.",
    questions: [
      { q: "Why does a wheel roll?", choices: ["Because it is round", "Because it is heavy", "Because it is shiny"], answer: 0 },
      { q: "What is the stick through the middle called?", choices: ["Axle", "Handle", "Spoke"], answer: 0 },
      { q: "Rolling is easier than...", choices: ["Dragging", "Sleeping", "Eating"], answer: 0 },
      { q: "Which one is a wheel doing a job?", choices: ["A doorknob", "A pillow", "A window"], answer: 0 },
      { q: "How much of a wheel touches the ground?", choices: ["Only a tiny bit", "All of it", "None"], answer: 0 },
      { q: "What spins around the axle?", choices: ["The wheel", "The road", "The sky"], answer: 0 },
      { q: "Which has wheels?", choices: ["A skateboard", "A book", "A hat"], answer: 0 },
      { q: "A ferris wheel is a...", choices: ["Wheel", "Lever", "Magnet"], answer: 0 },
      { q: "Would a square wheel roll well?", choices: ["No", "Yes", "Better"], answer: 0 },
      { q: "Wheels make moving heavy things...", choices: ["Easier", "Harder", "Impossible"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🛞⚙️", text: "The wheel and axle is one of the six simple machines. Because the wheel's rim travels further than the axle for the same rotation, a small force at the rim becomes a large force at the axle, or the reverse. That ratio is its mechanical advantage." },
      { art: "📉🔄", text: "Rolling beats sliding because rolling friction is far lower than sliding friction. A rolling wheel's contact patch is momentarily stationary against the ground, so surfaces are not dragged across each other at all." },
      { art: "⚙️🔗", text: "Gears are toothed wheels that transfer rotation between shafts. A small gear driving a large one trades speed for torque; the reverse trades torque for speed. Every bicycle gear change, car gearbox and clock mechanism is this trade being made deliberately." },
      { art: "🎯🌀", text: "A spinning wheel also resists changes to its axis, a property called angular momentum. That is what keeps a moving bicycle upright, stabilises a spinning top, and lets gyroscopes hold a direction in aircraft and phones." }
    ],
    funFact: "Bearings, the rings of balls inside a wheel hub, cut friction so effectively that a well-made bicycle wheel spun by hand can keep turning for several minutes.",
    tryThis: "Spin a bicycle wheel while holding the axle, then try to tilt it. The resistance you feel is angular momentum, and it is the same force keeping you upright when riding.",
    words: [
      { word: "Axle", meaning: "The shaft a wheel rotates around." },
      { word: "Torque", meaning: "Turning force." },
      { word: "Gear", meaning: "A toothed wheel that transfers rotation." },
      { word: "Angular momentum", meaning: "A spinning object's resistance to changing its axis." }
    ],
    questions: [
      { q: "Why does the wheel and axle multiply force?", choices: ["The rim travels further than the axle per rotation", "The wheel is heavier", "The axle is stronger", "Friction helps"], answer: 0 },
      { q: "Why does rolling beat sliding?", choices: ["Rolling friction is far lower", "Wheels are lighter", "Rolling uses gravity", "Sliding needs more power always"], answer: 0 },
      { q: "What is torque?", choices: ["Turning force", "Straight-line force", "Speed", "Weight"], answer: 0 },
      { q: "A small gear driving a large one trades...", choices: ["Speed for torque", "Torque for speed", "Weight for size", "Heat for motion"], answer: 0 },
      { q: "What is angular momentum?", choices: ["A spinning object's resistance to changing its axis", "The weight of a wheel", "The speed of a gear", "Friction in a bearing"], answer: 0 },
      { q: "What keeps a moving bicycle upright?", choices: ["Angular momentum of the wheels", "Gravity", "Air pressure", "The rider's weight alone"], answer: 0 },
      { q: "What do bearings do?", choices: ["Cut friction in a hub", "Add weight", "Transfer heat", "Hold air"], answer: 0 },
      { q: "Where are gyroscopes used?", choices: ["Aircraft and phones", "Only in toys", "Only in clocks", "Nowhere today"], answer: 0 },
      { q: "A rolling wheel's contact patch is...", choices: ["Momentarily stationary against the ground", "Always sliding", "Never touching", "Spinning fastest"], answer: 0 },
      { q: "Wheel and axle is one of how many simple machines?", choices: ["Six", "Three", "Ten", "Two"], answer: 0 }
    ]
  } },

  { id: "ramps", title: "Ramps", emoji: "⛷️",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "📦⛰️", text: "Lifting a heavy box straight up is hard. But pushing it up a slope is much easier!" },
      { art: "📏😊", text: "A slope like that is called a ramp. You have to push further, but each push is easier. That is a good trade!" },
      { art: "🛝♿", text: "Ramps are everywhere. A slide, a wheelchair ramp, a hill road that zigzags instead of going straight up." }
    ],
    funFact: "A screw is really a ramp wrapped around a stick! Look closely at the spiral groove. That is a very long gentle slope.",
    tryThis: "Lift a heavy book straight up to the sofa, then slide it up a propped-up tray. Which felt easier? You did the same job both times.",
    questions: [
      { q: "What is a slope for moving things called?", choices: ["A ramp", "A wheel", "A lever"], answer: 0 },
      { q: "Is pushing up a ramp easier or harder than lifting straight up?", choices: ["Easier", "Harder", "The same"], answer: 0 },
      { q: "With a ramp you push...", choices: ["Further but easier", "Less and harder", "Not at all"], answer: 0 },
      { q: "Which one is a ramp?", choices: ["A slide", "A wall", "A window"], answer: 0 },
      { q: "What is a screw really?", choices: ["A ramp wrapped around a stick", "A wheel", "A magnet"], answer: 0 },
      { q: "Why do mountain roads zigzag?", choices: ["To make a gentler ramp", "To look pretty", "To be longer for fun"], answer: 0 },
      { q: "A wheelchair ramp helps people...", choices: ["Get up without steps", "Go faster", "Stay dry"], answer: 0 },
      { q: "A steeper ramp is...", choices: ["Harder to push up", "Easier", "The same"], answer: 0 },
      { q: "Ramps make work feel...", choices: ["Easier", "Heavier", "Noisier"], answer: 0 },
      { q: "Is a ramp a machine?", choices: ["Yes, a simple one", "No", "Only if it moves"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "📐📦", text: "An inclined plane is a simple machine that reduces the force needed to raise a load, by increasing the distance over which you apply it. Work equals force times distance, so if the distance doubles, the required force halves. The energy spent is identical." },
      { art: "📉⚖️", text: "The gentler the slope, the less force needed and the further you travel. This is why mountain roads switchback rather than climbing directly, and why a loading ramp is long and shallow rather than short and steep." },
      { art: "🔩🪓", text: "Two other simple machines are inclined planes in disguise. A screw is an inclined plane wrapped helically around a cylinder, which is why turning it many times drives it a short way with enormous force. A wedge, like an axe or a knife, is a moving inclined plane that splits." },
      { art: "🏗️🗿", text: "Ancient builders relied on ramps heavily. The prevailing theory for Egyptian pyramid construction involves long earthen ramps, possibly spiralling around the structure, to raise blocks weighing over two tonnes without any lifting machinery at all." }
    ],
    funFact: "A standard wheelchair ramp is built at about a 1 in 12 gradient, meaning one unit of rise for every twelve of length, which cuts the required force to roughly a twelfth.",
    tryThis: "Pull a weight up a ramp with a spring scale at three different angles and record the force. Multiply each force by the ramp length. The products will be nearly equal, because work is conserved.",
    words: [
      { word: "Inclined plane", meaning: "A sloped surface used to raise loads with less force." },
      { word: "Work", meaning: "Force multiplied by the distance moved." },
      { word: "Wedge", meaning: "A moving inclined plane that splits or lifts." },
      { word: "Gradient", meaning: "How steep a slope is, as rise over length." }
    ],
    questions: [
      { q: "How does a ramp reduce the needed force?", choices: ["By increasing the distance you apply it over", "By reducing the load's weight", "By adding energy", "By reducing friction"], answer: 0 },
      { q: "What is work equal to?", choices: ["Force times distance", "Force divided by distance", "Distance divided by time", "Mass times speed"], answer: 0 },
      { q: "If the distance doubles, the force needed...", choices: ["Halves", "Doubles", "Stays the same", "Quadruples"], answer: 0 },
      { q: "Why do mountain roads switchback?", choices: ["To create a gentler gradient", "To add scenery", "To slow drivers", "To save land"], answer: 0 },
      { q: "What is a screw?", choices: ["An inclined plane wrapped around a cylinder", "A type of lever", "A wheel and axle", "A pulley"], answer: 0 },
      { q: "What is a wedge?", choices: ["A moving inclined plane", "A fixed pivot", "A toothed wheel", "A rope system"], answer: 0 },
      { q: "Which is a wedge?", choices: ["An axe", "A pulley", "A gear", "A spring"], answer: 0 },
      { q: "How did Egyptians likely raise pyramid blocks?", choices: ["Long earthen ramps", "Cranes", "Balloons", "Pulleys only"], answer: 0 },
      { q: "What gradient is a standard wheelchair ramp?", choices: ["About 1 in 12", "1 in 2", "1 in 50", "1 in 100"], answer: 0 },
      { q: "Does a ramp reduce the total energy needed?", choices: ["No, only the force at any moment", "Yes, by half", "Yes, entirely", "Yes, by a twelfth"], answer: 0 }
    ]
  } },

  { id: "pulleys", title: "Pulleys", emoji: "🏗️",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🏗️🪢", text: "A pulley is a wheel with a rope over it. Pull the rope down and the load goes up. Much easier than lifting!" },
      { art: "🚩⬆️", text: "A flagpole has a pulley at the top. You stand on the ground and pull down, and the flag climbs all the way up." },
      { art: "🪢🪢", text: "Use more than one pulley and lifting gets even easier. Big cranes have lots of them working together." }
    ],
    funFact: "Pulling down is easier than lifting up because you can use your own body weight to help. That is the clever trick of a pulley!",
    tryThis: "Hang a bag from a rope over a smooth broom handle held by two people. Pull down on the other end to lift the bag. You just built a pulley.",
    questions: [
      { q: "What is a pulley?", choices: ["A wheel with a rope over it", "A flat board", "A magnet"], answer: 0 },
      { q: "Pull the rope down and the load...", choices: ["Goes up", "Goes down", "Stays still"], answer: 0 },
      { q: "What has a pulley at the top?", choices: ["A flagpole", "A table", "A book"], answer: 0 },
      { q: "Why is pulling down easier?", choices: ["You can use your own weight", "It is magic", "Ropes are light"], answer: 0 },
      { q: "More pulleys make lifting...", choices: ["Easier", "Harder", "Impossible"], answer: 0 },
      { q: "What uses lots of pulleys?", choices: ["A crane", "A spoon", "A pillow"], answer: 0 },
      { q: "What goes over the pulley wheel?", choices: ["A rope", "Water", "Sand"], answer: 0 },
      { q: "Where do you stand to raise a flag?", choices: ["On the ground", "On the roof", "On a ladder"], answer: 0 },
      { q: "Is a pulley a simple machine?", choices: ["Yes", "No", "Only big ones"], answer: 0 },
      { q: "Pulleys help you lift things that are...", choices: ["Heavy", "Light only", "Invisible"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🪢🛞", text: "A single fixed pulley does not reduce the force needed at all; it only changes its direction, letting you pull down instead of lifting up. That is still valuable, because you can add your body weight to a downward pull." },
      { art: "🔢⬆️", text: "A movable pulley, attached to the load itself, genuinely halves the force. The load hangs on two rope sections, each carrying half the weight. The trade is that you must pull twice as much rope, since work is conserved." },
      { art: "🏗️🔗", text: "Combining fixed and movable pulleys creates a block and tackle. Four supporting rope sections mean a quarter of the force and four times the rope. Cranes, ship rigging, and lift mechanisms all use this to move loads far beyond human strength." },
      { art: "🛗⚖️", text: "A passenger lift uses a counterweight roughly equal to the car plus half a full load, hanging on the other side of the pulley. The motor then only has to move the difference, not the whole car, which is why lifts use surprisingly little power." }
    ],
    funFact: "Archimedes reportedly demonstrated compound pulleys by single-handedly dragging a fully loaded ship onto shore, to prove the principle to a sceptical king.",
    tryThis: "Lift a weight with a spring scale directly, then through two pulleys. The reading should roughly halve, and you will notice you pulled about twice the length of rope.",
    words: [
      { word: "Fixed pulley", meaning: "A pulley that changes force direction only." },
      { word: "Movable pulley", meaning: "A pulley attached to the load that halves the force." },
      { word: "Block and tackle", meaning: "A system combining several pulleys." },
      { word: "Counterweight", meaning: "A balancing weight on the other side of a system." }
    ],
    questions: [
      { q: "What does a single fixed pulley do?", choices: ["Changes the direction of force only", "Halves the force", "Doubles the load", "Removes friction"], answer: 0 },
      { q: "Why is that still useful?", choices: ["You can add body weight to a downward pull", "It is lighter", "It is faster", "It reduces the load"], answer: 0 },
      { q: "What does a movable pulley do?", choices: ["Halves the force needed", "Doubles the force", "Changes direction only", "Nothing"], answer: 0 },
      { q: "What is the trade with a movable pulley?", choices: ["You must pull twice as much rope", "The load gets heavier", "It is slower to set up", "Nothing"], answer: 0 },
      { q: "What is a block and tackle?", choices: ["A system combining several pulleys", "A single large pulley", "A type of rope", "A lever"], answer: 0 },
      { q: "Four supporting rope sections means...", choices: ["A quarter of the force and four times the rope", "Four times the force", "No change", "Half the force"], answer: 0 },
      { q: "What does a lift counterweight do?", choices: ["Balances the car so the motor moves only the difference", "Adds safety weight", "Holds the cable", "Slows descent"], answer: 0 },
      { q: "Who reportedly dragged a loaded ship with pulleys?", choices: ["Archimedes", "Newton", "Galileo", "Hero of Alexandria"], answer: 0 },
      { q: "Is work conserved in a pulley system?", choices: ["Yes, force falls but distance rises", "No, pulleys create energy", "Only in fixed pulleys", "Only with counterweights"], answer: 0 },
      { q: "Where are block and tackle systems used?", choices: ["Cranes and ship rigging", "Clocks", "Microscopes", "Radios"], answer: 0 }
    ]
  } },

  { id: "springs", title: "Springs and Bounce", emoji: "🦘",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🌀⬇️", text: "Squash a spring and let go. Boing! It jumps right back to its own shape. Springs like being their normal size." },
      { art: "🛏️🖊️", text: "Springs hide in lots of things. Inside your mattress, inside a clicky pen, inside a trampoline and a pogo stick." },
      { art: "🚗🕳️", text: "Cars have big springs. When a wheel goes over a bump, the spring squashes so YOU do not feel the bump so much." }
    ],
    funFact: "A trampoline works because the springs store your energy when you land and give it straight back when you bounce up.",
    tryThis: "Click a retractable pen open and closed and listen. The tiny spring inside is doing all the work. Ask a grown-up if you can look inside an old one.",
    questions: [
      { q: "What does a spring do when you let go?", choices: ["Jumps back to its shape", "Stays squashed", "Melts"], answer: 0 },
      { q: "Which one has springs inside?", choices: ["A mattress", "A book", "A plate"], answer: 0 },
      { q: "What is inside a clicky pen?", choices: ["A spring", "A magnet", "Water"], answer: 0 },
      { q: "Why do cars have springs?", choices: ["So you feel bumps less", "To look good", "To go faster"], answer: 0 },
      { q: "What makes a trampoline bounce?", choices: ["Springs", "Air", "Magnets"], answer: 0 },
      { q: "Springs store your...", choices: ["Energy", "Weight", "Colour"], answer: 0 },
      { q: "What sound does a spring make?", choices: ["Boing", "Splash", "Beep"], answer: 0 },
      { q: "A pogo stick uses a...", choices: ["Spring", "Wheel", "Magnet"], answer: 0 },
      { q: "When you squash a spring it wants to...", choices: ["Go back to normal", "Stay squashed", "Break"], answer: 0 },
      { q: "Springs give energy back when you...", choices: ["Let go", "Hold tight", "Look away"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🌀📏", text: "A spring obeys Hooke's Law: the force it pushes back with is proportional to how far you stretch or compress it. Pull it twice as far and it resists twice as hard. The constant linking the two is called the spring constant, written k." },
      { art: "⚡🔋", text: "Deforming a spring stores elastic potential energy. Release it and that energy converts to kinetic energy of motion. Nothing is created; the energy you put in during compression is what comes back out, minus a little lost as heat." },
      { art: "🚗〰️", text: "Car suspension pairs a spring with a damper. The spring absorbs the bump, but a spring alone would keep bouncing, so the damper converts that oscillation into heat through fluid forced past a piston. Spring plus damper equals one smooth motion." },
      { art: "⏱️⚖️", text: "Hooke's Law is why springs make good measuring instruments. A spring scale reads weight directly from extension. It also governs how clocks with balance springs keep time, and how a mattress or a diving board returns your energy." }
    ],
    funFact: "Hooke's Law only holds up to a point called the elastic limit. Stretch past it and the spring deforms permanently, which is why an over-stretched spring never quite recovers.",
    tryThis: "Hang increasing weights from a spring and measure the extension each time. Plot weight against extension. You should get a straight line, and its slope is the spring constant.",
    words: [
      { word: "Hooke's Law", meaning: "Force is proportional to how far a spring is stretched." },
      { word: "Spring constant", meaning: "How stiff a spring is, the k in Hooke's Law." },
      { word: "Elastic potential energy", meaning: "Energy stored in a stretched or compressed object." },
      { word: "Elastic limit", meaning: "The point past which a spring deforms permanently." }
    ],
    questions: [
      { q: "What does Hooke's Law state?", choices: ["Force is proportional to extension", "Force equals mass times acceleration", "Energy is conserved", "Springs never break"], answer: 0 },
      { q: "What is the spring constant?", choices: ["A measure of stiffness", "The weight of a spring", "The length when relaxed", "The maximum stretch"], answer: 0 },
      { q: "Pull a spring twice as far and it resists...", choices: ["Twice as hard", "Half as hard", "The same", "Four times as hard"], answer: 0 },
      { q: "What energy is stored in a compressed spring?", choices: ["Elastic potential energy", "Kinetic energy", "Thermal energy only", "Chemical energy"], answer: 0 },
      { q: "Why does car suspension need a damper as well?", choices: ["A spring alone would keep bouncing", "Springs are too weak", "To hold the wheel on", "To reduce weight"], answer: 0 },
      { q: "How does a damper work?", choices: ["It converts oscillation into heat via fluid and a piston", "It adds more springs", "It uses magnets", "It locks the spring"], answer: 0 },
      { q: "Why can a spring measure weight?", choices: ["Extension is proportional to force", "Springs are heavy", "Springs resist gravity", "Springs store weight"], answer: 0 },
      { q: "What is the elastic limit?", choices: ["The point past which deformation is permanent", "The maximum weight of a spring", "The rest length", "The stiffness"], answer: 0 },
      { q: "What happens to energy lost in a real spring?", choices: ["It becomes heat", "It disappears", "It becomes light", "It becomes mass"], answer: 0 },
      { q: "What keeps time in a mechanical watch?", choices: ["A balance spring", "A pendulum only", "A battery", "A magnet"], answer: 0 }
    ]
  } },

  { id: "balloons-air", title: "Balloons and Air Power", emoji: "🎈",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🎈💨", text: "Blow up a balloon and let it go. It zooms around the room! The air rushes out one way and the balloon shoots the other way." },
      { art: "↔️🚀", text: "That is a rule about pushing. Every push has a push back. Push air backwards, and you get pushed forwards. Rockets do exactly this!" },
      { art: "🪂🍃", text: "Air can slow things down too. Drop a flat piece of paper and it floats. Scrunch it up and it drops fast. Same paper!" }
    ],
    funFact: "A parachute works by catching lots of air. More air pushing up means a slower, safer fall.",
    tryThis: "Tape a straw to a balloon, thread string through the straw, stretch the string across the room, blow the balloon up and let go. A balloon rocket!",
    questions: [
      { q: "What happens when you let a balloon go?", choices: ["It zooms around", "It floats gently only", "It pops"], answer: 0 },
      { q: "Which way does the air rush?", choices: ["Out the back", "Into the balloon", "Nowhere"], answer: 0 },
      { q: "Push air backwards and you go...", choices: ["Forwards", "Backwards too", "Up"], answer: 0 },
      { q: "What else works that way?", choices: ["A rocket", "A book", "A chair"], answer: 0 },
      { q: "Which falls faster?", choices: ["Scrunched paper", "Flat paper", "They tie always"], answer: 0 },
      { q: "What does a parachute catch?", choices: ["Air", "Water", "Light"], answer: 0 },
      { q: "More air pushing up means...", choices: ["A slower fall", "A faster fall", "No fall"], answer: 0 },
      { q: "Every push has a...", choices: ["Push back", "Nap", "Colour"], answer: 0 },
      { q: "What is inside a blown-up balloon?", choices: ["Air", "Water", "Sand"], answer: 0 },
      { q: "Can air slow things down?", choices: ["Yes", "No", "Only at night"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🎈↔️", text: "A released balloon demonstrates Newton's third law. Compressed air escapes backwards through the neck, and the balloon experiences an equal and opposite force forwards. Nothing is pushing against the outside air; the reaction comes from expelling mass." },
      { art: "📊💨", text: "Air inside a balloon is under pressure, meaning its molecules are packed tighter and strike the walls more often. Pressure always pushes from high to low, which is why air rushes out the instant you open the neck." },
      { art: "🪂📉", text: "Air also resists movement through it. Drag depends on speed, surface area and shape. A flat sheet has huge area facing the airflow; scrunched into a ball it presents far less, so it falls much faster despite identical mass." },
      { art: "⚖️🍂", text: "Objects falling through air reach terminal velocity when drag equals weight and acceleration stops. A skydiver reaches about 200 km/h, or around 20 km/h with a parachute open. A mouse's terminal velocity is low enough that it can survive almost any fall." }
    ],
    funFact: "Hot air balloons rise because heating the air inside makes it less dense than the cooler air outside, so the whole balloon floats exactly the way a bubble rises in water.",
    tryThis: "Drop two identical sheets of paper, one flat and one crumpled, from the same height. Then drop a crumpled sheet against a book. The differences are all drag, not gravity.",
    words: [
      { word: "Drag", meaning: "Air resistance opposing movement." },
      { word: "Pressure", meaning: "Force spread over an area, higher when molecules are packed tighter." },
      { word: "Terminal velocity", meaning: "The steady speed where drag equals weight." },
      { word: "Density", meaning: "How much mass is packed into a volume." }
    ],
    questions: [
      { q: "Which law does a released balloon demonstrate?", choices: ["Newton's third law", "Hooke's Law", "The law of reflection", "Boyle's Law"], answer: 0 },
      { q: "Where does the forward force come from?", choices: ["Expelling air mass backwards", "Pushing on outside air", "Gravity", "Static charge"], answer: 0 },
      { q: "Which way does pressure push?", choices: ["From high to low", "From low to high", "Always downward", "Always upward"], answer: 0 },
      { q: "What does drag depend on?", choices: ["Speed, surface area and shape", "Colour and mass", "Mass only", "Temperature only"], answer: 0 },
      { q: "Why does flat paper fall slower than crumpled?", choices: ["More area faces the airflow", "It weighs less", "It is larger in mass", "Gravity is weaker on it"], answer: 0 },
      { q: "What is terminal velocity?", choices: ["The steady speed where drag equals weight", "The fastest possible speed", "The speed of sound", "Zero speed"], answer: 0 },
      { q: "Roughly what is a skydiver's terminal velocity?", choices: ["About 200 km/h", "About 50 km/h", "About 1,000 km/h", "About 20 km/h"], answer: 0 },
      { q: "Why can a mouse survive most falls?", choices: ["Its terminal velocity is low", "It has strong bones", "It flies", "It is light enough to float"], answer: 0 },
      { q: "Why does a hot air balloon rise?", choices: ["Heated air inside is less dense than outside air", "Hot air is lighter than nothing", "The fabric repels gravity", "The burner pushes down"], answer: 0 },
      { q: "What is density?", choices: ["Mass packed into a volume", "Weight of an object", "Force over area", "Speed of molecules"], answer: 0 }
    ]
  } },

  { id: "energy", title: "Energy Everywhere", emoji: "⚡",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "⚡🏃", text: "Energy is what makes things go. You need energy to run and jump. A car needs energy to drive. A lamp needs energy to shine." },
      { art: "🍎🔋", text: "Your energy comes from food. A car's comes from fuel. A torch's comes from a battery. Everything that moves got its energy from somewhere." },
      { art: "☀️🌱", text: "Almost all of it started at the sun. The sun feeds plants, plants feed us, and that is how sunshine ends up making you run around!" }
    ],
    funFact: "Energy never disappears. When you stop running, your energy turned into heat. That is why you feel hot after playing!",
    tryThis: "Rub your hands together fast for ten seconds. You just turned the energy from your breakfast into heat you can feel.",
    questions: [
      { q: "What does energy do?", choices: ["Makes things go", "Makes things blue", "Makes things quiet"], answer: 0 },
      { q: "Where does your energy come from?", choices: ["Food", "Water only", "Sleep only"], answer: 0 },
      { q: "Where does a torch get energy?", choices: ["A battery", "The wind", "The floor"], answer: 0 },
      { q: "Where does almost all energy start?", choices: ["The sun", "The moon", "The sea"], answer: 0 },
      { q: "What feeds the plants?", choices: ["Sunshine", "Rocks", "Wind"], answer: 0 },
      { q: "Does energy disappear?", choices: ["No, it changes", "Yes, forever", "Only at night"], answer: 0 },
      { q: "Why do you feel hot after playing?", choices: ["Energy turned into heat", "You grew", "The sun moved"], answer: 0 },
      { q: "A car gets energy from...", choices: ["Fuel", "Music", "Paint"], answer: 0 },
      { q: "You need energy to...", choices: ["Run and jump", "Sleep only", "Do nothing"], answer: 0 },
      { q: "Rubbing your hands makes...", choices: ["Heat", "Light", "Sound only"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "⚡🔄", text: "Energy is the capacity to do work. It comes in forms: kinetic, the energy of motion; potential, stored by position; thermal, the jiggling of particles; chemical, stored in bonds; plus electrical, light, sound and nuclear." },
      { art: "📜🚫", text: "The law of conservation of energy states that energy cannot be created or destroyed, only converted. A ball you lift gains gravitational potential energy; dropped, it becomes kinetic; on landing it becomes sound and heat. The total never changes." },
      { art: "🌱☀️", text: "Nearly all energy on Earth traces to the Sun. Photosynthesis stores solar energy as chemical bonds in plants. Animals eat plants. Coal and oil are ancient plants compressed for millions of years, so burning them releases sunlight captured before dinosaurs existed." },
      { art: "🌡️📉", text: "Every conversion loses some energy as low-grade heat that cannot be recovered usefully. This is why no machine is 100 percent efficient, why perpetual motion is impossible, and why energy problems are really about useful energy, not total energy." }
    ],
    funFact: "A typical incandescent light bulb converts only about 5 percent of its electricity into light. The other 95 percent becomes heat, which is why LED bulbs cut energy use so dramatically.",
    tryThis: "Trace the energy in one thing you did today back to the Sun, step by step. Cycling to school: muscles, from food, from a plant, from photosynthesis, from sunlight.",
    words: [
      { word: "Kinetic energy", meaning: "The energy of motion." },
      { word: "Potential energy", meaning: "Energy stored by position or state." },
      { word: "Conservation of energy", meaning: "Energy cannot be created or destroyed, only converted." },
      { word: "Efficiency", meaning: "How much input energy becomes useful output." }
    ],
    questions: [
      { q: "What is energy?", choices: ["The capacity to do work", "A type of force", "A kind of matter", "A measure of speed"], answer: 0 },
      { q: "What is kinetic energy?", choices: ["The energy of motion", "Stored energy", "Heat energy", "Light energy"], answer: 0 },
      { q: "What does conservation of energy state?", choices: ["Energy is converted, never created or destroyed", "Energy runs out", "Energy can be made", "Energy is always heat"], answer: 0 },
      { q: "A lifted ball gains what?", choices: ["Gravitational potential energy", "Kinetic energy", "Chemical energy", "Nuclear energy"], answer: 0 },
      { q: "What stores solar energy in plants?", choices: ["Photosynthesis", "Respiration", "Evaporation", "Combustion"], answer: 0 },
      { q: "What are coal and oil?", choices: ["Ancient plants compressed over millions of years", "Types of rock only", "Minerals from volcanoes", "Frozen gases"], answer: 0 },
      { q: "What is lost in every energy conversion?", choices: ["Some low-grade heat", "Some mass", "Some light", "Nothing"], answer: 0 },
      { q: "Why is perpetual motion impossible?", choices: ["Every conversion loses usable energy", "Machines wear out", "Gravity stops it", "Friction can be removed"], answer: 0 },
      { q: "What efficiency does an incandescent bulb have for light?", choices: ["About 5 percent", "About 50 percent", "About 95 percent", "About 30 percent"], answer: 0 },
      { q: "What is efficiency?", choices: ["How much input energy becomes useful output", "Total energy used", "Speed of conversion", "Cost per unit"], answer: 0 }
    ]
  } },

  { id: "electricity", title: "Electricity", emoji: "🔌",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "⚡🔌", text: "Electricity makes lights glow, fridges hum and TVs work. It travels along wires into your home." },
      { art: "🔄💡", text: "Electricity needs a complete loop to flow, called a circuit. If there is a gap anywhere, nothing works. A switch just makes a gap on purpose!" },
      { art: "⚠️🚫", text: "Electricity from a wall socket is very strong and dangerous. Never poke anything into a socket. Batteries are the safe way to explore." }
    ],
    funFact: "Flicking a light switch closes the gap in the circuit, and the bulb lights up almost instantly. Electricity moves incredibly fast.",
    tryThis: "With a grown-up, connect a small bulb to a battery with two wires. Now lift one wire off. The gap stops everything. That is a switch.",
    questions: [
      { q: "What does electricity do?", choices: ["Makes lights and machines work", "Makes rain", "Makes sand"], answer: 0 },
      { q: "What does electricity travel along?", choices: ["Wires", "Ropes", "Straws"], answer: 0 },
      { q: "What is a complete loop called?", choices: ["A circuit", "A circle race", "A tunnel"], answer: 0 },
      { q: "What happens if there is a gap?", choices: ["Nothing works", "It works better", "It gets louder"], answer: 0 },
      { q: "What does a switch do?", choices: ["Makes a gap on purpose", "Adds power", "Makes light"], answer: 0 },
      { q: "Is a wall socket dangerous?", choices: ["Yes, very", "No", "Only when wet"], answer: 0 },
      { q: "What should you never poke into a socket?", choices: ["Anything at all", "Only metal", "Only water"], answer: 0 },
      { q: "What is the safe way to explore electricity?", choices: ["Batteries", "Sockets", "Lightning"], answer: 0 },
      { q: "How fast does electricity move?", choices: ["Incredibly fast", "Very slowly", "Once a day"], answer: 0 },
      { q: "What hums using electricity?", choices: ["A fridge", "A pillow", "A book"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "⚡🔬", text: "Electricity is the flow of electric charge, usually electrons moving through a conductor like copper. Materials that let charge flow easily are conductors; those that resist strongly are insulators, which is why wires are copper wrapped in plastic." },
      { art: "📊🔢", text: "Three quantities describe a circuit. Voltage is the push, measured in volts. Current is the rate of flow, in amps. Resistance opposes flow, in ohms. Ohm's Law connects them: voltage equals current times resistance." },
      { art: "🔗🪜", text: "Components can be wired in series, one after another on a single path, so a break anywhere stops everything. Or in parallel, on separate branches, so each keeps working independently. Your home is wired in parallel, which is why one dead bulb does not darken the house." },
      { art: "⚠️🌍", text: "Electricity is generated mostly by spinning turbines, driven by steam from burning fuel or nuclear heat, or directly by wind and falling water. Solar panels skip the turbine entirely, converting light to current in silicon. Transmission at very high voltage reduces losses over long distances." }
    ],
    funFact: "Individual electrons drift through a wire remarkably slowly, a few centimetres per minute. The electrical signal races along at near light speed, like a push travelling down a line of marbles.",
    tryThis: "Build a simple circuit with a battery, bulb and wires, then add a second bulb in series and again in parallel. The brightness difference shows exactly how the two arrangements differ.",
    words: [
      { word: "Conductor", meaning: "A material that lets electric charge flow easily." },
      { word: "Voltage", meaning: "The electrical push, measured in volts." },
      { word: "Current", meaning: "The rate of charge flow, measured in amps." },
      { word: "Ohm's Law", meaning: "Voltage equals current times resistance." }
    ],
    questions: [
      { q: "What is electricity?", choices: ["The flow of electric charge", "A type of heat", "A magnetic field", "A form of light"], answer: 0 },
      { q: "What usually carries the charge in a wire?", choices: ["Electrons", "Protons", "Neutrons", "Atoms as a whole"], answer: 0 },
      { q: "What is an insulator?", choices: ["A material that resists charge flow", "A material that conducts well", "A type of battery", "A switch"], answer: 0 },
      { q: "What does voltage measure?", choices: ["The electrical push", "The rate of flow", "The resistance", "The power"], answer: 0 },
      { q: "What does Ohm's Law state?", choices: ["Voltage equals current times resistance", "Current equals voltage times resistance", "Power equals voltage plus current", "Resistance equals voltage plus current"], answer: 0 },
      { q: "What happens if a series circuit breaks?", choices: ["Everything stops", "Only one part stops", "Nothing changes", "It gets brighter"], answer: 0 },
      { q: "How is your home wired?", choices: ["In parallel", "In series", "Randomly", "Both equally"], answer: 0 },
      { q: "How is most electricity generated?", choices: ["By spinning turbines", "By solar panels only", "By batteries", "By chemical reaction"], answer: 0 },
      { q: "How do solar panels differ?", choices: ["They convert light directly to current without a turbine", "They spin faster", "They use steam", "They store heat"], answer: 0 },
      { q: "How fast do individual electrons drift?", choices: ["A few centimetres per minute", "At light speed", "At the speed of sound", "Instantly"], answer: 0 }
    ]
  } },

  { id: "static", title: "Static Electricity", emoji: "🎈",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🎈💇", text: "Rub a balloon on your hair and lift it up. Your hair follows it! The balloon has picked up static electricity." },
      { art: "🧦⚡", text: "Sometimes you touch a door handle and get a little zap. That is static jumping from you to the handle. It is surprising but harmless." },
      { art: "🧲🧻", text: "A rubbed balloon can pick up tiny bits of paper and stick to a wall. Static is a pulling force you cannot see." }
    ],
    funFact: "Lightning is static electricity, just enormous. Clouds build up a charge and it jumps all at once in a giant spark.",
    tryThis: "Tear up tiny bits of tissue paper. Rub a balloon on your jumper and hold it just above them. Watch them leap up to the balloon!",
    questions: [
      { q: "What happens if you rub a balloon on your hair?", choices: ["Your hair follows it", "Your hair falls out", "Nothing"], answer: 0 },
      { q: "What is that called?", choices: ["Static electricity", "Gravity", "Friction heat"], answer: 0 },
      { q: "What is the little zap from a door handle?", choices: ["Static jumping", "A battery", "A magnet"], answer: 0 },
      { q: "Is that zap harmful?", choices: ["No, harmless", "Yes, very", "It burns"], answer: 0 },
      { q: "What can a rubbed balloon pick up?", choices: ["Tiny bits of paper", "Bricks", "Water only"], answer: 0 },
      { q: "Can a rubbed balloon stick to a wall?", choices: ["Yes", "No", "Only if wet"], answer: 0 },
      { q: "What is lightning?", choices: ["Enormous static electricity", "A cloud on fire", "Sunlight"], answer: 0 },
      { q: "Can you see static?", choices: ["No, only what it does", "Yes, it is blue", "Yes, it glows"], answer: 0 },
      { q: "What builds up a charge in the sky?", choices: ["Clouds", "The moon", "Birds"], answer: 0 },
      { q: "Static is a kind of...", choices: ["Pulling force", "Sound", "Colour"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "⚛️➕➖", text: "Atoms normally have equal positive protons and negative electrons, making them neutral. Rubbing two materials transfers electrons from one to the other, leaving one negatively charged and the other positively charged. That imbalance is static electricity." },
      { art: "🧲↔️", text: "Opposite charges attract and like charges repel. A negatively charged balloon attracts your hair because your hair has lost electrons and is positive. Hair strands repel each other because they now all share the same charge, which is why it stands up." },
      { art: "⚡🚪", text: "Charge builds until it finds a path to equalise, then discharges suddenly. Walking on carpet in rubber soles can build thousands of volts, but the current is tiny and brief, which is why the shock startles but does no harm." },
      { art: "🌩️🏭", text: "Static has real consequences. Lightning is charge separation in storm clouds discharging with billions of volts. Static also ruins computer chips, which is why technicians wear grounding straps, and it is used deliberately in photocopiers and spray painting to make particles stick evenly." }
    ],
    funFact: "The order in which materials give up electrons is called the triboelectric series. Human hair and glass give electrons away readily; rubber and PVC grab them, which is why balloons work so well.",
    tryThis: "Run a charged comb near a thin stream of tap water. The stream bends toward it, because water molecules rotate to face the charge. Nothing touches the water at all.",
    words: [
      { word: "Static electricity", meaning: "A build-up of electric charge on a surface." },
      { word: "Electron", meaning: "The negatively charged particle that moves between materials." },
      { word: "Discharge", meaning: "The sudden equalising of built-up charge." },
      { word: "Grounding", meaning: "Providing a safe path for charge to escape to Earth." }
    ],
    questions: [
      { q: "What makes an atom neutral?", choices: ["Equal protons and electrons", "More protons", "More electrons", "No charge at all"], answer: 0 },
      { q: "What does rubbing two materials do?", choices: ["Transfers electrons between them", "Creates new charge", "Destroys charge", "Heats them only"], answer: 0 },
      { q: "What happens between like charges?", choices: ["They repel", "They attract", "Nothing", "They combine"], answer: 0 },
      { q: "Why does charged hair stand up?", choices: ["Strands share the same charge and repel", "It dries out", "It gets lighter", "Gravity weakens"], answer: 0 },
      { q: "Why is a static shock harmless?", choices: ["The current is tiny and brief", "The voltage is low", "It is not real electricity", "Skin blocks it"], answer: 0 },
      { q: "How many volts can walking on carpet build?", choices: ["Thousands", "About ten", "About one", "Millions"], answer: 0 },
      { q: "What is lightning?", choices: ["Charge separation in clouds discharging", "Burning gas", "Reflected sunlight", "Magnetic energy"], answer: 0 },
      { q: "Why do chip technicians wear grounding straps?", choices: ["Static can destroy computer chips", "To prevent burns", "For identification", "To reduce dust"], answer: 0 },
      { q: "Where is static used deliberately?", choices: ["Photocopiers and spray painting", "Refrigerators", "Car engines", "Microphones"], answer: 0 },
      { q: "What is the triboelectric series?", choices: ["The order in which materials give up electrons", "A list of conductors", "A type of circuit", "A charging device"], answer: 0 }
    ]
  } },

  { id: "batteries", title: "Batteries", emoji: "🔋",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🔋⚡", text: "A battery is a little box that stores energy. It can sit in a drawer for months and still work when you need it." },
      { art: "➕➖", text: "Every battery has a plus end and a minus end. They must go in the right way round, or the toy will not work at all." },
      { art: "♻️🗑️", text: "Old batteries have chemicals inside that are bad for the ground. Never put them in the normal bin. They go to a special recycling place." }
    ],
    funFact: "The energy in a battery is stored as chemicals. When you switch a toy on, a chemical reaction starts and electricity flows out.",
    tryThis: "Look at three different batteries in your home. Find the plus and minus signs on each. Notice how different sizes power different things.",
    questions: [
      { q: "What does a battery do?", choices: ["Stores energy", "Makes noise", "Makes light on its own"], answer: 0 },
      { q: "How many ends does a battery have?", choices: ["Two, plus and minus", "One", "Four"], answer: 0 },
      { q: "What happens if you put it in backwards?", choices: ["It will not work", "It works better", "It explodes always"], answer: 0 },
      { q: "Where is battery energy stored?", choices: ["As chemicals", "As water", "As air"], answer: 0 },
      { q: "Where do old batteries go?", choices: ["Special recycling", "The normal bin", "The garden"], answer: 0 },
      { q: "Why not the normal bin?", choices: ["Chemicals harm the ground", "They are heavy", "They are noisy"], answer: 0 },
      { q: "Can a battery wait in a drawer?", choices: ["Yes, for months", "No, minutes only", "Never"], answer: 0 },
      { q: "What starts when you switch a toy on?", choices: ["A chemical reaction", "A fire", "A song"], answer: 0 },
      { q: "Do different sizes power different things?", choices: ["Yes", "No", "All the same"], answer: 0 },
      { q: "What symbols mark the ends?", choices: ["Plus and minus", "Up and down", "Left and right"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🔋⚗️", text: "A battery converts chemical energy into electrical energy. Inside are two electrodes of different materials in an electrolyte. A chemical reaction strips electrons from one electrode, and they travel through your circuit to reach the other, powering whatever is in between." },
      { art: "🐸⚡", text: "Alessandro Volta built the first true battery in 1800, stacking zinc and copper discs separated by brine-soaked cloth. It grew from an argument with Luigi Galvani, who thought twitching frog legs proved animal electricity. Volta proved the metals were doing it." },
      { art: "🔄📱", text: "Primary batteries, like most alkaline cells, run their reaction one way and are discarded. Secondary batteries, like lithium-ion in phones and cars, run it in reverse when charged. Lithium-ion dominates because lithium is very light and stores a lot of energy per kilogram." },
      { art: "♻️⚠️", text: "Batteries contain heavy metals and reactive chemicals that leach into soil and water in landfill. Lithium cells can also ignite if crushed. Recycling recovers lithium, cobalt and nickel, which matters increasingly as electric vehicles scale up demand." }
    ],
    funFact: "The volt is named after Volta. Galvani got the word galvanise. Both men were partly right, and their argument produced the entire field of electrochemistry.",
    tryThis: "Make a lemon battery: push a copper coin and a galvanised nail into a lemon and touch a multimeter to each. You will read a real voltage, produced exactly as Volta's pile was.",
    words: [
      { word: "Electrode", meaning: "A conductor where the chemical reaction happens." },
      { word: "Electrolyte", meaning: "The substance between electrodes that carries charge." },
      { word: "Primary battery", meaning: "A single-use battery that cannot be recharged." },
      { word: "Secondary battery", meaning: "A rechargeable battery." }
    ],
    questions: [
      { q: "What does a battery convert?", choices: ["Chemical energy into electrical energy", "Light into heat", "Heat into motion", "Electricity into chemicals only"], answer: 0 },
      { q: "What sits between the two electrodes?", choices: ["An electrolyte", "A magnet", "A vacuum", "A resistor"], answer: 0 },
      { q: "Who built the first true battery?", choices: ["Alessandro Volta", "Luigi Galvani", "Michael Faraday", "Thomas Edison"], answer: 0 },
      { q: "In what year?", choices: ["1800", "1700", "1900", "1850"], answer: 0 },
      { q: "What did Volta stack?", choices: ["Zinc and copper discs with brine-soaked cloth", "Iron and lead plates", "Glass and wood", "Silver and gold"], answer: 0 },
      { q: "What did Galvani believe caused frog legs to twitch?", choices: ["Animal electricity", "The metals", "Heat", "Magnetism"], answer: 0 },
      { q: "What is a primary battery?", choices: ["Single-use, not rechargeable", "Rechargeable", "Very large", "Solar powered"], answer: 0 },
      { q: "Why does lithium-ion dominate?", choices: ["Lithium is light and stores much energy per kilogram", "It is cheapest", "It never degrades", "It is safest"], answer: 0 },
      { q: "Why must batteries be recycled?", choices: ["Heavy metals leach into soil and water", "They are heavy", "They take up space", "They smell"], answer: 0 },
      { q: "What word came from Galvani's name?", choices: ["Galvanise", "Volt", "Ampere", "Ohm"], answer: 0 }
    ]
  } },

  { id: "how-planes-fly", title: "How Planes Fly", emoji: "✈️",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "✈️🌤️", text: "A plane is very heavy, but it still flies. How? It is all about the wings and going fast." },
      { art: "🪶💨", text: "A wing is curved on top and flatter underneath. As the plane rushes forward, the air pushes the wing upward. That push is called lift." },
      { art: "🦅🔄", text: "Birds do the same thing! Their wings are curved too. They flap to go forward, then glide on the lift." }
    ],
    funFact: "A plane must go fast before it can take off. That is why it races down the runway first, to get enough air rushing over the wings.",
    tryThis: "Hold a strip of paper just under your lips and blow hard across the top. The paper lifts up! That is the same idea as a wing.",
    questions: [
      { q: "What helps a plane fly?", choices: ["Its wings and speed", "Its colour", "Its seats"], answer: 0 },
      { q: "What shape is a wing?", choices: ["Curved on top, flatter underneath", "Flat both sides", "Round like a ball"], answer: 0 },
      { q: "What is the upward push called?", choices: ["Lift", "Drop", "Weight"], answer: 0 },
      { q: "What else has curved wings?", choices: ["Birds", "Fish", "Cars"], answer: 0 },
      { q: "Why does a plane race down the runway?", choices: ["To go fast enough for lift", "To warm up", "To make noise"], answer: 0 },
      { q: "What rushes over the wings?", choices: ["Air", "Water", "Sand"], answer: 0 },
      { q: "Do birds glide?", choices: ["Yes", "No", "Only at night"], answer: 0 },
      { q: "Is a plane heavy?", choices: ["Yes, very", "No, light as paper", "It has no weight"], answer: 0 },
      { q: "What happens if you blow over a paper strip?", choices: ["It lifts up", "It falls down", "It tears"], answer: 0 },
      { q: "Birds flap to go...", choices: ["Forward", "Backward", "Down"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "✈️4️⃣", text: "Four forces act on an aircraft: lift upward, weight downward, thrust forward from the engines, and drag backward from the air. Level flight at constant speed means lift equals weight and thrust equals drag, all in balance." },
      { art: "🪽📐", text: "Lift comes from the wing deflecting air downward. By Newton's third law, pushing air down pushes the wing up. The aerofoil shape and the angle of attack both contribute, and contrary to a common textbook claim, air does not need to travel equal distances over each surface." },
      { art: "⚠️📉", text: "Increasing the angle of attack increases lift, but only up to a point. Past roughly 15 degrees the airflow separates from the upper surface and lift collapses. That is a stall, and recovering from it means lowering the nose to reattach the airflow, which feels counterintuitive." },
      { art: "🎛️🔄", text: "Control surfaces steer the aircraft on three axes: ailerons on the wings roll it, the elevator on the tail pitches the nose up or down, and the rudder yaws it left or right. Pilots coordinate all three, since rolling alone makes a plane turn but also lose height." }
    ],
    funFact: "The Wright brothers' key insight was not the wing but control. Others had built gliders that flew; the Wrights worked out how to steer one reliably in three axes.",
    tryThis: "Hold your flat hand out of a moving car window, angled slightly up, then slightly more. Feel the lift rise, then feel it break down as the angle grows. That is a stall in your palm.",
    words: [
      { word: "Lift", meaning: "The upward force generated by a wing." },
      { word: "Thrust", meaning: "The forward force from engines or propellers." },
      { word: "Angle of attack", meaning: "The angle between the wing and the oncoming air." },
      { word: "Stall", meaning: "Loss of lift when airflow separates from the wing." }
    ],
    questions: [
      { q: "What are the four forces on an aircraft?", choices: ["Lift, weight, thrust and drag", "Lift, gravity, speed and heat", "Push, pull, twist and turn", "Force, mass, energy and power"], answer: 0 },
      { q: "In level flight at constant speed, lift equals...", choices: ["Weight", "Thrust", "Drag", "Zero"], answer: 0 },
      { q: "How does a wing generate lift?", choices: ["By deflecting air downward", "By being lighter than air", "By spinning", "By heating the air"], answer: 0 },
      { q: "Which law explains that?", choices: ["Newton's third law", "Hooke's Law", "Ohm's Law", "The law of reflection"], answer: 0 },
      { q: "What is the angle of attack?", choices: ["The angle between wing and oncoming air", "The climb angle", "The turn angle", "The wing's curve"], answer: 0 },
      { q: "What happens past roughly 15 degrees angle of attack?", choices: ["Airflow separates and lift collapses", "Lift keeps rising", "Drag disappears", "The engine stops"], answer: 0 },
      { q: "How do you recover from a stall?", choices: ["Lower the nose to reattach airflow", "Raise the nose", "Add more angle", "Cut the engines"], answer: 0 },
      { q: "What do ailerons do?", choices: ["Roll the aircraft", "Pitch the nose", "Yaw left and right", "Slow the aircraft"], answer: 0 },
      { q: "What does the elevator control?", choices: ["Pitch, nose up or down", "Roll", "Yaw", "Speed"], answer: 0 },
      { q: "What was the Wright brothers' key insight?", choices: ["Reliable three-axis control", "A better wing shape", "A lighter engine", "A longer runway"], answer: 0 }
    ]
  } },

  { id: "rockets", title: "Rockets", emoji: "🚀",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🚀🔥", text: "A rocket pushes hot gas downward really hard, and that pushes the rocket upward. Just like a balloon flying around the room!" },
      { art: "🌌🚫", text: "There is no air in space, so a rocket cannot push against anything. It does not need to! It pushes against its own gas." },
      { art: "🧱📦", text: "Rockets are built in stages, like stacked boxes. When the bottom part runs out of fuel it drops away, so the rest is lighter." }
    ],
    funFact: "A rocket has to travel about 28,000 kilometres per hour to stay in orbit around Earth. That is roughly ten times faster than a jet plane!",
    tryThis: "Blow up a balloon and let it go, then do it again with a small paper clip taped on. It flies differently, because you changed its weight.",
    questions: [
      { q: "What does a rocket push downward?", choices: ["Hot gas", "Water", "Sand"], answer: 0 },
      { q: "Which way does the rocket go?", choices: ["Upward", "Downward too", "Sideways"], answer: 0 },
      { q: "What flies the same way?", choices: ["A balloon let go", "A kite", "A paper plane"], answer: 0 },
      { q: "Is there air in space?", choices: ["No", "Yes, lots", "Only near the moon"], answer: 0 },
      { q: "What does a rocket push against?", choices: ["Its own gas", "The air", "The ground"], answer: 0 },
      { q: "How are rockets built?", choices: ["In stages", "In one solid piece", "From paper"], answer: 0 },
      { q: "Why do stages drop away?", choices: ["To make the rocket lighter", "For fun", "To land"], answer: 0 },
      { q: "How fast must a rocket go to orbit?", choices: ["About 28,000 km per hour", "About 100 km per hour", "About 500 km per hour"], answer: 0 },
      { q: "That is about how many times faster than a jet?", choices: ["Ten", "Two", "One hundred"], answer: 0 },
      { q: "Where do rockets go?", choices: ["Space", "Underwater", "Underground"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🚀↔️", text: "Rockets work by Newton's third law. Burning propellant produces gas expelled at enormous speed through a nozzle, and the reaction drives the rocket the opposite way. Because the thrust comes from expelling mass, a rocket works perfectly in vacuum, unlike a jet engine which needs air." },
      { art: "⛽📉", text: "The core problem is that fuel has mass, and carrying more fuel means needing more fuel to lift it. This is why rockets are staged: once a stage is empty, the dead weight is jettisoned so the remaining engines accelerate far less mass." },
      { art: "🌍🔄", text: "Reaching orbit is not about height but speed. You must travel sideways fast enough, roughly 28,000 km/h, that as you fall toward Earth the ground curves away beneath you at the same rate. Orbit is really continuous falling that keeps missing." },
      { art: "👨‍🚀🪐", text: "Escape velocity, about 40,000 km/h, is the speed needed to leave Earth's gravity entirely. Apollo reached it in 1969. Modern rockets increasingly land their first stages upright for reuse, which has cut launch costs dramatically." }
    ],
    funFact: "Konstantin Tsiolkovsky worked out the mathematics of staged rocketry in 1903, decades before any rocket flew, using nothing but pencil and paper.",
    tryThis: "Look up the mass of a Saturn V at launch versus the mass that returned. About 3,000 tonnes left; under 6 tonnes came back. Almost all of it was fuel and discarded structure.",
    words: [
      { word: "Propellant", meaning: "The fuel and oxidiser a rocket burns." },
      { word: "Staging", meaning: "Dropping empty sections to shed dead weight." },
      { word: "Orbit", meaning: "Falling around a body fast enough to keep missing it." },
      { word: "Escape velocity", meaning: "The speed needed to leave a body's gravity entirely." }
    ],
    questions: [
      { q: "Which law do rockets work by?", choices: ["Newton's third law", "Hooke's Law", "Ohm's Law", "Boyle's Law"], answer: 0 },
      { q: "Why do rockets work in a vacuum?", choices: ["Thrust comes from expelling mass, not pushing air", "Space has hidden air", "Gravity helps", "They use magnets"], answer: 0 },
      { q: "Why is carrying fuel a problem?", choices: ["Fuel has mass, so more fuel needs more fuel", "Fuel is expensive", "Fuel is unstable", "Fuel takes space"], answer: 0 },
      { q: "Why are rockets staged?", choices: ["To jettison dead weight once a stage empties", "To look impressive", "For safety only", "To slow down"], answer: 0 },
      { q: "What does reaching orbit really require?", choices: ["Enough sideways speed", "Enough height", "Enough fuel weight", "Enough engines"], answer: 0 },
      { q: "Roughly what orbital speed is needed?", choices: ["28,000 km/h", "2,800 km/h", "280,000 km/h", "1,000 km/h"], answer: 0 },
      { q: "What is orbit best described as?", choices: ["Continuous falling that keeps missing", "Floating above gravity", "Being pushed outward", "Zero gravity"], answer: 0 },
      { q: "What is escape velocity from Earth?", choices: ["About 40,000 km/h", "About 28,000 km/h", "About 5,000 km/h", "About 100,000 km/h"], answer: 0 },
      { q: "Who worked out staged rocketry mathematics in 1903?", choices: ["Konstantin Tsiolkovsky", "Robert Goddard", "Wernher von Braun", "Isaac Newton"], answer: 0 },
      { q: "Why do modern rockets land first stages upright?", choices: ["Reuse cuts launch costs", "It looks better", "It is required by law", "To save fuel in flight"], answer: 0 }
    ]
  } },

  { id: "waves", title: "Waves", emoji: "〰️",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🌊〰️", text: "Drop a stone in a puddle and rings spread out. Those are waves! Waves carry energy from one place to another." },
      { art: "🦆⬆️⬇️", text: "Here is the surprise. The water does not travel with the wave. A duck sitting on the sea just bobs up and down as waves pass under." },
      { art: "🔊🌈", text: "Sound is a wave you hear. Light is a wave you see. Waves are everywhere, even when you cannot spot them." }
    ],
    funFact: "When you do a wave at a stadium, nobody moves seats. People just stand and sit. The wave travels, but the people stay put. Exactly like water!",
    tryThis: "Tie a skipping rope to a door handle and flick one end. Watch the wave run along the rope and back. The rope stays where it is.",
    questions: [
      { q: "What do waves carry?", choices: ["Energy", "Water only", "Sand"], answer: 0 },
      { q: "What happens when you drop a stone in a puddle?", choices: ["Rings spread out", "Nothing", "It gets bigger"], answer: 0 },
      { q: "Does the water travel with the wave?", choices: ["No, it bobs up and down", "Yes, all of it", "Only at night"], answer: 0 },
      { q: "What does a duck on the sea do?", choices: ["Bobs up and down", "Travels far", "Sinks"], answer: 0 },
      { q: "Sound is a wave you...", choices: ["Hear", "See", "Taste"], answer: 0 },
      { q: "Light is a wave you...", choices: ["See", "Hear", "Smell"], answer: 0 },
      { q: "In a stadium wave, do people change seats?", choices: ["No", "Yes", "They run"], answer: 0 },
      { q: "What travels in a stadium wave?", choices: ["The wave", "The people", "The seats"], answer: 0 },
      { q: "A wave on a rope runs...", choices: ["Along it and back", "Nowhere", "Off the end forever"], answer: 0 },
      { q: "Are waves everywhere?", choices: ["Yes", "No", "Only in the sea"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "〰️📊", text: "A wave transfers energy without transferring matter. Four measurements describe one: wavelength, the distance between peaks; frequency, peaks passing per second; amplitude, the height of each peak; and speed, which equals wavelength times frequency." },
      { art: "↔️⬆️", text: "Transverse waves oscillate perpendicular to their direction of travel, like a rope flick or light. Longitudinal waves oscillate along the direction of travel as compressions and rarefactions, like sound. Water waves are a mix of both." },
      { art: "🪞🌀", text: "Waves reflect off barriers, refract when they change speed entering a new medium, diffract by spreading around edges and through gaps, and interfere when they overlap. Two peaks meeting reinforce; a peak meeting a trough cancels." },
      { art: "🎧🌈", text: "Interference has practical uses. Noise-cancelling headphones generate an inverted sound wave to cancel incoming noise. The colours in a soap bubble come from light waves interfering after reflecting off the front and back of the film." }
    ],
    funFact: "Tsunamis have wavelengths over 100 kilometres but only about a metre of height in deep ocean, which is why ships barely notice them until they reach shallow water and pile up.",
    tryThis: "Drop two stones into still water a short distance apart and watch where the ripple patterns cross. The bright and flat patches are constructive and destructive interference.",
    words: [
      { word: "Wavelength", meaning: "The distance between two wave peaks." },
      { word: "Transverse wave", meaning: "A wave oscillating across its direction of travel." },
      { word: "Longitudinal wave", meaning: "A wave oscillating along its direction of travel." },
      { word: "Interference", meaning: "Two waves overlapping to reinforce or cancel." }
    ],
    questions: [
      { q: "What does a wave transfer?", choices: ["Energy without matter", "Matter without energy", "Both equally", "Neither"], answer: 0 },
      { q: "What is wavelength?", choices: ["The distance between peaks", "The height of a peak", "Peaks per second", "Wave speed"], answer: 0 },
      { q: "Wave speed equals...", choices: ["Wavelength times frequency", "Wavelength divided by frequency", "Amplitude times frequency", "Frequency divided by amplitude"], answer: 0 },
      { q: "Which is a transverse wave?", choices: ["Light", "Sound", "A compression wave", "A pressure pulse"], answer: 0 },
      { q: "Which is a longitudinal wave?", choices: ["Sound", "Light", "A rope flick", "A radio wave"], answer: 0 },
      { q: "What is diffraction?", choices: ["Waves spreading around edges and through gaps", "Waves bouncing back", "Waves slowing down", "Waves cancelling"], answer: 0 },
      { q: "What is refraction?", choices: ["Waves bending as they change speed in a new medium", "Waves reflecting", "Waves overlapping", "Waves fading"], answer: 0 },
      { q: "What happens when a peak meets a trough?", choices: ["They cancel", "They double", "They speed up", "They reflect"], answer: 0 },
      { q: "How do noise-cancelling headphones work?", choices: ["They generate an inverted wave to cancel noise", "They block sound physically", "They absorb sound", "They lower frequency"], answer: 0 },
      { q: "Why do ships barely notice tsunamis at sea?", choices: ["Huge wavelength but tiny height in deep water", "They travel too slowly", "They are invisible", "They stay near shore"], answer: 0 }
    ]
  } },

  { id: "colors-light", title: "The Colors of Light", emoji: "🌈",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🌈💡", text: "White light looks plain, but it is secretly all the colours mixed together. A rainbow splits them apart so we can see them!" },
      { art: "🍎👀", text: "Why is an apple red? The apple soaks up all the other colours and bounces only red back to your eyes." },
      { art: "⚫⚪", text: "Something black soaks up nearly all the light. Something white bounces nearly all of it back. That is why black clothes get hot in the sun!" }
    ],
    funFact: "There is no such thing as a green light bulb shining green onto a red apple making orange. The apple would just look dark, because there is no red light to bounce!",
    tryThis: "Hold a glass of water in bright sunlight near a white wall and tilt it. You will find a rainbow on the wall. You just split light.",
    questions: [
      { q: "What is white light really?", choices: ["All the colours mixed", "Just white", "Empty"], answer: 0 },
      { q: "What splits the colours apart?", choices: ["A rainbow", "A shadow", "A mirror only"], answer: 0 },
      { q: "Why does an apple look red?", choices: ["It bounces red back", "It makes red", "It is painted"], answer: 0 },
      { q: "What does the apple do with other colours?", choices: ["Soaks them up", "Bounces them", "Ignores them"], answer: 0 },
      { q: "What does black do to light?", choices: ["Soaks up nearly all", "Bounces nearly all", "Splits it"], answer: 0 },
      { q: "What does white do to light?", choices: ["Bounces nearly all", "Soaks up all", "Nothing"], answer: 0 },
      { q: "Why do black clothes get hot?", choices: ["They soak up light", "They are thicker", "They are heavy"], answer: 0 },
      { q: "Where do colours come from?", choices: ["Light", "Paint only", "The eyes"], answer: 0 },
      { q: "Can you make a rainbow with a glass of water?", choices: ["Yes, in sunlight", "No", "Only with rain"], answer: 0 },
      { q: "How many colours are in a rainbow?", choices: ["Seven", "One", "Two"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🌈📐", text: "White light contains all visible wavelengths. A prism separates them because each wavelength refracts by a slightly different amount: violet bends most, red least. Newton proved this in 1666 by splitting light with one prism and recombining it with a second." },
      { art: "🍎👁️", text: "Objects have colour because of selective absorption. A red apple absorbs most wavelengths and reflects those around 700 nanometres. The colour is a property of the interaction between the light, the object's surface, and your eye, not of the object alone." },
      { art: "🎨💡", text: "There are two colour systems. Light mixes additively: red, green and blue combine to white, which is how screens work. Pigments mix subtractively: each absorbs wavelengths, so cyan, magenta and yellow combine toward black, which is how printing works." },
      { art: "👁️🔬", text: "Human retinas have three cone types, sensitive to roughly red, green and blue. Every colour you perceive is your brain interpreting the ratio between those three signals. Some people have a fourth cone type, and many animals see ultraviolet we cannot." }
    ],
    funFact: "Mantis shrimp have up to sixteen photoreceptor types compared to our three, though research suggests they may discriminate colour less finely than we do, just faster.",
    tryThis: "Look closely at a white patch on a phone screen through a drop of water as a magnifier. You will see it is made of tiny red, green and blue dots, not white at all.",
    words: [
      { word: "Prism", meaning: "A transparent shape that separates light into colours." },
      { word: "Wavelength", meaning: "The distance between wave peaks, which sets colour." },
      { word: "Additive mixing", meaning: "Combining light, where red, green and blue make white." },
      { word: "Subtractive mixing", meaning: "Combining pigments, which absorb wavelengths." }
    ],
    questions: [
      { q: "Why does a prism split light?", choices: ["Each wavelength refracts by a different amount", "It adds colour", "It reflects differently", "It absorbs light"], answer: 0 },
      { q: "Which colour bends most in a prism?", choices: ["Violet", "Red", "Green", "Yellow"], answer: 0 },
      { q: "Who proved white light contains all colours?", choices: ["Newton in 1666", "Galileo in 1610", "Ibn al-Haytham", "Einstein"], answer: 0 },
      { q: "How did he prove it?", choices: ["Split with one prism and recombined with a second", "By painting", "By measuring heat", "By theory alone"], answer: 0 },
      { q: "Why does a red apple look red?", choices: ["It absorbs most wavelengths and reflects red", "It emits red light", "It is dyed", "It refracts red"], answer: 0 },
      { q: "What do red, green and blue light combine to make?", choices: ["White", "Black", "Brown", "Grey"], answer: 0 },
      { q: "How do pigments mix?", choices: ["Subtractively, absorbing wavelengths", "Additively", "Randomly", "They do not mix"], answer: 0 },
      { q: "How many cone types does a human retina have?", choices: ["Three", "One", "Four", "Sixteen"], answer: 0 },
      { q: "How do you perceive a colour?", choices: ["Your brain interprets the ratio of three cone signals", "One cone detects each colour", "The eye measures wavelength directly", "Light carries colour labels"], answer: 0 },
      { q: "What is unusual about mantis shrimp?", choices: ["Up to sixteen photoreceptor types", "They are colourblind", "They see only ultraviolet", "They have no eyes"], answer: 0 }
    ]
  } },

  { id: "lenses", title: "Lenses and Glasses", emoji: "👓",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🔍👀", text: "A lens is a curved piece of clear glass or plastic. It bends light, and that can make things look bigger or smaller." },
      { art: "👓😊", text: "Glasses have lenses. If someone's eyes cannot focus properly, the lens bends the light just right so everything looks sharp again." },
      { art: "📷🔭", text: "Cameras have lenses. So do telescopes and microscopes. Even your own eye has a lens inside it!" }
    ],
    funFact: "You have a lens in each eye, and tiny muscles squeeze it to change its shape. That is how you can look at a book and then out the window and both are clear.",
    tryThis: "Put a drop of water on a piece of clear plastic over some small printed text. Look through the drop. The water acts as a magnifying lens!",
    questions: [
      { q: "What is a lens?", choices: ["Curved clear glass or plastic", "A mirror", "A magnet"], answer: 0 },
      { q: "What does a lens do to light?", choices: ["Bends it", "Stops it", "Colours it"], answer: 0 },
      { q: "What can a lens make things look?", choices: ["Bigger or smaller", "Louder", "Heavier"], answer: 0 },
      { q: "What do glasses have?", choices: ["Lenses", "Magnets", "Springs"], answer: 0 },
      { q: "What else has a lens?", choices: ["A camera", "A hammer", "A sock"], answer: 0 },
      { q: "Do you have lenses in your eyes?", choices: ["Yes, one in each", "No", "Only one"], answer: 0 },
      { q: "What changes the shape of your eye lens?", choices: ["Tiny muscles", "Your hands", "Blinking"], answer: 0 },
      { q: "What can a water drop act like?", choices: ["A magnifying lens", "A mirror", "A prism only"], answer: 0 },
      { q: "Telescopes use lenses to see...", choices: ["Far away things", "Loud things", "Fast things"], answer: 0 },
      { q: "Microscopes use lenses to see...", choices: ["Very tiny things", "Very far things", "Very loud things"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🔍📐", text: "A lens bends light by refraction, because light changes speed entering glass. Convex lenses are thicker in the middle and converge rays to a focal point. Concave lenses are thinner in the middle and diverge rays outward." },
      { art: "📏🎯", text: "The focal length is the distance from the lens to where parallel rays converge. Shorter focal length means stronger bending. Lens power is measured in dioptres, the reciprocal of focal length in metres, which is why a spectacle prescription reads as a number like minus 2.5." },
      { art: "👁️👓", text: "The eye focuses using a flexible lens reshaped by muscles, a process called accommodation. In short-sightedness the eye focuses in front of the retina, corrected by a concave lens. In long-sightedness it focuses behind, corrected by a convex one." },
      { art: "🔭🔬", text: "Combining lenses multiplies their effect. A refracting telescope uses a large objective lens to gather light and a small eyepiece to magnify the image. A microscope does the same at tiny scale. Galileo's telescope in 1609 revealed Jupiter's moons and changed astronomy permanently." }
    ],
    funFact: "Your eye's lens stiffens gradually with age, which is why almost everyone needs reading glasses eventually. It happens to virtually all humans by their mid-forties.",
    tryThis: "Hold a magnifying glass and move it until a distant window forms a sharp upside-down image on a piece of paper. The lens-to-paper distance is the focal length.",
    words: [
      { word: "Convex lens", meaning: "Thicker in the middle, converging light to a point." },
      { word: "Concave lens", meaning: "Thinner in the middle, spreading light out." },
      { word: "Focal length", meaning: "Distance from lens to where parallel rays converge." },
      { word: "Accommodation", meaning: "The eye reshaping its lens to focus at different distances." }
    ],
    questions: [
      { q: "How does a lens bend light?", choices: ["By refraction as light changes speed in glass", "By reflection", "By absorption", "By diffraction only"], answer: 0 },
      { q: "What does a convex lens do?", choices: ["Converges rays to a focal point", "Spreads rays out", "Blocks light", "Splits colours"], answer: 0 },
      { q: "What does a concave lens do?", choices: ["Diverges rays outward", "Converges rays", "Reflects rays", "Absorbs rays"], answer: 0 },
      { q: "What is focal length?", choices: ["Distance from lens to where parallel rays converge", "Thickness of the lens", "Width of the lens", "Distance to the eye"], answer: 0 },
      { q: "What unit measures lens power?", choices: ["Dioptres", "Metres", "Degrees", "Newtons"], answer: 0 },
      { q: "What is accommodation?", choices: ["The eye reshaping its lens to focus", "Adjusting to darkness", "Blinking", "Pupil widening"], answer: 0 },
      { q: "How is short-sightedness corrected?", choices: ["With a concave lens", "With a convex lens", "With a prism", "With a mirror"], answer: 0 },
      { q: "Where does a short-sighted eye focus?", choices: ["In front of the retina", "Behind the retina", "On the retina", "Nowhere"], answer: 0 },
      { q: "What does a telescope's objective lens do?", choices: ["Gathers light", "Magnifies the image", "Corrects colour", "Blocks glare"], answer: 0 },
      { q: "What did Galileo's 1609 telescope reveal?", choices: ["Jupiter's moons", "Pluto", "The Milky Way's centre", "Radio waves"], answer: 0 }
    ]
  } },

  { id: "heat-moves", title: "How Heat Moves", emoji: "🔥",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🥄☕", text: "Put a metal spoon in hot soup and the handle gets warm. The heat crawled up the metal. That is called conduction." },
      { art: "♨️🎈", text: "Warm air floats upward and cool air sinks down. That is why upstairs is warmer than downstairs. That moving is called convection." },
      { art: "☀️🔥", text: "The sun warms your face across all of space with nothing in between. Heat can travel as invisible rays too. That is radiation!" }
    ],
    funFact: "A wooden spoon in hot soup stays cool because wood does not carry heat well. That is exactly why spoons for cooking are often wooden!",
    tryThis: "Put a metal spoon and a wooden spoon in the same mug of warm water. Wait two minutes, then touch both handles. Feel the difference.",
    questions: [
      { q: "What happens to a metal spoon in hot soup?", choices: ["The handle gets warm", "It stays cold", "It melts"], answer: 0 },
      { q: "Heat crawling through metal is called...", choices: ["Conduction", "Convection", "Radiation"], answer: 0 },
      { q: "Which way does warm air go?", choices: ["Up", "Down", "Sideways only"], answer: 0 },
      { q: "Moving warm air is called...", choices: ["Convection", "Conduction", "Freezing"], answer: 0 },
      { q: "How does the sun warm your face?", choices: ["Radiation through space", "Conduction", "Wind"], answer: 0 },
      { q: "Why is upstairs warmer?", choices: ["Warm air rises", "It is closer to the sun", "It is smaller"], answer: 0 },
      { q: "Which spoon stays cool?", choices: ["Wooden", "Metal", "Both get hot"], answer: 0 },
      { q: "Why are cooking spoons often wooden?", choices: ["Wood does not carry heat well", "Wood is cheap", "Wood floats"], answer: 0 },
      { q: "How many ways can heat move?", choices: ["Three", "One", "Ten"], answer: 0 },
      { q: "Which way does cool air go?", choices: ["Down", "Up", "It never moves"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🥄⚛️", text: "Conduction moves heat through direct contact. Fast-jiggling particles collide with slower neighbours and pass energy along. Metals conduct best because their free electrons carry energy rapidly, while wood, air and plastic are poor conductors, which makes them good insulators." },
      { art: "♨️🔄", text: "Convection moves heat by the bulk movement of a fluid. Heated fluid expands, becomes less dense, and rises; cooler fluid sinks to replace it, setting up a convection current. This drives weather, ocean currents, central heating, and the slow churning of Earth's mantle." },
      { art: "☀️📡", text: "Radiation transfers heat as infrared electromagnetic waves and needs no medium at all, which is how the Sun's energy crosses 150 million kilometres of vacuum. Dark, matt surfaces emit and absorb radiation best; shiny silver surfaces reflect it, which is why emergency blankets are foil." },
      { art: "🏠🧥", text: "Insulation works by blocking all three. A vacuum flask has a vacuum to stop conduction and convection, and silvered walls to stop radiation. Double glazing traps gas between panes. A winter coat mostly traps still air, since air is a poor conductor once it cannot circulate." }
    ],
    funFact: "Heat always flows from hotter to colder, never the reverse on its own. That one-way rule is the second law of thermodynamics, and it is why you cannot un-stir milk from tea.",
    tryThis: "Put equal hot water in a metal mug, a ceramic mug, and a mug wrapped in a towel. Measure the temperature every five minutes. You have run an insulation experiment.",
    words: [
      { word: "Conduction", meaning: "Heat transfer through direct contact." },
      { word: "Convection", meaning: "Heat transfer by moving fluid." },
      { word: "Radiation", meaning: "Heat transfer as infrared waves, needing no medium." },
      { word: "Insulator", meaning: "A material that resists heat transfer." }
    ],
    questions: [
      { q: "What is conduction?", choices: ["Heat transfer through direct contact", "Heat carried by moving fluid", "Heat as waves", "Heat stored in matter"], answer: 0 },
      { q: "Why do metals conduct heat well?", choices: ["Free electrons carry energy rapidly", "They are heavy", "They are shiny", "They are solid"], answer: 0 },
      { q: "What is a convection current?", choices: ["Heated fluid rising while cooler fluid sinks", "Heat through metal", "Infrared waves", "Static charge"], answer: 0 },
      { q: "What does convection drive on Earth?", choices: ["Weather, ocean currents and mantle churning", "Gravity", "Magnetism", "Tides"], answer: 0 },
      { q: "What is unique about radiation?", choices: ["It needs no medium", "It is fastest in metal", "It only works upward", "It needs air"], answer: 0 },
      { q: "Which surfaces radiate and absorb heat best?", choices: ["Dark, matt surfaces", "Shiny silver surfaces", "Clear surfaces", "White surfaces"], answer: 0 },
      { q: "Why are emergency blankets foil?", choices: ["Shiny surfaces reflect radiated heat", "Foil is warm", "Foil is cheap", "Foil blocks wind only"], answer: 0 },
      { q: "How does a vacuum flask block heat?", choices: ["Vacuum stops conduction and convection, silvering stops radiation", "Thick walls only", "Cold storage", "Chemical cooling"], answer: 0 },
      { q: "Why does a winter coat work?", choices: ["It traps still air, a poor conductor", "It generates heat", "It reflects cold", "It is heavy"], answer: 0 },
      { q: "Which way does heat always flow on its own?", choices: ["Hotter to colder", "Colder to hotter", "Both equally", "Upward only"], answer: 0 }
    ]
  } },

  { id: "compass", title: "Magnets and the Compass", emoji: "🧭",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🧭⬆️", text: "A compass has a tiny magnet needle that always swings to point north. Turn the compass any way you like and the needle still points north!" },
      { art: "🌍🧲", text: "Why? Because the whole Earth is a giant magnet. The needle is pulled toward the far north, every single time." },
      { art: "⛵🗺️", text: "Before phones and maps, sailors used compasses to cross huge oceans. Without one, it is very easy to go in circles." }
    ],
    funFact: "You can make a compass with a needle, a magnet and a leaf floating in water. Sailors used versions of this for hundreds of years!",
    tryThis: "Stroke a sewing needle fifty times in the same direction with a magnet. Float it on a leaf in a bowl of water. It will slowly turn to point north.",
    questions: [
      { q: "What does a compass needle point to?", choices: ["North", "Down", "At you"], answer: 0 },
      { q: "Why does it point that way?", choices: ["Earth is a giant magnet", "It is windy", "It is heavy"], answer: 0 },
      { q: "What is the needle made of?", choices: ["A tiny magnet", "Wood", "Plastic"], answer: 0 },
      { q: "Who used compasses to cross oceans?", choices: ["Sailors", "Farmers", "Bakers"], answer: 0 },
      { q: "If you turn the compass, the needle...", choices: ["Still points north", "Turns with it", "Stops"], answer: 0 },
      { q: "Can you make your own compass?", choices: ["Yes, with a needle and magnet", "No", "Only in a shop"], answer: 0 },
      { q: "What do you float the needle on?", choices: ["A leaf in water", "A rock", "Sand"], answer: 0 },
      { q: "Without a compass it is easy to...", choices: ["Go in circles", "Go faster", "Fly"], answer: 0 },
      { q: "How many times do you stroke the needle?", choices: ["About fifty", "Once", "One thousand"], answer: 0 },
      { q: "Which direction does the needle find?", choices: ["North", "West only", "Up"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🧭🌍", text: "A compass needle is a small magnet free to rotate, and it aligns with Earth's magnetic field. That field is generated by convection currents in the molten iron of Earth's outer core, a self-sustaining process called the geodynamo." },
      { art: "📐⚠️", text: "Magnetic north is not the same as true north, the geographic pole. The angle between them is called declination, and it varies by location and drifts over years. Serious navigation requires correcting for it, or you steer progressively wrong." },
      { art: "🇨🇳⛵", text: "The Chinese discovered magnetic direction-finding by the 11th century, first using lodestone spoons for divination before applying it to navigation. The technology reached Europe around 1200 and made open-ocean voyaging practical rather than suicidal." },
      { art: "🔄🪨", text: "Earth's magnetic field has reversed hundreds of times, the last about 780,000 years ago. We know because iron minerals in cooling lava lock in the field direction of their era, leaving a striped magnetic record on the ocean floor that also proved plate tectonics." }
    ],
    funFact: "The magnetic north pole moves. It has drifted from Canada toward Siberia at up to 50 kilometres a year recently, fast enough that aviation charts must be updated.",
    tryThis: "Look up your local magnetic declination online, then compare a compass reading with the direction of true north on a map. The gap is real and measurable from your garden.",
    words: [
      { word: "Geodynamo", meaning: "The process in Earth's molten core generating its magnetic field." },
      { word: "Declination", meaning: "The angle between magnetic north and true north." },
      { word: "Lodestone", meaning: "Naturally magnetised rock used in early compasses." },
      { word: "Magnetic reversal", meaning: "When Earth's magnetic poles swap places." }
    ],
    questions: [
      { q: "What generates Earth's magnetic field?", choices: ["Convection in the molten outer core", "The Moon", "Solar wind", "The atmosphere"], answer: 0 },
      { q: "What is that process called?", choices: ["The geodynamo", "The magnetosphere", "The core cycle", "Plate tectonics"], answer: 0 },
      { q: "What is declination?", choices: ["The angle between magnetic and true north", "The tilt of Earth", "The compass error from metal", "The field strength"], answer: 0 },
      { q: "Does declination stay constant?", choices: ["No, it varies by place and drifts over years", "Yes", "Only at the equator", "Only at sea"], answer: 0 },
      { q: "Who first discovered magnetic direction-finding?", choices: ["The Chinese, by the 11th century", "The Greeks", "The Egyptians", "The Vikings"], answer: 0 },
      { q: "What was it first used for?", choices: ["Divination", "Navigation", "Mining", "Building"], answer: 0 },
      { q: "When did it reach Europe?", choices: ["Around 1200", "Around 800", "Around 1500", "Around 1700"], answer: 0 },
      { q: "How do we know the field has reversed?", choices: ["Iron minerals in cooling lava lock in field direction", "Written records", "Compass archives", "Satellite data only"], answer: 0 },
      { q: "What else did that magnetic striping prove?", choices: ["Plate tectonics", "The age of the Sun", "Continental climate", "Ocean depth"], answer: 0 },
      { q: "How fast has magnetic north drifted recently?", choices: ["Up to 50 km a year", "About 1 m a year", "It does not move", "About 500 km a year"], answer: 0 }
    ]
  } },

  { id: "inventions", title: "Great Inventions", emoji: "💡",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "💡🤔", text: "An invention starts with someone noticing a problem. This is hard. This takes too long. There must be a better way!" },
      { art: "🔧🔁", text: "Then they try something. Usually it does not work. So they try again, and again. Most inventions are mostly failed tries." },
      { art: "🌍✨", text: "Wheels, lights, planes, phones, medicines. Every single one started as an idea in somebody's head. Your idea could be next!" }
    ],
    funFact: "The person who invented the light bulb tried thousands of materials before finding one that glowed without burning up straight away.",
    tryThis: "Find one thing at home that annoys you, like a drawer that sticks. Draw three different ways you could fix it. You just did what inventors do.",
    questions: [
      { q: "What does an invention start with?", choices: ["Noticing a problem", "A prize", "A holiday"], answer: 0 },
      { q: "What usually happens on the first try?", choices: ["It does not work", "It works perfectly", "Nothing at all"], answer: 0 },
      { q: "What do inventors do after failing?", choices: ["Try again", "Stop forever", "Hide"], answer: 0 },
      { q: "Most inventions are mostly...", choices: ["Failed tries", "Easy wins", "Accidents only"], answer: 0 },
      { q: "Which one was invented?", choices: ["The wheel", "The moon", "Rain"], answer: 0 },
      { q: "Where does an invention begin?", choices: ["In somebody's head", "In a shop", "In the sky"], answer: 0 },
      { q: "How many materials did the light bulb inventor try?", choices: ["Thousands", "Two", "Ten"], answer: 0 },
      { q: "Can a kid have an invention idea?", choices: ["Yes", "No", "Only grown-ups"], answer: 0 },
      { q: "Inventing means finding...", choices: ["A better way", "A faster nap", "A louder noise"], answer: 0 },
      { q: "Is failing part of inventing?", choices: ["Yes, a big part", "No", "Never"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🔁📉", text: "Invention almost never looks like a single flash of insight. It looks like iteration: define the problem, build a rough version, find out what fails, change one thing, repeat. Progress hides inside a long series of unglamorous failures." },
      { art: "🧩🔗", text: "Most inventions are recombinations rather than creations from nothing. The printing press joined existing screw presses, metal casting and ink. The smartphone combined a phone, a camera, a computer and a screen. Noticing that two existing things belong together is itself invention." },
      { art: "⏰🌍", text: "Ideas often arrive when the surrounding conditions are ready, which is why simultaneous invention is common. The telephone, calculus and evolution by natural selection were each arrived at independently by different people within a short window." },
      { art: "🚧⚖️", text: "Inventions bring consequences their creators did not intend. The car gave freedom and also traffic deaths and emissions. Social media connected people and also spread misinformation. Asking what could go wrong is now considered part of the engineering work, not an afterthought." }
    ],
    funFact: "Patent offices record that Alexander Graham Bell filed for the telephone on the same day as Elisha Gray, February 14 1876, within hours of each other.",
    tryThis: "Pick any object near you and trace back what it recombines. A pencil is graphite, wood, glue, metal and rubber, each from separate industries, assembled by someone who noticed they fit.",
    words: [
      { word: "Iteration", meaning: "Repeatedly improving something through cycles of testing." },
      { word: "Prototype", meaning: "An early rough version built to learn from." },
      { word: "Recombination", meaning: "Making something new by joining existing things." },
      { word: "Unintended consequence", meaning: "An effect the inventor did not plan for." }
    ],
    questions: [
      { q: "What does invention usually look like?", choices: ["Iteration through repeated failure", "A single flash of insight", "Pure luck", "Copying"], answer: 0 },
      { q: "What is a prototype?", choices: ["An early rough version built to learn from", "The final product", "A patent", "A blueprint only"], answer: 0 },
      { q: "Why change one thing at a time?", choices: ["So you know what caused the difference", "It is faster", "It is cheaper", "It is traditional"], answer: 0 },
      { q: "What did the printing press recombine?", choices: ["Screw presses, metal casting and ink", "Paper and glue", "Steam and gears", "Glass and light"], answer: 0 },
      { q: "What is simultaneous invention?", choices: ["Different people arriving at the same idea independently", "Two inventors working together", "Copying a rival", "Inventing two things at once"], answer: 0 },
      { q: "Who filed for the telephone on the same day as Bell?", choices: ["Elisha Gray", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"], answer: 0 },
      { q: "On what date?", choices: ["February 14 1876", "January 1 1900", "July 4 1850", "March 10 1876"], answer: 0 },
      { q: "Why does simultaneous invention happen?", choices: ["Surrounding conditions become ready at the same time", "Inventors spy on each other", "Coincidence only", "Patent rules require it"], answer: 0 },
      { q: "What is an unintended consequence?", choices: ["An effect the inventor did not plan for", "A design flaw", "A patent dispute", "A failed prototype"], answer: 0 },
      { q: "What is now considered part of engineering work?", choices: ["Asking what could go wrong", "Filing patents fast", "Marketing", "Reducing cost only"], answer: 0 }
    ]
  } }
  ]
};
