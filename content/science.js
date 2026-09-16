/* Science & Nature - 30 concepts.
   Content format: each tier has pages (a storybook), an optional funFact, tryThis, and words list,
   then 10 questions. The correct answer is always written first (answer: 0); the app shuffles on screen.
   Paste your own YouTube links into video.young / video.older. */
window.CONTENT = window.CONTENT || {};
window.CONTENT['science'] = {
  id: 'science', title: 'Science & Nature', emoji: '🔬', color: '#3FA34D', tint: '#DFF3E2',
  concepts: [
  { id: "sun", title: "The Sun", emoji: "☀️",
    scene: ["☀️", "🌍", "🌻"],
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "☀️", text: "Look up in the daytime sky. There is the Sun! The Sun is big and bright and warm. It is our special star." },
      { art: "🌍☀️", text: "The Sun is very, very far away. It looks small, but it is HUGE. One million Earths could fit inside it!" },
      { art: "🌻🌱☀️", text: "Plants love the Sun. Sunshine helps them grow tall and green. Without the Sun, no flowers, no trees, no food." },
      { art: "😎☀️", text: "The Sun is so bright that we never look right at it. That hurts our eyes. We wear sunglasses and a hat instead!" }
    ],
    funFact: "The Sun is so far away that its light takes 8 whole minutes to fly to us. Sunshine on your face started its trip 8 minutes ago!",
    tryThis: "Go outside on a sunny day with two cups of water. Put one in the sun and one in the shade. Feel them after an hour. Which one is warmer?",
    questions: [
      { q: "What does the Sun give us?", choices: ["Light and warmth", "Rain", "Snow"], answer: 0 },
      { q: "What is the Sun made of?", choices: ["Hot glowing gas", "Cold water", "Green cheese"], answer: 0 },
      { q: "Who uses sunshine to grow?", choices: ["Plants", "Rocks", "Cars"], answer: 0 },
      { q: "When do we see the Sun?", choices: ["In the daytime", "At night", "Only in winter"], answer: 0 },
      { q: "Is the Sun hot or cold?", choices: ["Very hot", "Very cold", "Just warm like soup"], answer: 0 },
      { q: "Should you look straight at the Sun?", choices: ["No, never", "Yes, always", "Only on Sundays"], answer: 0 },
      { q: "What shape is the Sun?", choices: ["Round like a ball", "Square like a box", "Flat like paper"], answer: 0 },
      { q: "Without the Sun, Earth would be...", choices: ["Dark and cold", "Warm and sunny", "Full of rainbows"], answer: 0 },
      { q: "What color does the Sun look in the sky?", choices: ["Bright yellow-white", "Purple", "Black"], answer: 0 },
      { q: "A sunflower turns to face the...", choices: ["Sun", "Moon", "TV"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "☀️", text: "The Sun is a star, exactly like the tiny twinkling ones you see at night. The only difference is distance. The Sun is about 150 million kilometers away, which sounds far, but every other star is thousands of times farther still. That closeness is why it fills our sky while the others are pinpricks." },
      { art: "🔥⚛️", text: "The Sun is not burning like a campfire. It is a giant ball of hydrogen gas squeezed so hard by its own weight that hydrogen atoms smash together and become helium. This is called nuclear fusion, and it releases an astonishing amount of energy from the Sun's core." },
      { art: "🌍📏", text: "The Sun is enormous: more than one million Earths could fit inside it, and it holds about 99.8 percent of all the material in our entire solar system. Everything else, all eight planets, every moon, asteroid, and comet, shares the leftover fraction." },
      { art: "💡8️⃣", text: "Light from the Sun races to Earth at 300,000 kilometers per second and still takes about 8 minutes to arrive. So when you look at the Sun, you are seeing it as it was 8 minutes ago. If it suddenly vanished, we would not notice for 8 minutes." },
      { art: "🌱🍃", text: "Almost all life on Earth runs on sunlight. Plants use it in photosynthesis to turn air and water into food, animals eat the plants, and we eat both. Even the electricity from coal is ancient sunlight, stored in plants that died millions of years ago." },
      { art: "🌅🌇", text: "The Sun seems to cross the sky each day, but it is not moving. Earth is spinning. The Sun also has weather of its own: dark sunspots, towering loops of gas called prominences, and solar flares that can make the northern lights glow on Earth." }
    ],
    funFact: "The Sun is about 4.6 billion years old and roughly halfway through its life. It has enough hydrogen fuel for another 5 billion years.",
    tryThis: "Make a sundial. Push a stick into the ground and mark the tip of its shadow with a stone every hour. By evening you will have drawn the Sun's path across the sky.",
    words: [
      { word: "Star", meaning: "A giant ball of gas that makes its own light and heat." },
      { word: "Fusion", meaning: "When small atoms join to make a bigger one, releasing huge energy." },
      { word: "Photosynthesis", meaning: "How plants use sunlight to make their own food." },
      { word: "Solar flare", meaning: "A sudden burst of energy from the Sun's surface." }
    ],
    questions: [
      { q: "What kind of space object is the Sun?", choices: ["A star", "A planet", "A moon", "A comet"], answer: 0 },
      { q: "Why does the Sun look bigger than other stars?", choices: ["It is much closer to Earth", "It is the biggest star ever", "Other stars are fake", "It wears a magnifying glass"], answer: 0 },
      { q: "What gas is the Sun mostly made of?", choices: ["Hydrogen", "Oxygen", "Carbon dioxide", "Helium balloons"], answer: 0 },
      { q: "About how long does sunlight take to reach Earth?", choices: ["8 minutes", "8 seconds", "8 days", "8 years"], answer: 0 },
      { q: "About how many Earths could fit inside the Sun?", choices: ["More than one million", "About ten", "Exactly two", "Half of one"], answer: 0 },
      { q: "What two things does the Sun give Earth?", choices: ["Light and heat", "Rain and snow", "Wind and waves", "Rocks and sand"], answer: 0 },
      { q: "Plants use sunlight to...", choices: ["Make their own food", "Sleep better", "Turn into animals", "Hide from bugs"], answer: 0 },
      { q: "What would happen without the Sun?", choices: ["Earth would be frozen and dark", "Nothing would change", "It would rain more", "Plants would grow faster"], answer: 0 },
      { q: "The Sun rises in the east and sets in the...", choices: ["West", "North", "South", "East again"], answer: 0 },
      { q: "Why should you never stare at the Sun?", choices: ["Its light can hurt your eyes", "It might disappear", "It gets embarrassed", "It makes you sneeze"], answer: 0 }
    ]
  } },

  { id: "moon", title: "The Moon", emoji: "🌙",
    scene: ["🌙", "⭐", "🦉"],
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🌙", text: "When the sky gets dark, the Moon comes out. Hello, Moon! The Moon is Earth's neighbor in space." },
      { art: "🪨🌑", text: "The Moon is a big round rock. It has no air and no water. Nothing grows there. It is dusty and quiet." },
      { art: "🌞🌙", text: "The Moon has no light of its own. Sunshine bounces off it, like a mirror. That is why the Moon glows!" },
      { art: "🌑🌓🌕", text: "Some nights the Moon is round like a ball. Some nights it is thin like a banana. It keeps changing shape. Look tonight and see!" }
    ],
    funFact: "Astronauts walked on the Moon and left their footprints in the dust. There is no wind up there, so those footprints are still sitting exactly where they were made!",
    tryThis: "Draw the Moon every night for a week before bed. By the end you will have your own Moon shape chart.",
    questions: [
      { q: "When do we usually see the Moon?", choices: ["At night", "At lunchtime", "Never"], answer: 0 },
      { q: "What is the Moon?", choices: ["A big round rock", "A ball of fire", "A giant lamp"], answer: 0 },
      { q: "Does the Moon make its own light?", choices: ["No, it bounces sunlight", "Yes, like a torch", "Yes, it has batteries"], answer: 0 },
      { q: "What does the Moon go around?", choices: ["The Earth", "Your house", "The Sun only"], answer: 0 },
      { q: "Sometimes the Moon looks like a...", choices: ["Banana", "Square", "Triangle"], answer: 0 },
      { q: "Can people visit the Moon?", choices: ["Yes, astronauts did", "No, never", "Only birds can"], answer: 0 },
      { q: "Is the Moon closer than the stars?", choices: ["Yes, much closer", "No, farther", "They are all the same"], answer: 0 },
      { q: "What animal is awake when the Moon is out?", choices: ["Owl", "Butterfly", "Chicken"], answer: 0 },
      { q: "The Moon is shaped like a...", choices: ["Ball", "Box", "Star"], answer: 0 },
      { q: "Where does the Moon get its light?", choices: ["From the Sun", "From fireflies", "From street lights"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🌙🌍", text: "The Moon is Earth's only natural satellite, meaning it orbits our planet rather than the Sun directly. It sits about 384,000 kilometers away and takes roughly 27 days to complete one lap. Curiously, it spins exactly once per orbit, so the same face always points at us." },
      { art: "🕳️☄️", text: "The Moon's surface is covered in craters punched out by asteroids and meteoroids over billions of years. With no atmosphere to burn up incoming rocks, and no wind or rain to wear the scars away, those craters stay almost perfectly preserved." },
      { art: "🌑🌒🌓🌔", text: "The Moon makes no light. We see reflected sunlight, and the shape we see depends on our viewing angle as the Moon moves. These shapes are the phases: new, crescent, first quarter, gibbous, and full, cycling roughly every 29.5 days." },
      { art: "🌊🌙", text: "The Moon's gravity tugs on Earth's oceans and creates our tides. It also steadies Earth's tilt, which keeps our seasons regular. Without the Moon, Earth's climate would wobble far more wildly than it does." },
      { art: "👨‍🚀🚀", text: "In July 1969, Apollo 11 landed and Neil Armstrong became the first person to walk on the Moon. Twelve people in total have walked there. They brought back 382 kilograms of Moon rock that scientists still study today." },
      { art: "💥🌕", text: "Most scientists think the Moon formed when a Mars-sized object slammed into the young Earth about 4.5 billion years ago. The debris flung into orbit clumped together and became the Moon, which is why Moon rock and Earth rock are so similar." }
    ],
    funFact: "The Moon drifts about 3.8 centimeters farther from Earth every year, roughly the speed your fingernails grow.",
    tryThis: "Track the Moon for a month. Note its shape and the time you see it. You will discover it rises about 50 minutes later each day.",
    words: [
      { word: "Satellite", meaning: "An object that orbits a planet." },
      { word: "Crater", meaning: "A bowl-shaped hole made by a space rock crashing down." },
      { word: "Phase", meaning: "The shape of the lit part of the Moon that we can see." },
      { word: "Orbit", meaning: "The curved path one object takes around another." }
    ],
    questions: [
      { q: "What do we call something that travels around a planet?", choices: ["A satellite", "A comet", "A galaxy", "A rocket"], answer: 0 },
      { q: "About how long does the Moon take to go around Earth?", choices: ["One month", "One day", "One year", "One hour"], answer: 0 },
      { q: "What made the craters on the Moon?", choices: ["Space rocks crashing into it", "Volcanoes on Earth", "Astronaut footprints", "Heavy rain"], answer: 0 },
      { q: "Why does the Moon shine?", choices: ["It reflects sunlight", "It burns like a star", "It is full of lamps", "It glows like a firefly"], answer: 0 },
      { q: "What are the changing shapes of the Moon called?", choices: ["Phases", "Faces", "Stages", "Slices"], answer: 0 },
      { q: "What is on the Moon's surface?", choices: ["Dust and craters", "Oceans and rivers", "Trees and grass", "Cities and roads"], answer: 0 },
      { q: "When did astronauts first land on the Moon?", choices: ["1969", "2020", "1869", "1999"], answer: 0 },
      { q: "What does the Moon NOT have?", choices: ["Air and water", "Craters", "Dust", "Rocks"], answer: 0 },
      { q: "A thin banana-shaped Moon is called a...", choices: ["Crescent", "Full moon", "Square moon", "Half apple"], answer: 0 },
      { q: "Could you fly a kite on the Moon?", choices: ["No, there is no wind or air", "Yes, easily", "Only at night", "Only in summer"], answer: 0 }
    ]
  } },

  { id: "stars", title: "Stars", emoji: "✨",
    scene: ["✨", "🌌", "🔭"],
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "✨🌌", text: "At night the sky fills with stars. Twinkle, twinkle! There are too many to count." },
      { art: "🔥⭐", text: "Stars look tiny, but they are not. Every star is a giant ball of hot glowing gas, just like our Sun." },
      { art: "🌍🔭", text: "Stars look small because they are SO far away. Even the closest one is much farther than the Moon." },
      { art: "🐻✨", text: "Some stars make shapes, like dot-to-dot pictures. People named them long ago. Can you find a shape tonight?" }
    ],
    funFact: "Our Sun is a star too! It is the closest star to us, which is why it looks so big and bright.",
    tryThis: "On a clear night, go outside with a grown-up and count how many stars you can see in one small patch of sky. Try again from a dark place away from street lights and count again.",
    questions: [
      { q: "What are stars made of?", choices: ["Hot glowing gas", "Ice cream", "Little rocks"], answer: 0 },
      { q: "Why do stars look tiny?", choices: ["They are very far away", "They are shy", "They are baby stars"], answer: 0 },
      { q: "Which star is closest to Earth?", choices: ["The Sun", "The Moon", "A shooting star"], answer: 0 },
      { q: "When can we see the stars?", choices: ["At night", "At lunch", "In the bath"], answer: 0 },
      { q: "What do stars do in the sky?", choices: ["Twinkle", "Bark", "Bounce"], answer: 0 },
      { q: "Are stars hot or cold?", choices: ["Very hot", "Freezing cold", "Warm like a bath"], answer: 0 },
      { q: "How many stars are in the sky?", choices: ["Too many to count", "Exactly ten", "Just one"], answer: 0 },
      { q: "What tool helps us see stars better?", choices: ["A telescope", "A spoon", "A pillow"], answer: 0 },
      { q: "Stars shine like little...", choices: ["Lights", "Puddles", "Pancakes"], answer: 0 },
      { q: "Can you touch a star?", choices: ["No, they are too far", "Yes, from a ladder", "Yes, from a tree"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "⭐🔥", text: "A star is an enormous sphere of gas, mostly hydrogen, held together by its own gravity and glowing because nuclear fusion in its core turns hydrogen into helium. That furnace can run for billions of years, pouring out light and heat the whole time." },
      { art: "🔵⚪🔴", text: "Star color tells you temperature, and it works backwards from what you might guess. Blue-white stars are the hottest, above 10,000 degrees Celsius. Yellow stars like our Sun are middling. Red stars are the coolest. Colour is a thermometer you can read with your eyes." },
      { art: "🌌🔢", text: "Our galaxy, the Milky Way, contains more than 100 billion stars, and there are perhaps two trillion galaxies in the observable universe. There are more stars in the sky than grains of sand on all of Earth's beaches." },
      { art: "🐻♌", text: "Constellations are patterns humans imagined by connecting stars, like Ursa Major or Orion. The stars in a constellation are usually nowhere near each other in space; they only look grouped from our viewpoint on Earth." },
      { art: "🧭⛵", text: "For thousands of years, sailors navigated by the stars. Polaris, the North Star, sits almost directly above Earth's north pole, so it barely moves all night. Find Polaris and you always know which way is north." },
      { art: "⏳💥", text: "Stars are born in clouds of gas, live for millions or billions of years, then die. Small stars fade quietly. Giant stars explode as supernovas, scattering the carbon, oxygen, and iron that later built planets and people. You are made of star material." }
    ],
    funFact: "Starlight takes years to reach us. The star Betelgeuse is about 640 light years away, so you see it as it looked 640 years ago.",
    tryThis: "Find Orion in winter or the Big Dipper year-round, then use the Dipper's two end stars as pointers: follow the line they make and you will land on Polaris, the North Star.",
    words: [
      { word: "Constellation", meaning: "A pattern of stars people named long ago." },
      { word: "Light year", meaning: "The distance light travels in one year, about 9.5 trillion km." },
      { word: "Supernova", meaning: "The huge explosion of a dying giant star." },
      { word: "Galaxy", meaning: "A vast group of stars, gas, and dust held together by gravity." }
    ],
    questions: [
      { q: "What do stars make by themselves?", choices: ["Light and heat", "Rain and wind", "Sounds and music", "Oxygen and water"], answer: 0 },
      { q: "Which stars are the hottest?", choices: ["Blue-white ones", "Red ones", "Green ones", "Brown ones"], answer: 0 },
      { q: "What is a star picture in the sky called?", choices: ["A constellation", "A collection", "A cloud", "A comet"], answer: 0 },
      { q: "What is the name of our galaxy?", choices: ["The Milky Way", "The Candy Way", "The Big Dipper", "Mars"], answer: 0 },
      { q: "How did sailors long ago use the stars?", choices: ["To find their way", "To catch fish", "To light their ships", "To tell jokes"], answer: 0 },
      { q: "Why do stars look so small?", choices: ["They are extremely far away", "They really are tiny", "Clouds shrink them", "Our eyes are weak"], answer: 0 },
      { q: "About how many stars are in our galaxy?", choices: ["More than 100 billion", "About 100", "Exactly 1000", "Fifty"], answer: 0 },
      { q: "Cooler stars glow which color?", choices: ["Red", "Blue", "White", "Silver"], answer: 0 },
      { q: "Our Sun is a...", choices: ["Star", "Planet", "Comet", "Galaxy"], answer: 0 },
      { q: "The Big Dipper is a famous...", choices: ["Constellation", "Planet", "Rocket", "Moon"], answer: 0 }
    ]
  } },

  { id: "planets", title: "The Planets", emoji: "🪐",
    scene: ["☀️", "🪐", "🌍"],
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "☀️🪐", text: "Our Sun has a family. Eight planets go around and around it. Earth is one of them!" },
      { art: "🔴🪨", text: "Some planets are made of rock, like Earth and Mars. You could stand on them. Mars is red and dusty." },
      { art: "🪐💨", text: "Some planets are made of gas and have no ground at all. Jupiter is the biggest. Saturn wears sparkly rings!" },
      { art: "🌍💧", text: "Only Earth has water to drink and air to breathe. That is why we live here. Earth is our home." }
    ],
    funFact: "Saturn is so light for its size that if you had a bathtub big enough, Saturn would float in the water!",
    tryThis: "Line up eight things of different sizes on the floor, from a pea to a beach ball, and make your own planet parade in order.",
    questions: [
      { q: "What do planets travel around?", choices: ["The Sun", "The Moon", "A mountain"], answer: 0 },
      { q: "Which planet do we live on?", choices: ["Earth", "Mars", "Jupiter"], answer: 0 },
      { q: "Which planet is red?", choices: ["Mars", "Earth", "Saturn"], answer: 0 },
      { q: "Which planet is the biggest?", choices: ["Jupiter", "Mars", "The Moon"], answer: 0 },
      { q: "Which planet has pretty rings?", choices: ["Saturn", "Earth", "Mars"], answer: 0 },
      { q: "What shape are planets?", choices: ["Round", "Square", "Star-shaped"], answer: 0 },
      { q: "The Sun and its planets are called the...", choices: ["Solar system", "Star club", "Sky family"], answer: 0 },
      { q: "How many planet friends does Earth have?", choices: ["Seven", "One hundred", "Zero"], answer: 0 },
      { q: "Is Earth a planet or a star?", choices: ["A planet", "A star", "A cloud"], answer: 0 },
      { q: "Where are the planets?", choices: ["In space", "Under the sea", "In the garden"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "☀️🪐", text: "Eight planets orbit our Sun in this order: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. A handy memory trick is the sentence My Very Educated Mother Just Served Us Noodles." },
      { art: "🪨🌍", text: "The four inner planets are rocky worlds with solid surfaces. Mercury is a cratered furnace, Venus is wrapped in thick acid clouds that trap heat at 460 degrees Celsius, Earth is our blue home, and Mars is a cold red desert with the tallest volcano in the solar system." },
      { art: "🌀🪐", text: "The four outer planets are gas and ice giants with no solid ground to land on. Jupiter could swallow all the other planets combined and has a storm, the Great Red Spot, larger than Earth. Saturn's rings are billions of chunks of ice and rock." },
      { art: "🕐📅", text: "A year is one trip around the Sun, so it varies enormously. Mercury finishes in 88 Earth days; Neptune needs 165 Earth years. A day, one spin, varies too: Jupiter spins in under 10 hours while Venus takes 243 Earth days." },
      { art: "🌡️❄️", text: "Distance from the Sun sets the temperature. Mercury swings from 430 degrees Celsius in daylight to minus 180 at night because it has no atmosphere to hold heat. Neptune, far out in the dark, sits around minus 200 degrees." },
      { art: "🔭🛰️", text: "Pluto was called the ninth planet until 2006, when astronomers reclassified it as a dwarf planet because it has not cleared other objects from its orbit. Robotic spacecraft have now visited every planet, sending back photographs of worlds no human has seen in person." }
    ],
    funFact: "Venus spins backwards compared to the other planets, so there the Sun rises in the west and sets in the east.",
    tryThis: "Build a scale model with a 1 cm Sun. At that size Earth sits about 1 metre away and Neptune is 30 metres down the street. Distances in space are mostly empty.",
    words: [
      { word: "Solar system", meaning: "The Sun and everything held by its gravity." },
      { word: "Gas giant", meaning: "A huge planet made mostly of gas with no solid surface." },
      { word: "Dwarf planet", meaning: "A round object orbiting the Sun that has not cleared its orbit." },
      { word: "Atmosphere", meaning: "The layer of gases around a planet." }
    ],
    questions: [
      { q: "How many planets are in our solar system?", choices: ["Eight", "Five", "Twelve", "Twenty"], answer: 0 },
      { q: "Which planet is closest to the Sun?", choices: ["Mercury", "Earth", "Neptune", "Saturn"], answer: 0 },
      { q: "Which planet is farthest from the Sun?", choices: ["Neptune", "Mercury", "Mars", "Venus"], answer: 0 },
      { q: "What are the four outer planets made of?", choices: ["Gas", "Rock", "Ice cream", "Metal"], answer: 0 },
      { q: "Why does Mars look red?", choices: ["Its soil has rusty iron", "It is very hot", "It is covered in flowers", "It is painted"], answer: 0 },
      { q: "Which is the largest planet?", choices: ["Jupiter", "Earth", "Mars", "Mercury"], answer: 0 },
      { q: "What makes Earth special?", choices: ["Liquid water and living things", "Its rings", "Being closest to the Sun", "Being the biggest"], answer: 0 },
      { q: "What does \"orbit\" mean?", choices: ["To travel around something", "To spin very fast", "To glow brightly", "To fall down"], answer: 0 },
      { q: "Which planet comes right after Earth, going away from the Sun?", choices: ["Mars", "Venus", "Jupiter", "Mercury"], answer: 0 },
      { q: "The planets nearest the Sun are made of...", choices: ["Rock", "Gas", "Water", "Clouds"], answer: 0 }
    ]
  } },

  { id: "earth", title: "Our Planet Earth", emoji: "🌍",
    scene: ["🌍", "🌊", "🏔️"],
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🌍", text: "This is Earth. It is our home. From space it looks like a big blue marble." },
      { art: "🌊💙", text: "Why is it blue? Water! Most of Earth is covered by oceans. Splash, splash!" },
      { art: "🌳🏔️", text: "The green and brown parts are land. Mountains, forests, deserts, and the street where you live." },
      { art: "💨🫧", text: "Earth has air all around it. We breathe it in and out, all day and all night. Take a big breath now!" }
    ],
    funFact: "Earth is the only place we have ever found where anything is alive. Every person, animal, and plant we know of lives right here.",
    tryThis: "Spin a globe or a ball slowly with a lamp shining on one side. The lit part is daytime and the dark part is night, just like real Earth.",
    questions: [
      { q: "What is Earth?", choices: ["Our home planet", "A star", "A cloud"], answer: 0 },
      { q: "What are the blue parts of Earth?", choices: ["Oceans", "Forests", "Deserts"], answer: 0 },
      { q: "What do we breathe on Earth?", choices: ["Air", "Water", "Sand"], answer: 0 },
      { q: "Who lives on Earth?", choices: ["People, animals and plants", "Only robots", "Nobody"], answer: 0 },
      { q: "What colors is Earth from space?", choices: ["Blue and green", "Pink and purple", "Black and white"], answer: 0 },
      { q: "What shape is Earth?", choices: ["Round like a ball", "Flat like a plate", "Square like a block"], answer: 0 },
      { q: "The green and brown parts of Earth are...", choices: ["Land", "Water", "Sky"], answer: 0 },
      { q: "What do we drink on Earth?", choices: ["Water", "Lava", "Clouds"], answer: 0 },
      { q: "Where is Earth?", choices: ["In space", "In the ocean", "In a box"], answer: 0 },
      { q: "Is Earth a good home for us?", choices: ["Yes, perfect", "No, too cold", "No, too small"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🌍3️⃣", text: "Earth is the third planet from the Sun and, so far, the only world known to hold life. It sits in what scientists call the habitable zone, the band of distance where a planet is neither so hot that water boils away nor so cold that it all freezes." },
      { art: "🌊7️⃣0️⃣", text: "About 70 percent of the surface is ocean, which is why we look blue from space. Yet all that water is a thin film: if Earth were the size of an apple, the oceans would be thinner than the apple's skin." },
      { art: "🥚🔥", text: "Earth has layers like an onion. The crust is the thin rocky shell we live on. Below it the mantle is hot rock that flows slowly over ages. At the centre sits a liquid outer core and a solid inner core of iron and nickel, hotter than the Sun's surface." },
      { art: "🧲🛡️", text: "Motion in that liquid iron core generates Earth's magnetic field, an invisible shield that deflects harmful particles streaming from the Sun. It also makes compass needles point north and paints the auroras near the poles." },
      { art: "🔄🌗", text: "Earth spins once every 24 hours, giving day and night, and completes one orbit of the Sun every 365.25 days. Those extra quarter days are why we add a leap day to February every four years." },
      { art: "🌬️🛡️", text: "The atmosphere is roughly 78 percent nitrogen and 21 percent oxygen, plus traces of other gases. It gives us air to breathe, blocks most ultraviolet radiation, burns up small meteors, and traps enough heat to keep the average temperature comfortable rather than freezing." }
    ],
    funFact: "Earth is not a perfect sphere. Its spin makes it bulge at the equator, so it is about 43 kilometres wider across the middle than pole to pole.",
    tryThis: "Weigh yourself, then look up your weight on other planets online. On Mars you would weigh about a third as much, because gravity depends on a planet's mass.",
    words: [
      { word: "Crust", meaning: "The thin outer rocky layer of Earth that we live on." },
      { word: "Mantle", meaning: "The thick layer of hot, slowly flowing rock under the crust." },
      { word: "Magnetic field", meaning: "The invisible force around Earth that shields us and moves compasses." },
      { word: "Habitable zone", meaning: "The distance from a star where liquid water can exist." }
    ],
    questions: [
      { q: "Which planet from the Sun is Earth?", choices: ["Third", "First", "Fifth", "Eighth"], answer: 0 },
      { q: "How much of Earth is covered by ocean?", choices: ["About 70 percent", "About 10 percent", "Exactly half", "All of it"], answer: 0 },
      { q: "What is the blanket of air around Earth called?", choices: ["The atmosphere", "The blanket-sphere", "The ocean", "The core"], answer: 0 },
      { q: "What makes day and night?", choices: ["Earth spinning", "The Sun turning off", "Clouds moving", "The Moon glowing"], answer: 0 },
      { q: "How long does Earth take to go around the Sun?", choices: ["One year", "One day", "One month", "One week"], answer: 0 },
      { q: "What layer of Earth do we stand on?", choices: ["The crust", "The core", "The mantle", "The atmosphere"], answer: 0 },
      { q: "What is at the very center of Earth?", choices: ["A super-hot metal core", "An empty cave", "An ocean", "Ice"], answer: 0 },
      { q: "Why does Earth look blue from space?", choices: ["Oceans cover most of it", "The sky paints it", "It is made of sapphire", "Blue trees grow there"], answer: 0 },
      { q: "What does the atmosphere give us?", choices: ["Oxygen to breathe", "Food to eat", "Light to see", "Music to hear"], answer: 0 },
      { q: "Earth is the only planet we know with...", choices: ["Life", "Rings", "Two suns", "Square mountains"], answer: 0 }
    ]
  } },

  { id: "day-night", title: "Day and Night", emoji: "🌗",
    scene: ["🌅", "🌍", "🌃"],
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🌍🔄", text: "Earth is always spinning. Round and round, slowly, like a very big top. You cannot feel it, but it never stops." },
      { art: "☀️🌍", text: "When our side of Earth turns toward the Sun, we get sunshine. That is daytime! Time to play." },
      { art: "🌍🌑", text: "When our side turns away, the Sun cannot reach us. That is nighttime. Dark and quiet. Time to sleep." },
      { art: "🌅🌇", text: "The Sun is not really moving up and down. WE are the ones turning. Isn't that funny?" }
    ],
    funFact: "Right now, while you are getting ready for bed, kids on the other side of the world are eating breakfast!",
    tryThis: "Ask a grown-up to shine a torch on a ball while you slowly turn the ball. Watch how one side lights up and the other goes dark. That is exactly how day and night work.",
    questions: [
      { q: "Why do we have day and night?", choices: ["Earth is spinning", "The Sun turns off", "The Moon covers us"], answer: 0 },
      { q: "When our side faces the Sun, it is...", choices: ["Daytime", "Nighttime", "Snowing"], answer: 0 },
      { q: "When our side turns away from the Sun, it is...", choices: ["Nighttime", "Daytime", "Lunchtime"], answer: 0 },
      { q: "What spins like a top?", choices: ["The Earth", "Your bed", "The Moon only"], answer: 0 },
      { q: "When is it bright outside?", choices: ["Daytime", "Nighttime", "Never"], answer: 0 },
      { q: "When do we see stars?", choices: ["At night", "At noon", "At breakfast"], answer: 0 },
      { q: "What do most people do at night?", choices: ["Sleep", "Go to school", "Have a picnic"], answer: 0 },
      { q: "The Sun seems to rise in the...", choices: ["Morning", "Night", "Middle of dinner"], answer: 0 },
      { q: "Does the Sun really turn off at night?", choices: ["No, Earth just turns away", "Yes, it sleeps", "Yes, it has a switch"], answer: 0 },
      { q: "When the Sun sets, the sky gets...", choices: ["Dark", "Brighter", "Green"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🌍🔄", text: "Earth rotates on an imaginary line through its centre called its axis, completing one full turn every 24 hours. At the equator that means the ground you stand on is moving at about 1,670 kilometres per hour, though you feel nothing because everything around you moves with it." },
      { art: "☀️🌗", text: "Half of Earth always faces the Sun and half always faces away. As the planet turns, your location is carried from the lit half into the dark half and back again. Sunrise and sunset are not the Sun moving; they are you being rotated into and out of the light." },
      { art: "🗺️🕐", text: "Because different places face the Sun at different moments, the world is divided into 24 time zones, each roughly 15 degrees of longitude wide. When it is noon in Los Angeles it is already evening in London and the next morning in Tokyo." },
      { art: "🌅🎨", text: "Sunrises and sunsets glow red and orange because sunlight passes through much more atmosphere when the Sun is low. Air scatters blue light away, leaving the longer red and orange wavelengths to reach your eyes." },
      { art: "🐦🦉", text: "Life keeps time by this cycle. Your body runs an internal clock called a circadian rhythm that makes you sleepy at night and alert by day. Flowers open and close, and nocturnal animals like owls and bats flip the schedule entirely." },
      { art: "❄️☀️", text: "Day length is not always equal. Because Earth is tilted, summer days are long and winter days are short, and the effect grows stronger near the poles. Above the Arctic Circle the Sun can stay up for weeks in summer and never rise for weeks in winter." }
    ],
    funFact: "Earth's spin is very slowly slowing down. 400 million years ago a day was about 22 hours long, and the year had 400 days in it.",
    tryThis: "For one week, note the exact sunrise and sunset time each day. You will see the day length creeping longer or shorter by a minute or two, depending on the season.",
    words: [
      { word: "Axis", meaning: "The imaginary line a planet spins around." },
      { word: "Rotation", meaning: "One complete spin of a planet on its axis." },
      { word: "Time zone", meaning: "A region of Earth that shares the same clock time." },
      { word: "Circadian rhythm", meaning: "The body's natural 24-hour sleep and wake clock." }
    ],
    questions: [
      { q: "What is the invisible line Earth spins on called?", choices: ["Its axis", "Its equator", "Its orbit", "Its belt"], answer: 0 },
      { q: "How long does one full spin of Earth take?", choices: ["24 hours", "24 minutes", "24 days", "1 hour"], answer: 0 },
      { q: "When it is morning here, on the other side of the world it is...", choices: ["Evening", "Also morning", "Always winter", "Lunchtime"], answer: 0 },
      { q: "What causes sunrise?", choices: ["Your part of Earth turning toward the Sun", "The Sun jumping up", "Clouds lifting the Sun", "The Moon pushing the Sun"], answer: 0 },
      { q: "Does the Sun really move across our sky?", choices: ["No, Earth is spinning", "Yes, it flies around", "Yes, it swims", "Only on weekends"], answer: 0 },
      { q: "The side of Earth facing the Sun has...", choices: ["Daytime", "Nighttime", "Winter", "Rain"], answer: 0 },
      { q: "One day and night together make how many hours?", choices: ["24", "12", "48", "100"], answer: 0 },
      { q: "What word means \"to spin\"?", choices: ["Rotate", "Float", "Orbit", "Melt"], answer: 0 },
      { q: "When your part of Earth turns away from the Sun you see a...", choices: ["Sunset", "Sunrise", "Rainbow", "Eclipse every time"], answer: 0 },
      { q: "Why do other countries have different times than us?", choices: ["Earth's spin lights them at different moments", "They use broken clocks", "Their sun is different", "They like different numbers"], answer: 0 }
    ]
  } },

  { id: "seasons", title: "The Seasons", emoji: "🍂",
    scene: ["🌸", "☀️", "🍂", "⛄"],
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🌸🌱", text: "In spring, the world wakes up. Flowers pop open. Baby birds hatch. Everything turns green!" },
      { art: "☀️🏖️", text: "In summer it is hot and sunny. Long days for playing outside. Ice cream, swimming, splash!" },
      { art: "🍂🍁", text: "In fall, the leaves turn orange and red. They twirl down from the trees. Crunch, crunch under your feet!" },
      { art: "⛄❄️", text: "In winter it gets cold. Trees are bare. In some places snow falls. Time for warm coats and cozy socks." }
    ],
    funFact: "The seasons happen because Earth leans over a little as it travels around the Sun. It is a tilted spinning top!",
    tryThis: "Pick one tree near your home. Draw it once every month for a year. Your drawings will show the seasons changing.",
    questions: [
      { q: "How many seasons are in a year?", choices: ["Four", "Two", "Ten"], answer: 0 },
      { q: "When do flowers bloom?", choices: ["Spring", "Winter", "Never"], answer: 0 },
      { q: "Which season is hot and sunny?", choices: ["Summer", "Winter", "Fall"], answer: 0 },
      { q: "When do leaves turn orange and fall down?", choices: ["Fall", "Spring", "Summer"], answer: 0 },
      { q: "Which season can bring snow?", choices: ["Winter", "Summer", "Spring"], answer: 0 },
      { q: "When are many baby animals born?", choices: ["Spring", "Winter", "Midnight"], answer: 0 },
      { q: "What do you wear in winter?", choices: ["A warm coat", "A swimsuit", "Sunglasses only"], answer: 0 },
      { q: "Which season is best for the beach?", choices: ["Summer", "Winter", "Fall"], answer: 0 },
      { q: "What season comes after summer?", choices: ["Fall", "Spring", "Another summer"], answer: 0 },
      { q: "What color do fall leaves turn?", choices: ["Orange and red", "Blue", "Pink and purple"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🌍↗️", text: "Earth is tilted 23.5 degrees on its axis, and that single fact creates the seasons. As our planet circles the Sun, the tilt stays pointed the same way in space, so each half of Earth takes turns leaning toward the Sun and away from it." },
      { art: "☀️📐", text: "A common myth is that summer happens when Earth is closer to the Sun. It is not. What matters is angle. When your hemisphere leans toward the Sun, sunlight strikes more directly and concentrates its energy on a smaller patch of ground, heating it more." },
      { art: "⏱️🌞", text: "Leaning toward the Sun also means more hours of daylight. Summer days are longer, giving the ground extra time to absorb heat and less time to cool overnight. Winter reverses both effects: shallow-angle light and short days." },
      { art: "🌏🔄", text: "The two hemispheres are always opposite. When it is July and hot in California, it is midwinter in Australia and Argentina. Christmas in Sydney happens at the beach." },
      { art: "📅🌗", text: "Four dates mark the turning points. The summer solstice is the longest day, the winter solstice the shortest, and the two equinoxes in spring and autumn have day and night nearly equal everywhere on Earth." },
      { art: "🍁🐻", text: "Life adapts to the cycle. Trees drop their leaves to save water and energy through winter. Birds migrate thousands of kilometres. Bears hibernate. Near the equator, where the angle barely changes, there are no four seasons at all, just wet and dry." }
    ],
    funFact: "Earth is actually closest to the Sun in early January, during northern winter. The tilt beats the distance completely.",
    tryThis: "Shine a torch straight down on graph paper, then tilt it. Count the squares the light covers. The tilted beam spreads the same energy over more squares, which is exactly why winter is colder.",
    words: [
      { word: "Tilt", meaning: "The lean of Earth's axis, 23.5 degrees." },
      { word: "Hemisphere", meaning: "Half of Earth, north or south of the equator." },
      { word: "Solstice", meaning: "The longest or shortest day of the year." },
      { word: "Equinox", meaning: "A day when daytime and nighttime are nearly equal." }
    ],
    questions: [
      { q: "What causes the seasons?", choices: ["Earth's tilt as it orbits the Sun", "The Sun getting hotter and colder", "Clouds blocking the Sun", "The Moon's shadow"], answer: 0 },
      { q: "When your half of Earth leans toward the Sun, you get...", choices: ["Summer", "Winter", "Fall", "Midnight"], answer: 0 },
      { q: "When your half leans away from the Sun, you get...", choices: ["Winter", "Summer", "More birthdays", "Spring"], answer: 0 },
      { q: "When it is summer in America, in Australia it is...", choices: ["Winter", "Also summer", "Spring", "Always raining"], answer: 0 },
      { q: "How long does Earth take to travel around the Sun?", choices: ["One year", "One day", "One month", "Ten years"], answer: 0 },
      { q: "Summer days are...", choices: ["Long and warm", "Short and cold", "Always rainy", "The same as winter"], answer: 0 },
      { q: "Which seasons come between summer and winter?", choices: ["Fall and spring", "Only summer", "Rainy and snowy", "June and July"], answer: 0 },
      { q: "Earth spins while leaning like a...", choices: ["Tilted spinning top", "Flat pancake", "Bouncing ball", "Straight pencil"], answer: 0 },
      { q: "In winter, days are...", choices: ["Shorter", "Longer", "Exactly 24 hours of sunlight", "Backwards"], answer: 0 },
      { q: "Why does summer feel hotter?", choices: ["Sunlight hits your half more directly", "Earth moves much closer to the Sun", "The Sun grows bigger", "More people use ovens"], answer: 0 }
    ]
  } },

  { id: "water-cycle", title: "The Water Cycle", emoji: "💧",
    scene: ["🌊", "☁️", "🌧️", "🏞️"],
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "☀️🌊", text: "The Sun shines on the sea and warms the water. Tiny bits of water float up into the sky. Up, up, up!" },
      { art: "☁️💧", text: "High in the sky it is cold. The water bits squeeze together and make clouds. Clouds are full of water drops." },
      { art: "🌧️☁️", text: "The cloud gets heavy, heavy, heavy. Then the water falls back down. Drip, drop, rain!" },
      { art: "🏞️🔄", text: "Rain fills the rivers. Rivers run back to the sea. Then the Sun warms it again. Round and round, forever!" }
    ],
    funFact: "Earth never makes new water. The water in your cup might have been rain on a dinosaur's head long, long ago!",
    tryThis: "Put a little warm water in a clear cup, cover the top with plastic wrap, and set it in the sun. Watch drops form on the plastic. You just made rain.",
    questions: [
      { q: "What warms up the sea water?", choices: ["The Sun", "The Moon", "A heater"], answer: 0 },
      { q: "What do the tiny bits of water become up high?", choices: ["Clouds", "Birds", "Balloons"], answer: 0 },
      { q: "What falls when clouds get heavy?", choices: ["Rain", "Leaves", "Candy"], answer: 0 },
      { q: "Where does rain water go next?", choices: ["Back to rivers and seas", "To the Moon", "It disappears forever"], answer: 0 },
      { q: "The water journey is called the water...", choices: ["Cycle", "Slide", "Party"], answer: 0 },
      { q: "Does the water cycle ever stop?", choices: ["No, it goes around and around", "Yes, on Tuesdays", "Yes, in summer"], answer: 0 },
      { q: "Where does the water float up from?", choices: ["The sea", "The clouds", "Your cup only"], answer: 0 },
      { q: "What are clouds made of?", choices: ["Tiny drops of water", "Cotton candy", "Feathers"], answer: 0 },
      { q: "Rain falls from...", choices: ["Clouds", "Trees", "The Sun"], answer: 0 },
      { q: "What fills up rivers and lakes?", choices: ["Rain", "Sand", "Wind"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🔄💧", text: "Earth's water is never created or destroyed; it simply moves between ocean, air, land, and living things in an endless loop called the water cycle. The Sun powers the whole thing, and gravity pulls everything back down." },
      { art: "☀️♨️", text: "Evaporation is step one. Solar heat gives water molecules enough energy to break free of the liquid surface and rise as water vapour, an invisible gas. Oceans supply about 86 percent of it. Plants add more through their leaves, a process called transpiration." },
      { art: "☁️🧊", text: "Condensation is step two. As vapour rises it cools, and cooler air cannot hold as much moisture. The vapour condenses onto microscopic dust particles, forming the droplets and ice crystals we see as clouds." },
      { art: "🌧️❄️", text: "Precipitation is step three. Droplets collide and merge until they are too heavy for rising air to support, then fall as rain, snow, sleet, or hail. A single raindrop can contain a million cloud droplets." },
      { art: "🏞️⛰️", text: "Collection is step four. Water runs downhill into streams and rivers, soaks into the ground to become groundwater, or freezes into glaciers and ice caps. Eventually most of it returns to the ocean and the cycle repeats." },
      { art: "🚰🌍", text: "Only about 3 percent of Earth's water is fresh, and most of that is locked in ice or deep underground. The water cycle is what continuously refills the rivers, lakes, and aquifers that every farm and city depends on." }
    ],
    funFact: "A water molecule spends on average about 9 days in the atmosphere, but can stay locked in an Antarctic glacier for hundreds of thousands of years.",
    tryThis: "Measure rainfall. Put a straight-sided jar outside away from trees and buildings, and record the depth after each rain. Keep a month's log and compare it to the forecast totals.",
    words: [
      { word: "Evaporation", meaning: "Liquid water turning into invisible water vapour." },
      { word: "Condensation", meaning: "Water vapour cooling back into liquid droplets." },
      { word: "Precipitation", meaning: "Water falling from clouds as rain, snow, sleet, or hail." },
      { word: "Groundwater", meaning: "Water stored underground in soil and rock." }
    ],
    questions: [
      { q: "What is it called when the Sun turns water into vapor?", choices: ["Evaporation", "Condensation", "Precipitation", "Decoration"], answer: 0 },
      { q: "What is it called when vapor turns into cloud droplets?", choices: ["Condensation", "Evaporation", "Inflation", "Migration"], answer: 0 },
      { q: "What is falling rain or snow called?", choices: ["Precipitation", "Evaporation", "Condensation", "Vibration"], answer: 0 },
      { q: "What is water vapor?", choices: ["Water as an invisible gas", "Frozen water", "Dirty water", "Blue smoke"], answer: 0 },
      { q: "What powers the water cycle?", choices: ["The Sun", "The wind only", "Electricity", "The Moon"], answer: 0 },
      { q: "Why do droplets fall from clouds?", choices: ["They grow too heavy", "They get bored", "The wind pushes them down", "Birds knock them off"], answer: 0 },
      { q: "After rain falls, how does water get back to the ocean?", choices: ["It flows through rivers", "It jumps", "People carry it", "It evaporates upward"], answer: 0 },
      { q: "Water vapor rises and then...", choices: ["Cools down", "Heats up", "Turns to stone", "Catches fire"], answer: 0 },
      { q: "Is Earth's water new or recycled?", choices: ["Recycled again and again", "Brand new every day", "Delivered from Mars", "Made in factories"], answer: 0 },
      { q: "Snow is part of which step of the cycle?", choices: ["Precipitation", "Condensation", "Evaporation", "Rotation"], answer: 0 }
    ]
  } },

  { id: "clouds", title: "Clouds", emoji: "☁️",
    scene: ["☁️", "⛅", "🌥️"],
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "☁️", text: "Look up! Clouds float across the sky. They look soft like cotton, but you cannot sit on one." },
      { art: "💧💧💧", text: "A cloud is made of millions and millions of tiny water drops. So small that they float on the air." },
      { art: "⛅😊", text: "Fluffy white clouds mean nice weather. Good day for the park!" },
      { art: "🌧️☁️", text: "Dark gray clouds are heavy with water. They are getting ready to rain. Better bring an umbrella!" }
    ],
    funFact: "Clouds are shape-shifters. Watch one for a few minutes and it will slowly turn into something new. Can you spot a dragon or a bunny up there?",
    tryThis: "Lie on the grass on a cloudy day and find three cloud shapes. Draw what you saw and give each one a name.",
    questions: [
      { q: "What are clouds made of?", choices: ["Tiny water drops", "Cotton", "Marshmallows"], answer: 0 },
      { q: "What do dark gray clouds bring?", choices: ["Rain", "Sunshine", "Candy"], answer: 0 },
      { q: "Fluffy white clouds mean...", choices: ["Nice weather", "A storm", "Snow for sure"], answer: 0 },
      { q: "Where do clouds float?", choices: ["In the sky", "In the sea", "Under your bed"], answer: 0 },
      { q: "Can clouds look like animal shapes?", choices: ["Yes, sometimes", "No, never", "Only like cats"], answer: 0 },
      { q: "Which cloud is full of water?", choices: ["A dark gray one", "A tiny white one", "There is no such cloud"], answer: 0 },
      { q: "Are clouds hard or soft-looking?", choices: ["Soft and fluffy", "Hard like rocks", "Sharp like knives"], answer: 0 },
      { q: "What moves clouds across the sky?", choices: ["The wind", "Birds pushing them", "Cars"], answer: 0 },
      { q: "Can you sit on a cloud?", choices: ["No, you would fall through", "Yes, like a chair", "Only on Sundays"], answer: 0 },
      { q: "What color are rain clouds?", choices: ["Dark gray", "Pink", "Green"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "☁️🔬", text: "A cloud forms when rising air cools to its dew point and water vapour condenses onto tiny floating particles of dust, salt, or pollen, called condensation nuclei. Billions of droplets, each far thinner than a hair, together become visible as a cloud." },
      { art: "☁️🤍", text: "Clouds look white because their droplets scatter all colours of sunlight equally. A cloud turns grey when it grows thick enough that less light makes it through to your eyes, which is why rain clouds look so dark underneath." },
      { art: "🌤️", text: "Cumulus clouds are the puffy cotton-ball type, formed by warm air rising in columns on fair days. Stratus clouds spread in flat grey sheets close to the ground and bring drizzle. Fog is simply stratus cloud that has formed at ground level." },
      { art: "🪶🧊", text: "Cirrus clouds are the thin wispy streaks high above 6,000 metres, made entirely of ice crystals because it is so cold up there. They often appear a day or two before a weather front arrives, so they are a useful early warning." },
      { art: "⛈️🗻", text: "Cumulonimbus are the giants, sometimes towering 12 kilometres from base to anvil-shaped top. Inside, violent updrafts and downdrafts create thunder, lightning, hail, and occasionally tornadoes. Pilots steer well around them." },
      { art: "🌡️🌍", text: "Clouds are a major part of Earth's climate machine. Bright cloud tops reflect sunlight back to space and cool the planet, while at night clouds trap heat rising from the ground and keep us warmer. Predicting that balance is one of the hardest problems in climate science." }
    ],
    funFact: "An average cumulus cloud weighs roughly 500,000 kilograms, about the same as 100 elephants. It floats because that weight is spread across trillions of droplets in a huge volume of air.",
    tryThis: "Keep a cloud journal for two weeks. Sketch the clouds each morning, name the type, and note the weather that follows. You will start predicting rain before the forecast does.",
    words: [
      { word: "Condensation nuclei", meaning: "Tiny particles that water droplets form around." },
      { word: "Cumulus", meaning: "Puffy, cotton-like fair weather clouds." },
      { word: "Cirrus", meaning: "Thin, wispy, high clouds made of ice crystals." },
      { word: "Cumulonimbus", meaning: "Towering storm clouds that bring thunder and lightning." }
    ],
    questions: [
      { q: "Which clouds look like fluffy cotton?", choices: ["Cumulus", "Stratus", "Cirrus", "Cumulonimbus"], answer: 0 },
      { q: "Which clouds are thin, wispy and made of ice crystals?", choices: ["Cirrus", "Cumulus", "Stratus", "Fog"], answer: 0 },
      { q: "Which giant clouds bring thunderstorms?", choices: ["Cumulonimbus", "Cirrus", "Small cumulus", "None"], answer: 0 },
      { q: "What is fog?", choices: ["A cloud at ground level", "Smoke from cars", "Cold sunshine", "Invisible rain"], answer: 0 },
      { q: "Clouds form when water vapor...", choices: ["Cools and condenses", "Heats and burns", "Freezes into rocks", "Disappears"], answer: 0 },
      { q: "Flat gray layer clouds are called...", choices: ["Stratus", "Cumulus", "Cirrus", "Nimbus giants"], answer: 0 },
      { q: "Cumulus clouds usually mean...", choices: ["Fair weather", "A tornado", "Heavy snow", "An eclipse"], answer: 0 },
      { q: "What are clouds made of?", choices: ["Tiny droplets or ice crystals", "Cotton fibers", "Steam from kettles only", "Dust only"], answer: 0 },
      { q: "Where are cirrus clouds found?", choices: ["Very high in the sky", "At ground level", "Under the ocean", "Inside caves"], answer: 0 },
      { q: "A cumulonimbus cloud can bring...", choices: ["Thunder and lightning", "Only sunshine", "Rainbows only", "Falling stars"], answer: 0 }
    ]
  } },

  { id: "rain-snow", title: "Rain and Snow", emoji: "🌧️",
    scene: ["🌧️", "❄️", "⛄"],
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🌧️", text: "Pitter patter! Rain is water falling from the clouds. It makes puddles for jumping in." },
      { art: "🌱🌳", text: "Plants need rain to drink. Rain fills the rivers and lakes too. Rain is a gift for the whole world." },
      { art: "❄️⛄", text: "When the air is very very cold, the water freezes on the way down. Then we get snow instead of rain!" },
      { art: "❄️🔍", text: "Every snowflake has six sides. And here is the amazing part: no two snowflakes are exactly the same. Every single one is special." }
    ],
    funFact: "Raindrops are not tear-shaped like in drawings. Falling raindrops are actually round on top and flat underneath, a bit like a tiny hamburger bun!",
    tryThis: "Next time it snows, catch a flake on a dark piece of paper or a cold mitten and look closely. Can you count the six arms?",
    questions: [
      { q: "What is rain?", choices: ["Water falling from clouds", "Juice from the sky", "Tears of birds"], answer: 0 },
      { q: "What does rain help plants do?", choices: ["Drink and grow", "Fly", "Sing"], answer: 0 },
      { q: "When does snow fall instead of rain?", choices: ["When it is very cold", "When it is hot", "At every birthday"], answer: 0 },
      { q: "What are snowflakes?", choices: ["Tiny ice stars", "Little feathers", "White sand"], answer: 0 },
      { q: "What can you build with snow?", choices: ["A snowman", "A sandcastle", "A campfire"], answer: 0 },
      { q: "What fun thing does rain make on the ground?", choices: ["Puddles", "Mountains", "Rainbows on grass"], answer: 0 },
      { q: "What color is snow?", choices: ["White", "Red", "Yellow"], answer: 0 },
      { q: "Are all snowflakes the same?", choices: ["No, each one is different", "Yes, all the same", "They are invisible"], answer: 0 },
      { q: "What keeps you dry in the rain?", choices: ["An umbrella", "A spoon", "A balloon"], answer: 0 },
      { q: "Is snow warm or cold?", choices: ["Cold", "Warm", "Hot like soup"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "💧➕💧", text: "Cloud droplets are far too light to fall; they need to grow about a million times in volume first. They do this by colliding and merging, or by water vapour freezing onto ice crystals which then grow, fall, and melt on the way down." },
      { art: "🌧️⚡", text: "Raindrops reach the ground at 8 to 32 kilometres per hour depending on size. Air resistance flattens their bottoms, and if a drop grows beyond about 5 millimetres it breaks apart into smaller drops on the way down." },
      { art: "❄️6️⃣", text: "Snowflakes always have six-fold symmetry because of how water molecules bond when they freeze. The exact shape depends on the temperature and humidity the flake passes through, and since no two take an identical path, no two look alike." },
      { art: "🧊⚪", text: "Other forms exist. Sleet is rain that refreezes into pellets on the way down. Freezing rain stays liquid until it touches a cold surface, coating everything in ice. Hail forms in thunderstorms as updrafts carry ice up and down repeatedly, adding layers like an onion." },
      { art: "🌾🚜", text: "Precipitation is the foundation of agriculture and drinking water. Farmers depend on rain arriving at the right time, not just in the right amount. Mountain snowpack acts as a natural reservoir, releasing meltwater slowly through spring and summer." },
      { art: "🌊🏜️", text: "Too much at once causes flooding, which kills more people worldwide than any other weather event. Too little over a long period causes drought, which shrinks harvests and drains reservoirs. Both are becoming more extreme as the climate warms." }
    ],
    funFact: "The wettest place on Earth, Mawsynram in India, gets about 11,800 millimetres of rain a year. Parts of Chile's Atacama Desert have gone centuries without measurable rainfall.",
    tryThis: "Compare a 1 centimetre rainfall to a snowfall. Roughly 10 centimetres of typical snow melts down to just 1 centimetre of water, because snow is mostly trapped air.",
    words: [
      { word: "Sleet", meaning: "Rain that freezes into small ice pellets before landing." },
      { word: "Hail", meaning: "Balls of ice grown in layers inside a thunderstorm." },
      { word: "Snowpack", meaning: "Snow that builds up on mountains and melts slowly in spring." },
      { word: "Drought", meaning: "A long period with far too little rain." }
    ],
    questions: [
      { q: "What do we call water falling from clouds?", choices: ["Precipitation", "Evaporation", "Condensation", "Hydration"], answer: 0 },
      { q: "How do raindrops form?", choices: ["Tiny droplets join until heavy", "Clouds squeeze themselves", "The wind makes them", "Stars melt"], answer: 0 },
      { q: "How many sides does a snowflake have?", choices: ["Six", "Four", "Ten", "Three"], answer: 0 },
      { q: "When does snow form instead of rain?", choices: ["When the air is freezing", "When it is windy", "Only at night", "When clouds are white"], answer: 0 },
      { q: "What is a flood?", choices: ["Too much rain at once", "A dry spell", "A big snowman", "A type of cloud"], answer: 0 },
      { q: "What is a drought?", choices: ["A long time with too little rain", "A heavy snowstorm", "A river", "A rainbow"], answer: 0 },
      { q: "Are any two snowflakes exactly alike?", choices: ["No", "Yes, all of them", "Only twins", "Only in January"], answer: 0 },
      { q: "What refills rivers and underground water?", choices: ["Rain and melted snow", "The ocean climbing up", "Trucks", "Wind"], answer: 0 },
      { q: "Snowflakes are made of...", choices: ["Ice crystals", "Frozen milk", "White sand", "Cloud fur"], answer: 0 },
      { q: "Why do farmers need rain?", choices: ["To water their crops", "To wash tractors", "To make mud pies", "To cool the sun"], answer: 0 }
    ]
  } },

  { id: "wind", title: "Wind", emoji: "🌬️",
    scene: ["🌬️", "🍃", "🪁"],
    video: { young: "", older: "" },
  young: {
    story: "Wind is air that is moving. You cannot see wind, but you can feel it on your face and see it move the trees. Wind can fly a kite, push a sailboat, and make leaves dance. Strong wind is called a storm wind, and soft wind is called a breeze!",
    questions: [
      { q: "What is wind?", choices: ["Moving air", "Falling water", "Hot sand"], answer: 0 },
      { q: "Can you see the wind?", choices: ["No, but you can feel it", "Yes, it is blue", "Yes, it is sparkly"], answer: 0 },
      { q: "What can wind fly high in the sky?", choices: ["A kite", "A rock", "A shoe"], answer: 0 },
      { q: "What is a soft, gentle wind called?", choices: ["A breeze", "A tornado", "A whisper-storm"], answer: 0 },
      { q: "What does wind make the leaves do?", choices: ["Dance and move", "Turn purple", "Sing songs"], answer: 0 },
      { q: "What does wind push across the water?", choices: ["Sailboats", "Mountains", "Houses"], answer: 0 },
      { q: "How does wind feel on your face?", choices: ["You can feel it blow", "Like warm soup", "Like nothing ever"], answer: 0 },
      { q: "What spins in the wind on some farms?", choices: ["Windmills", "Cows", "Barns"], answer: 0 },
      { q: "A very strong wind comes with a...", choices: ["Storm", "Sunny day", "Rainbow"], answer: 0 },
      { q: "What do you hear when wind blows hard?", choices: ["A whooshing sound", "A meow", "A beep"], answer: 0 }
    ]
  },
  older: {
    story: "Wind is air moving from one place to another. It happens because the Sun heats Earth unevenly: warm air rises, and cooler air rushes in to take its place. That rushing air is wind! Gentle winds are breezes, while very strong spinning winds can become tornadoes and hurricanes. People have used wind power for thousands of years to sail ships and turn windmills. Today, giant wind turbines turn wind into clean electricity for our homes.",
    questions: [
      { q: "What is wind?", choices: ["Air moving from place to place", "Water in the sky", "Sunlight bouncing", "Earth shaking"], answer: 0 },
      { q: "What starts the wind?", choices: ["The Sun heating Earth unevenly", "The Moon blowing", "Trees waving", "Cars driving fast"], answer: 0 },
      { q: "What does warm air do?", choices: ["Rises up", "Sinks down", "Freezes", "Stays still forever"], answer: 0 },
      { q: "What rushes in when warm air rises?", choices: ["Cooler air", "Hot lava", "Ocean water", "More sunshine"], answer: 0 },
      { q: "What do giant wind turbines make?", choices: ["Electricity", "Rain", "Flour", "Music"], answer: 0 },
      { q: "What is a very strong spinning wind called?", choices: ["A tornado", "A breeze", "A draft", "A sniffle"], answer: 0 },
      { q: "How did old ships cross the ocean?", choices: ["Wind pushed their sails", "Engines", "Giant paddles only", "Whales pulled them"], answer: 0 },
      { q: "A gentle wind is called a...", choices: ["Breeze", "Hurricane", "Blizzard", "Wave"], answer: 0 },
      { q: "Wind power is a source of...", choices: ["Clean energy", "Pollution", "Rain", "Heat from the core"], answer: 0 },
      { q: "What did windmills help people do long ago?", choices: ["Grind grain into flour", "Watch TV", "Charge phones", "Freeze food"], answer: 0 }
    ]
  } },

  { id: "thunder", title: "Thunder and Lightning", emoji: "⛈️",
    scene: ["⛈️", "⚡", "🌩️"],
    video: { young: "", older: "" },
  young: {
    story: "In a big storm, you might see lightning, a giant flash of electricity in the sky. After the flash comes thunder, a big rumbling BOOM! Lightning is very powerful, so during a storm we stay safe inside. Thunder cannot hurt you, it is just a loud sound!",
    questions: [
      { q: "What is lightning?", choices: ["A giant flash of electricity", "A falling star", "A camera flash"], answer: 0 },
      { q: "What sound comes after lightning?", choices: ["Thunder", "A meow", "Music"], answer: 0 },
      { q: "What does thunder sound like?", choices: ["A big rumbling boom", "A tiny squeak", "A whistle"], answer: 0 },
      { q: "Where should you stay during a storm?", choices: ["Safe inside", "On top of a hill", "In the pool"], answer: 0 },
      { q: "Can thunder hurt you?", choices: ["No, it is just a sound", "Yes, it bites", "Yes, it is sharp"], answer: 0 },
      { q: "When do we see lightning?", choices: ["During big storms", "On sunny days", "At breakfast"], answer: 0 },
      { q: "Which comes first, the flash or the boom?", choices: ["The flash", "The boom", "They race and tie"], answer: 0 },
      { q: "Lightning happens in the...", choices: ["Sky", "Ocean floor", "Basement"], answer: 0 },
      { q: "Is lightning powerful?", choices: ["Yes, very", "No, it is weak", "Only a little"], answer: 0 },
      { q: "What kind of clouds bring thunderstorms?", choices: ["Big dark clouds", "Tiny white clouds", "No clouds"], answer: 0 }
    ]
  },
  older: {
    story: "Inside a storm cloud, ice crystals and water droplets crash around and build up electric charge, like rubbing a balloon on your hair but millions of times stronger. When the charge grows big enough, it jumps as a giant spark: lightning! Lightning is five times hotter than the surface of the Sun, and it heats the air so fast that the air explodes outward, making the sound we call thunder. Light travels faster than sound, so we see the flash before we hear the boom. Counting the seconds between them tells you how far away the storm is!",
    questions: [
      { q: "What builds up inside a storm cloud?", choices: ["Electric charge", "Sand", "Bird feathers", "Warm honey"], answer: 0 },
      { q: "Lightning is like rubbing a balloon on your hair but...", choices: ["Millions of times stronger", "A little weaker", "Exactly the same", "Colder"], answer: 0 },
      { q: "How hot is lightning compared to the Sun's surface?", choices: ["Five times hotter", "Much colder", "The same", "Twice as cold"], answer: 0 },
      { q: "What makes the sound of thunder?", choices: ["Air exploding outward from the heat", "Clouds bumping heads", "Giants clapping", "Rain hitting rooftops"], answer: 0 },
      { q: "Why do we see lightning before hearing thunder?", choices: ["Light travels faster than sound", "Thunder is shy", "Our ears are slow", "Lightning is closer"], answer: 0 },
      { q: "Counting seconds between flash and boom tells you...", choices: ["How far the storm is", "The temperature", "What time it is", "How much rain will fall"], answer: 0 },
      { q: "What crashes around inside a storm cloud?", choices: ["Ice crystals and water droplets", "Rocks and pebbles", "Leaves and twigs", "Stars"], answer: 0 },
      { q: "A safe place during a thunderstorm is...", choices: ["Inside a building", "Under a tall tree", "In a swimming pool", "On a metal ladder"], answer: 0 },
      { q: "Lightning is a giant...", choices: ["Electric spark", "Water balloon", "Ice cube", "Gust of wind"], answer: 0 },
      { q: "What travels slower, light or sound?", choices: ["Sound", "Light", "They tie", "Neither moves"], answer: 0 }
    ]
  } },

  { id: "rainbows", title: "Rainbows", emoji: "🌈",
    scene: ["🌦️", "🌈", "☀️"],
    video: { young: "", older: "" },
  young: {
    story: "A rainbow is a big arch of colors in the sky. Rainbows appear when the Sun shines through raindrops. The colors are red, orange, yellow, green, blue, and purple. Look for a rainbow when the Sun comes out right after the rain!",
    questions: [
      { q: "What is a rainbow?", choices: ["An arch of colors in the sky", "A kind of bird", "A cloud hat"], answer: 0 },
      { q: "When do rainbows appear?", choices: ["When sun shines through raindrops", "Only at night", "When it snows"], answer: 0 },
      { q: "Which color is in the rainbow?", choices: ["Red", "Black", "Brown"], answer: 0 },
      { q: "What two things make a rainbow?", choices: ["Sun and rain", "Snow and wind", "Moon and stars"], answer: 0 },
      { q: "What shape is a rainbow?", choices: ["An arch", "A square", "A zigzag"], answer: 0 },
      { q: "When should you look for a rainbow?", choices: ["When sun comes out after rain", "At midnight", "During a nap"], answer: 0 },
      { q: "How many colors did our story say a rainbow has?", choices: ["Six", "One", "One hundred"], answer: 0 },
      { q: "Where do rainbows appear?", choices: ["In the sky", "Underground", "In your closet"], answer: 0 },
      { q: "Is green a rainbow color?", choices: ["Yes", "No", "Only on Mondays"], answer: 0 },
      { q: "Rainbows are...", choices: ["Colorful", "Invisible", "Loud"], answer: 0 }
    ]
  },
  older: {
    story: "Sunlight looks white, but it is actually a mix of every color. When sunlight passes through raindrops, each drop bends the light and splits it into its hidden colors, spreading them into an arc across the sky. The colors always appear in the same order: red, orange, yellow, green, blue, indigo, and violet. To see a rainbow, the Sun must be behind you and the rain in front of you. You can even make your own rainbow with a garden hose on a sunny day, because the spray works just like raindrops!",
    questions: [
      { q: "What is white sunlight really made of?", choices: ["A mix of every color", "Only white", "Only yellow", "Silver dust"], answer: 0 },
      { q: "What do raindrops do to sunlight?", choices: ["Bend and split it into colors", "Turn it off", "Freeze it", "Make it louder"], answer: 0 },
      { q: "How many colors are in a rainbow?", choices: ["Seven", "Three", "Twelve", "Two"], answer: 0 },
      { q: "Which color comes first at the top?", choices: ["Red", "Violet", "Green", "Blue"], answer: 0 },
      { q: "Where must the Sun be for you to see a rainbow?", choices: ["Behind you", "In front of you", "Underground", "Directly overhead at night"], answer: 0 },
      { q: "How can you make your own rainbow?", choices: ["Spray a hose on a sunny day", "Paint the sky", "Wait for snow", "Turn on a flashlight at noon"], answer: 0 },
      { q: "Do rainbow colors ever change their order?", choices: ["No, always the same order", "Yes, every time", "Only in winter", "Only at sea"], answer: 0 },
      { q: "Which color comes right after red?", choices: ["Orange", "Blue", "Violet", "Green"], answer: 0 },
      { q: "A rainbow spreads colors into what shape?", choices: ["An arc", "A square", "A straight line", "A spiral"], answer: 0 },
      { q: "What does indigo look like?", choices: ["Deep blue-purple", "Bright pink", "Light yellow", "Dark green"], answer: 0 }
    ]
  } },

  { id: "volcanoes", title: "Volcanoes", emoji: "🌋",
    scene: ["🌋", "🔥", "🏔️"],
    video: { young: "", older: "" },
  young: {
    story: "A volcano is a special mountain with a hole at the top. Deep under the ground there is super hot melted rock called lava. Sometimes the volcano erupts, and lava shoots out with smoke and ash! When lava cools down, it turns into hard black rock.",
    questions: [
      { q: "What is a volcano?", choices: ["A mountain with a hole at the top", "A kind of tree", "A big lake"], answer: 0 },
      { q: "What is the hot melted rock called?", choices: ["Lava", "Juice", "Mud"], answer: 0 },
      { q: "What happens when a volcano erupts?", choices: ["Lava shoots out", "It starts singing", "It rains candy"], answer: 0 },
      { q: "Where does lava come from?", choices: ["Deep under the ground", "The clouds", "The sea"], answer: 0 },
      { q: "What happens when lava cools?", choices: ["It becomes hard rock", "It becomes water", "It disappears"], answer: 0 },
      { q: "Is lava hot or cold?", choices: ["Super hot", "Freezing", "Just warm"], answer: 0 },
      { q: "What comes out with the lava?", choices: ["Smoke and ash", "Bubbles and balloons", "Snow"], answer: 0 },
      { q: "Should you go near an erupting volcano?", choices: ["No, stay far away", "Yes, to say hi", "Yes, with a spoon"], answer: 0 },
      { q: "What color is hot lava?", choices: ["Bright orange-red", "Blue", "Green"], answer: 0 },
      { q: "A volcano looks like a...", choices: ["Mountain", "Flower", "Cloud"], answer: 0 }
    ]
  },
  older: {
    story: "Deep beneath Earth's crust, rock is so hot that it melts into magma. A volcano is an opening where magma can escape to the surface; once it flows out, we call it lava. Some eruptions are slow rivers of lava, while others explode, blasting ash and rock high into the sky. Volcanoes build new land: the islands of Hawaii were made entirely by volcanoes rising from the sea floor! Scientists called volcanologists study volcanoes to warn people before eruptions. Old lava breaks down into rich soil where plants love to grow.",
    questions: [
      { q: "What is melted rock called while still underground?", choices: ["Magma", "Lava", "Mud", "Cement"], answer: 0 },
      { q: "What is melted rock called after it flows out?", choices: ["Lava", "Magma", "Sludge", "Tar"], answer: 0 },
      { q: "How were the Hawaiian islands made?", choices: ["By volcanoes rising from the sea floor", "By giant waves", "By earthquakes only", "People built them"], answer: 0 },
      { q: "What is a scientist who studies volcanoes called?", choices: ["A volcanologist", "A biologist", "An astronaut", "A dentist"], answer: 0 },
      { q: "What can explosive eruptions blast into the sky?", choices: ["Ash and rock", "Fish", "Ice cubes", "Leaves"], answer: 0 },
      { q: "Why do plants grow well near old volcanoes?", choices: ["Old lava becomes rich soil", "Lava waters them", "Ash is candy for plants", "Volcanoes sing to them"], answer: 0 },
      { q: "Where does magma come from?", choices: ["Deep beneath Earth's crust", "Inside clouds", "The ocean surface", "Falling stars"], answer: 0 },
      { q: "Why do volcanologists watch volcanoes?", choices: ["To warn people before eruptions", "To cook food", "To collect souvenirs", "To paint them"], answer: 0 },
      { q: "A volcano is an opening where what escapes?", choices: ["Magma", "Wind", "Rivers", "Sunlight"], answer: 0 },
      { q: "Some eruptions flow like slow...", choices: ["Rivers of lava", "Snowstorms", "Waterfalls of juice", "Clouds"], answer: 0 }
    ]
  } },

  { id: "earthquakes", title: "Earthquakes", emoji: "🫨",
    scene: ["🌍", "🫨", "🏠"],
    video: { young: "", older: "" },
  young: {
    story: "The ground under our feet can sometimes shake, and that is called an earthquake. It happens because big pieces of Earth deep underground push and slide against each other. Most earthquakes are tiny wiggles you cannot even feel. If the ground shakes hard, we drop down, cover our heads, and hold on to stay safe!",
    questions: [
      { q: "What is an earthquake?", choices: ["The ground shaking", "A big rainstorm", "A loud song"], answer: 0 },
      { q: "What pushes and slides deep underground?", choices: ["Big pieces of Earth", "Giant worms", "Sleepy bears"], answer: 0 },
      { q: "Are most earthquakes big or tiny?", choices: ["Tiny wiggles", "Always huge", "Medium loud"], answer: 0 },
      { q: "What do we do if the ground shakes hard?", choices: ["Drop, cover, and hold on", "Jump up and down", "Run in circles"], answer: 0 },
      { q: "Where do earthquakes start?", choices: ["Deep underground", "In the clouds", "In the sea foam"], answer: 0 },
      { q: "What should you cover in an earthquake?", choices: ["Your head", "Your shoes", "Your toys"], answer: 0 },
      { q: "Can we feel every earthquake?", choices: ["No, most are too small", "Yes, all of them", "Only on weekends"], answer: 0 },
      { q: "What shakes during an earthquake?", choices: ["The ground", "Only the sky", "Only water"], answer: 0 },
      { q: "Is hiding under a strong table safe in an earthquake?", choices: ["Yes", "No", "Only for cats"], answer: 0 },
      { q: "After the shaking stops, we should...", choices: ["Stay calm and check with grown-ups", "Go back to sleep right away", "Shake back"], answer: 0 }
    ]
  },
  older: {
    story: "Earth's crust is broken into giant puzzle pieces called tectonic plates that float on hot rock and move very slowly, about as fast as your fingernails grow. Where plates meet, they can get stuck; pressure builds for years, then suddenly they slip, sending shock waves through the ground. That is an earthquake! The spot where it starts is the epicenter, and scientists measure earthquake strength with the magnitude scale. Most quakes are too weak to feel, and scientists called seismologists use sensitive machines to detect them. In an earthquake, remember: drop, cover, and hold on.",
    questions: [
      { q: "What are the giant puzzle pieces of Earth's crust called?", choices: ["Tectonic plates", "Dinner plates", "Crust cookies", "Earth tiles"], answer: 0 },
      { q: "How fast do the plates move?", choices: ["About as fast as fingernails grow", "As fast as a car", "As fast as sound", "They never move"], answer: 0 },
      { q: "What causes an earthquake?", choices: ["Stuck plates suddenly slipping", "Heavy rain", "Loud thunder", "Too many trucks"], answer: 0 },
      { q: "What is the spot where an earthquake starts called?", choices: ["The epicenter", "The middle-spot", "The core", "The volcano"], answer: 0 },
      { q: "Who studies earthquakes?", choices: ["Seismologists", "Biologists", "Astronomers", "Chefs"], answer: 0 },
      { q: "What travels through the ground during a quake?", choices: ["Shock waves", "Rivers", "Wind", "Sunbeams"], answer: 0 },
      { q: "What scale measures earthquake strength?", choices: ["The magnitude scale", "The rainbow scale", "A kitchen scale", "The fish scale"], answer: 0 },
      { q: "What should you do during strong shaking?", choices: ["Drop, cover, and hold on", "Stand by a window", "Take the elevator", "Run outside immediately"], answer: 0 },
      { q: "Can we feel most earthquakes?", choices: ["No, most are too weak", "Yes, every single one", "Only children can", "Only at night"], answer: 0 },
      { q: "What do the plates float on?", choices: ["Hot rock", "Cold water", "Air", "Sand"], answer: 0 }
    ]
  } },

  { id: "mountains", title: "Mountains", emoji: "🏔️",
    scene: ["🏔️", "🦅", "🌲"],
    video: { young: "", older: "" },
  young: {
    story: "Mountains are giant hills of rock that reach up toward the sky. The tallest mountains have snow on top all year, even in summer! Mountain goats and eagles love living on mountains. The tallest mountain in the whole world is called Mount Everest.",
    questions: [
      { q: "What are mountains made of?", choices: ["Rock", "Jelly", "Paper"], answer: 0 },
      { q: "What is on top of the tallest mountains?", choices: ["Snow", "Sand", "Flowers only"], answer: 0 },
      { q: "What is the tallest mountain in the world?", choices: ["Mount Everest", "Mount Cupcake", "Bunny Hill"], answer: 0 },
      { q: "Which animal loves climbing mountains?", choices: ["Mountain goat", "Goldfish", "Penguin"], answer: 0 },
      { q: "Are mountains big or small?", choices: ["Very big", "Tiny", "Same as a chair"], answer: 0 },
      { q: "Which bird flies high near mountains?", choices: ["Eagle", "Chicken", "Duck"], answer: 0 },
      { q: "Mountains reach up toward the...", choices: ["Sky", "Ocean floor", "Basement"], answer: 0 },
      { q: "Is it warm or cold on top of tall mountains?", choices: ["Cold", "Very hot", "Same as the beach"], answer: 0 },
      { q: "What do people do on snowy mountains for fun?", choices: ["Ski", "Swim", "Surf"], answer: 0 },
      { q: "A mountain is like a giant...", choices: ["Hill", "Puddle", "Cloud"], answer: 0 }
    ]
  },
  older: {
    story: "Mountains form over millions of years, most often when Earth's tectonic plates crash slowly into each other and push the land upward, like a rug wrinkling when you push its ends together. The Himalayas, home of Mount Everest, are still growing a tiny bit every year! The higher you climb, the colder and thinner the air becomes, which is why tall peaks stay snowy. Mountains are also water towers of the world: their snow melts into rivers that billions of people drink from. The longest mountain range on land is the Andes in South America.",
    questions: [
      { q: "How do most mountains form?", choices: ["Plates crash and push land up", "Wind piles up dust", "Rivers stack rocks", "People build them"], answer: 0 },
      { q: "Which mountain range holds Mount Everest?", choices: ["The Himalayas", "The Andes", "The Rockies", "The Alps"], answer: 0 },
      { q: "Are the Himalayas still growing?", choices: ["Yes, a little every year", "No, they shrunk", "They finished long ago", "They grow only in spring"], answer: 0 },
      { q: "What happens to air as you climb higher?", choices: ["It gets colder and thinner", "It gets hotter", "It gets sweeter", "It turns to water"], answer: 0 },
      { q: "Why are mountains called water towers of the world?", choices: ["Their melting snow feeds rivers", "They hold big tanks", "They spray water", "Clouds live inside them"], answer: 0 },
      { q: "What is the longest mountain range on land?", choices: ["The Andes", "The Himalayas", "The Alps", "The Sahara"], answer: 0 },
      { q: "Mountain-building is like a rug...", choices: ["Wrinkling when pushed", "Flying away", "Melting", "Rolling flat"], answer: 0 },
      { q: "How long does mountain-building take?", choices: ["Millions of years", "One week", "A single day", "About a year"], answer: 0 },
      { q: "Why do tall peaks stay snowy?", choices: ["High air is very cold", "Snow machines run there", "The Sun skips them", "Snow is glued on"], answer: 0 },
      { q: "On which continent are the Andes?", choices: ["South America", "Africa", "Australia", "Europe"], answer: 0 }
    ]
  } },

  { id: "rivers", title: "Rivers and Lakes", emoji: "🏞️",
    scene: ["🏞️", "🦆", "🐟"],
    video: { young: "", older: "" },
  young: {
    story: "A river is water that flows across the land, always moving toward the sea. A lake is water with land all around it, like a big bowl of water. Fish, ducks, and frogs love living in rivers and lakes. Rivers start small in the mountains and grow bigger and bigger!",
    questions: [
      { q: "What is a river?", choices: ["Water flowing across the land", "A tall tree", "A sandy hill"], answer: 0 },
      { q: "What is a lake?", choices: ["Water with land all around it", "Water in the sky", "A dry field"], answer: 0 },
      { q: "Where do rivers flow to?", choices: ["The sea", "The clouds", "Up a mountain"], answer: 0 },
      { q: "Which animal lives in rivers?", choices: ["Fish", "Camel", "Lion"], answer: 0 },
      { q: "Where do rivers start small?", choices: ["In the mountains", "In the desert", "At the beach"], answer: 0 },
      { q: "Which bird swims on lakes?", choices: ["Duck", "Ostrich", "Chicken"], answer: 0 },
      { q: "Does river water move or stay still?", choices: ["It moves and flows", "It stays still forever", "It jumps"], answer: 0 },
      { q: "A lake is like a big bowl of...", choices: ["Water", "Sand", "Soup"], answer: 0 },
      { q: "Which jumping animal likes ponds and lakes?", choices: ["Frog", "Elephant", "Cat"], answer: 0 },
      { q: "What do rivers do as they travel?", choices: ["Grow bigger", "Get smaller", "Turn purple"], answer: 0 }
    ]
  },
  older: {
    story: "Rivers begin as tiny streams high in hills and mountains, fed by rain and melting snow. Streams join together and grow into rivers that carve valleys and canyons as they flow downhill toward the ocean. The Nile in Africa is the longest river in the world, and the Amazon in South America carries the most water. Lakes form where water collects in a low basin of land. Rivers and lakes give us drinking water, water our farms, and are home to fish, birds, turtles, and countless other creatures. That is why keeping them clean matters so much.",
    questions: [
      { q: "Where do rivers begin?", choices: ["As tiny streams in hills and mountains", "At the ocean", "In the clouds", "Under houses"], answer: 0 },
      { q: "What is the longest river in the world?", choices: ["The Nile", "The Amazon", "The Mississippi", "The Thames"], answer: 0 },
      { q: "Which river carries the most water?", choices: ["The Amazon", "The Nile", "The Colorado", "The Seine"], answer: 0 },
      { q: "What can rivers carve over time?", choices: ["Valleys and canyons", "Clouds", "Mountains upward", "Rainbows"], answer: 0 },
      { q: "Where does a lake form?", choices: ["Where water collects in a low basin", "On mountain tops only", "In the sky", "Inside volcanoes"], answer: 0 },
      { q: "Which way do rivers flow?", choices: ["Downhill toward the ocean", "Uphill", "In circles", "Straight up"], answer: 0 },
      { q: "What feeds mountain streams?", choices: ["Rain and melting snow", "Ocean waves", "Wind", "Tree sap"], answer: 0 },
      { q: "On which continent is the Nile?", choices: ["Africa", "Asia", "Europe", "Australia"], answer: 0 },
      { q: "Why should we keep rivers clean?", choices: ["We drink their water and animals live there", "Dirty water looks shiny", "Fish like trash", "It makes them flow faster"], answer: 0 },
      { q: "What happens when small streams join together?", choices: ["They grow into rivers", "They disappear", "They freeze", "They flow backward"], answer: 0 }
    ]
  } },

  { id: "oceans", title: "The Ocean", emoji: "🌊",
    scene: ["🌊", "🐋", "🐠"],
    video: { young: "", older: "" },
  young: {
    story: "The ocean is a giant sea of salty water that covers most of our planet. It is home to fish, dolphins, whales, and colorful coral. The ocean has waves that roll onto the beach, splash! Some parts of the ocean are so deep that sunlight cannot reach the bottom.",
    questions: [
      { q: "What kind of water is in the ocean?", choices: ["Salty water", "Sweet juice", "Warm milk"], answer: 0 },
      { q: "Which giant animal lives in the ocean?", choices: ["Whale", "Elephant", "Giraffe"], answer: 0 },
      { q: "What rolls onto the beach?", choices: ["Waves", "Rocks", "Clouds"], answer: 0 },
      { q: "Can sunlight reach the deepest ocean?", choices: ["No, it is too deep", "Yes, easily", "Only at noon"], answer: 0 },
      { q: "What colorful thing grows in the ocean?", choices: ["Coral", "Roses", "Pumpkins"], answer: 0 },
      { q: "How much of our planet does the ocean cover?", choices: ["Most of it", "A tiny bit", "None of it"], answer: 0 },
      { q: "Which smart, jumping animal swims in the sea?", choices: ["Dolphin", "Puppy", "Kitten"], answer: 0 },
      { q: "Should we drink ocean water?", choices: ["No, it is too salty", "Yes, it is yummy", "Only with a straw"], answer: 0 },
      { q: "What sound do waves make?", choices: ["Splash", "Moo", "Beep"], answer: 0 },
      { q: "Where do fish live?", choices: ["In the water", "In trees", "In caves on land"], answer: 0 }
    ]
  },
  older: {
    story: "The ocean covers about 70 percent of Earth and holds 97 percent of all its water. There are five oceans: the Pacific, Atlantic, Indian, Arctic, and Southern, and the Pacific is by far the biggest. The deepest known spot, the Mariana Trench, is deeper than Mount Everest is tall! Ocean water is salty because rivers carry tiny bits of salt from rocks into the sea over millions of years. The ocean makes much of the oxygen we breathe, thanks to tiny floating plants called phytoplankton, and it is home to creatures from tiny seahorses to the blue whale, the largest animal that has ever lived.",
    questions: [
      { q: "How many oceans does Earth have?", choices: ["Five", "Two", "Ten", "One"], answer: 0 },
      { q: "Which ocean is the biggest?", choices: ["The Pacific", "The Atlantic", "The Arctic", "The Indian"], answer: 0 },
      { q: "What is the deepest known spot in the ocean?", choices: ["The Mariana Trench", "The Grand Canyon", "Lake Superior", "The Nile Delta"], answer: 0 },
      { q: "Why is the ocean salty?", choices: ["Rivers carry salt from rocks into it", "Fish add salt", "People pour salt in", "Rain is salty"], answer: 0 },
      { q: "What makes much of the oxygen we breathe?", choices: ["Phytoplankton in the ocean", "Sharks", "Sea shells", "Waves"], answer: 0 },
      { q: "What is the largest animal that has ever lived?", choices: ["The blue whale", "The elephant", "T-rex", "The great white shark"], answer: 0 },
      { q: "How much of Earth's water is in the ocean?", choices: ["97 percent", "Half", "10 percent", "25 percent"], answer: 0 },
      { q: "The Mariana Trench is deeper than what is tall?", choices: ["Mount Everest", "A house", "The Eiffel Tower", "A redwood tree"], answer: 0 },
      { q: "What are phytoplankton?", choices: ["Tiny floating ocean plants", "Baby whales", "Sea rocks", "Salt crystals"], answer: 0 },
      { q: "How much of Earth does the ocean cover?", choices: ["About 70 percent", "About 20 percent", "All of it", "About 5 percent"], answer: 0 }
    ]
  } },

  { id: "deserts", title: "Deserts", emoji: "🏜️",
    scene: ["🏜️", "🐪", "🌵"],
    video: { young: "", older: "" },
  young: {
    story: "A desert is a very dry place where it almost never rains. Many deserts are hot and covered with golden sand. Camels, lizards, and cactus plants know how to live with very little water. At night, the hot desert can get surprisingly cold!",
    questions: [
      { q: "What is a desert?", choices: ["A very dry place", "A wet forest", "A frozen lake"], answer: 0 },
      { q: "Does it rain a lot in a desert?", choices: ["No, almost never", "Yes, every day", "Only chocolate rain"], answer: 0 },
      { q: "Which animal lives in the desert?", choices: ["Camel", "Penguin", "Dolphin"], answer: 0 },
      { q: "Which plant grows in the desert?", choices: ["Cactus", "Water lily", "Seaweed"], answer: 0 },
      { q: "What covers many hot deserts?", choices: ["Sand", "Snow", "Grass"], answer: 0 },
      { q: "How does the desert feel at night?", choices: ["Surprisingly cold", "Even hotter", "Wet"], answer: 0 },
      { q: "Do desert animals need lots of water?", choices: ["No, they live with very little", "Yes, buckets of it", "They drink juice"], answer: 0 },
      { q: "What color is desert sand?", choices: ["Golden", "Blue", "Purple"], answer: 0 },
      { q: "Is the desert daytime hot or cold?", choices: ["Hot", "Freezing", "Rainy"], answer: 0 },
      { q: "Which lizard-like animal likes deserts?", choices: ["Lizard", "Goldfish", "Frog"], answer: 0 }
    ]
  },
  older: {
    story: "A desert is any place that gets very little rain, less than about 25 centimeters a year. The Sahara in Africa is the largest hot desert, but surprisingly, the biggest desert of all is freezing Antarctica, because deserts are about dryness, not heat! Desert plants and animals have clever tricks to survive: cactuses store water in their thick stems, camels can go days without drinking, and many animals hide underground by day and come out in the cool night. Hot deserts can swing from burning days to near-freezing nights because there are few clouds to hold the heat in.",
    questions: [
      { q: "What makes a place a desert?", choices: ["Getting very little rain", "Being hot", "Having sand", "Having camels"], answer: 0 },
      { q: "What is the largest hot desert?", choices: ["The Sahara", "The Gobi", "Death Valley", "The Mojave"], answer: 0 },
      { q: "What is the biggest desert of all?", choices: ["Antarctica", "The Sahara", "Arizona", "The Amazon"], answer: 0 },
      { q: "Where do cactuses store water?", choices: ["In their thick stems", "In their roots only", "In flowers", "They never store water"], answer: 0 },
      { q: "How do many desert animals escape the heat?", choices: ["Hide underground by day", "Swim all day", "Fly to the clouds", "Wear hats"], answer: 0 },
      { q: "Why do hot deserts get cold at night?", choices: ["Few clouds hold the heat in", "The Sun freezes", "Sand makes ice", "Wind brings snow"], answer: 0 },
      { q: "Which animal can go days without drinking?", choices: ["The camel", "The frog", "The duck", "The dolphin"], answer: 0 },
      { q: "Deserts are defined by...", choices: ["Dryness, not heat", "Heat only", "Sand color", "Cactus count"], answer: 0 },
      { q: "On which continent is the Sahara?", choices: ["Africa", "Asia", "Europe", "South America"], answer: 0 },
      { q: "About how much rain does a desert get per year?", choices: ["Less than 25 centimeters", "More than a meter", "Exactly 100 cm", "Rain every day"], answer: 0 }
    ]
  } },

  { id: "rainforests", title: "Rainforests", emoji: "🌴",
    scene: ["🌴", "🦜", "🐒"],
    video: { young: "", older: "" },
  young: {
    story: "A rainforest is a thick, green forest where it rains almost every day. The trees grow so tall and close together that they make a leafy roof called the canopy. Monkeys swing from branches, parrots fly in bright colors, and jaguars sneak below. More animals live in rainforests than anywhere else on land!",
    questions: [
      { q: "What is the weather like in a rainforest?", choices: ["It rains almost every day", "It snows", "It is always dry"], answer: 0 },
      { q: "What is the leafy roof of the rainforest called?", choices: ["The canopy", "The umbrella", "The ceiling"], answer: 0 },
      { q: "Which animal swings from branches?", choices: ["Monkey", "Fish", "Sheep"], answer: 0 },
      { q: "Which colorful bird lives in the rainforest?", choices: ["Parrot", "Penguin", "Chicken"], answer: 0 },
      { q: "What color is the rainforest?", choices: ["Green", "White", "Orange"], answer: 0 },
      { q: "Which big cat sneaks through the rainforest?", choices: ["Jaguar", "House cat", "Hamster"], answer: 0 },
      { q: "Are rainforest trees short or tall?", choices: ["Very tall", "Very short", "Tiny like grass"], answer: 0 },
      { q: "Where do the most land animals live?", choices: ["Rainforests", "Deserts", "Parking lots"], answer: 0 },
      { q: "Is a rainforest wet or dry?", choices: ["Wet", "Dry", "Frozen"], answer: 0 },
      { q: "The trees grow close together like a...", choices: ["Leafy roof", "Brick wall", "Sandy beach"], answer: 0 }
    ]
  },
  older: {
    story: "Tropical rainforests grow near the equator where it is warm and rainy all year. The largest is the Amazon rainforest in South America, so big it is called the lungs of the planet because its trees make huge amounts of oxygen. Rainforests have layers: the dark forest floor, the understory, the thick canopy where most animals live, and the emergent layer where giant trees poke above everything. Although rainforests cover only a small part of Earth, they hold more than half of the world's plant and animal species, and many medicines were first discovered in rainforest plants.",
    questions: [
      { q: "Where do tropical rainforests grow?", choices: ["Near the equator", "At the North Pole", "In deserts", "On mountaintops only"], answer: 0 },
      { q: "What is the largest rainforest?", choices: ["The Amazon", "The Congo", "Sherwood Forest", "The Black Forest"], answer: 0 },
      { q: "Why is the Amazon called the lungs of the planet?", choices: ["Its trees make huge amounts of oxygen", "It breathes loudly", "It is shaped like lungs", "It coughs rain"], answer: 0 },
      { q: "In which layer do most rainforest animals live?", choices: ["The canopy", "The forest floor", "Underground", "The clouds"], answer: 0 },
      { q: "What pokes above the canopy?", choices: ["The emergent layer of giant trees", "Mountains", "Waterfalls", "Hot air balloons"], answer: 0 },
      { q: "How many of the world's species live in rainforests?", choices: ["More than half", "Almost none", "About 1 percent", "Only the birds"], answer: 0 },
      { q: "What was first discovered in many rainforest plants?", choices: ["Medicines", "Gold", "Plastic", "Batteries"], answer: 0 },
      { q: "What is the rainforest floor like?", choices: ["Dark", "Bright and sunny", "Covered in snow", "Sandy"], answer: 0 },
      { q: "On which continent is the Amazon rainforest?", choices: ["South America", "Africa", "Asia", "Europe"], answer: 0 },
      { q: "What is the layer between the floor and the canopy?", choices: ["The understory", "The basement", "The attic", "The equator"], answer: 0 }
    ]
  } },

  { id: "rocks", title: "Rocks and Minerals", emoji: "🪨",
    scene: ["🪨", "💎", "⛏️"],
    video: { young: "", older: "" },
  young: {
    story: "Rocks are hard pieces of the Earth. Some are big like boulders and some are tiny like pebbles. Rocks can be gray, brown, red, or even sparkly! Shiny crystals and gems like diamonds are special rocks called minerals.",
    questions: [
      { q: "What are rocks?", choices: ["Hard pieces of the Earth", "Soft pillows", "Pieces of cloud"], answer: 0 },
      { q: "What is a tiny rock called?", choices: ["A pebble", "A boulder", "A mountain"], answer: 0 },
      { q: "What is a very big rock called?", choices: ["A boulder", "A crumb", "A seed"], answer: 0 },
      { q: "Diamonds and crystals are special rocks called...", choices: ["Minerals", "Cookies", "Marbles"], answer: 0 },
      { q: "Are rocks hard or soft?", choices: ["Hard", "Soft", "Squishy"], answer: 0 },
      { q: "Can some rocks sparkle?", choices: ["Yes", "No", "Only at night"], answer: 0 },
      { q: "Where do we find rocks?", choices: ["All over the Earth", "Only in stores", "In the sky"], answer: 0 },
      { q: "Which is heavier, a boulder or a pebble?", choices: ["A boulder", "A pebble", "They weigh the same"], answer: 0 },
      { q: "What colors can rocks be?", choices: ["Gray, brown, red and more", "Only pink", "Only invisible"], answer: 0 },
      { q: "What do people collect that skips on water?", choices: ["Flat pebbles", "Big boulders", "Leaves"], answer: 0 }
    ]
  },
  older: {
    story: "Rocks come in three families based on how they are made. Igneous rocks form when hot melted rock cools and hardens, like lava turning into stone. Sedimentary rocks form when layers of sand, mud, and tiny pieces press together over millions of years; they often hold fossils. Metamorphic rocks are rocks that changed into new kinds deep underground because of heat and squeezing pressure. Rocks are built from natural ingredients called minerals, like sparkling quartz or precious diamond, the hardest natural thing on Earth. The rock cycle slowly turns each kind of rock into the others, forever!",
    questions: [
      { q: "Which rocks form when melted rock cools?", choices: ["Igneous", "Sedimentary", "Metamorphic", "Plastic"], answer: 0 },
      { q: "Which rocks form from pressed layers of sand and mud?", choices: ["Sedimentary", "Igneous", "Metamorphic", "Rubber"], answer: 0 },
      { q: "Which rocks changed because of heat and pressure?", choices: ["Metamorphic", "Sedimentary", "Igneous", "Frozen"], answer: 0 },
      { q: "Which rock family often holds fossils?", choices: ["Sedimentary", "Igneous", "Metamorphic", "None"], answer: 0 },
      { q: "What are rocks built from?", choices: ["Minerals", "Wood", "Plastic", "Ice"], answer: 0 },
      { q: "What is the hardest natural thing on Earth?", choices: ["Diamond", "Chalk", "Gold", "Sand"], answer: 0 },
      { q: "What slowly turns rocks into other kinds of rocks?", choices: ["The rock cycle", "The water slide", "Magnets", "Moonlight"], answer: 0 },
      { q: "Lava turning to stone makes which rock type?", choices: ["Igneous", "Sedimentary", "Metamorphic", "Cardboard"], answer: 0 },
      { q: "How long do sedimentary layers take to form?", choices: ["Millions of years", "One day", "A week", "An hour"], answer: 0 },
      { q: "Quartz is a sparkling...", choices: ["Mineral", "Animal", "Plant", "Cloud"], answer: 0 }
    ]
  } },

  { id: "fossils", title: "Fossils and Dinosaurs", emoji: "🦖",
    scene: ["🦖", "🦴", "⛏️"],
    video: { young: "", older: "" },
  young: {
    story: "Long, long ago, before people, giant dinosaurs walked the Earth! When ancient animals died, some of their bones slowly turned into stone. These stone bones are called fossils. Scientists dig up fossils to learn about dinosaurs, like the mighty T-rex and the long-necked Brachiosaurus.",
    questions: [
      { q: "What are fossils?", choices: ["Ancient bones turned to stone", "New toys", "Special candies"], answer: 0 },
      { q: "What giant animals lived long ago?", choices: ["Dinosaurs", "Robots", "Dragons for real"], answer: 0 },
      { q: "What do scientists do with fossils?", choices: ["Dig them up and study them", "Eat them", "Throw them away"], answer: 0 },
      { q: "Which dinosaur had big sharp teeth?", choices: ["T-rex", "Bunny-saurus", "Puppy-saurus"], answer: 0 },
      { q: "Which dinosaur had a very long neck?", choices: ["Brachiosaurus", "T-rex", "A giraffe"], answer: 0 },
      { q: "Are dinosaurs alive today?", choices: ["No, they lived long ago", "Yes, in the park", "Yes, at school"], answer: 0 },
      { q: "Fossil bones are hard like...", choices: ["Stone", "Jelly", "Bread"], answer: 0 },
      { q: "Did people and dinosaurs live together?", choices: ["No, dinosaurs came first", "Yes, as friends", "Yes, in castles"], answer: 0 },
      { q: "Where do we find fossils?", choices: ["In the ground", "In the clouds", "In the fridge"], answer: 0 },
      { q: "What tool helps dig up fossils?", choices: ["A little shovel and brush", "A pillow", "A spoon of honey"], answer: 0 }
    ]
  },
  older: {
    story: "Fossils are the preserved remains or traces of ancient living things, like bones, shells, teeth, and even footprints, usually found inside sedimentary rock. Dinosaurs ruled the Earth for more than 160 million years until most died out 66 million years ago, when a giant asteroid struck the Earth and changed the climate. Scientists called paleontologists study fossils to learn what ancient creatures looked like, what they ate, and how they lived. Amazingly, birds are living relatives of dinosaurs, so in a way, dinosaurs still fly around your backyard!",
    questions: [
      { q: "What are fossils?", choices: ["Preserved remains of ancient living things", "Shiny new rocks", "Robot parts", "Space dust"], answer: 0 },
      { q: "Who studies fossils?", choices: ["Paleontologists", "Astronauts", "Plumbers", "Bakers"], answer: 0 },
      { q: "What likely wiped out most dinosaurs?", choices: ["A giant asteroid strike", "A big flood only", "Too much snow", "Aliens"], answer: 0 },
      { q: "How long ago did most dinosaurs die out?", choices: ["66 million years", "66 years", "600 years", "6 thousand years"], answer: 0 },
      { q: "Which living animals are relatives of dinosaurs?", choices: ["Birds", "Goldfish", "Cats", "Snails"], answer: 0 },
      { q: "In which rock type are fossils usually found?", choices: ["Sedimentary", "Igneous", "Metamorphic", "Lava"], answer: 0 },
      { q: "How long did dinosaurs rule the Earth?", choices: ["More than 160 million years", "100 years", "One million days", "About a century"], answer: 0 },
      { q: "Besides bones, what else can become a fossil?", choices: ["Footprints and shells", "Plastic toys", "Clouds", "Rainbows"], answer: 0 },
      { q: "What can fossils teach us?", choices: ["What ancient creatures ate and how they lived", "Next week's weather", "New songs", "Math homework answers"], answer: 0 },
      { q: "What changed after the asteroid hit?", choices: ["The climate", "Nothing at all", "Only the oceans vanished", "Dinosaurs grew bigger"], answer: 0 }
    ]
  } },

  { id: "soil", title: "Soil", emoji: "🪱",
    scene: ["🌱", "🪱", "🍄"],
    video: { young: "", older: "" },
  young: {
    story: "Soil is the soft brown dirt that covers the ground. It is made of tiny bits of rock, old leaves, and water. Plants push their roots into soil to drink and stand up tall. Wiggly earthworms live in soil and help make it healthy!",
    questions: [
      { q: "What is soil?", choices: ["The soft dirt on the ground", "A kind of candy", "Blue water"], answer: 0 },
      { q: "What lives in soil and helps it?", choices: ["Earthworms", "Sharks", "Eagles"], answer: 0 },
      { q: "What do plants push into the soil?", choices: ["Their roots", "Their flowers", "Their leaves"], answer: 0 },
      { q: "What is soil made of?", choices: ["Tiny rocks, old leaves and water", "Glass and metal", "Clouds"], answer: 0 },
      { q: "What color is most soil?", choices: ["Brown", "Pink", "Silver"], answer: 0 },
      { q: "Why do plants need soil?", choices: ["To drink and stand tall", "To fly", "To sing"], answer: 0 },
      { q: "Where is soil?", choices: ["Covering the ground", "In the sky", "Inside the sea only"], answer: 0 },
      { q: "Are earthworms good for soil?", choices: ["Yes, very good", "No, very bad", "They are robots"], answer: 0 },
      { q: "What do seeds need to grow?", choices: ["Soil, water and sun", "Only toys", "Only music"], answer: 0 },
      { q: "How does soil feel after rain?", choices: ["Wet and squishy", "Hot and dry", "Like ice"], answer: 0 }
    ]
  },
  older: {
    story: "Soil is a living blanket over the land, made of crushed rock, water, air, and humus, which is the rotted remains of plants and leaves. It can take hundreds of years to build just a few centimeters of good soil! Soil is full of life: earthworms tunnel through it, mixing and softening it, while billions of tiny microbes break down dead plants into food for new ones. Different soils feel different: sandy soil is loose, clay soil is sticky, and loam, the best mix for growing food, is soft and crumbly. Without healthy soil, there would be no farms and no food.",
    questions: [
      { q: "What is humus?", choices: ["Rotted remains of plants and leaves", "A tasty dip", "White sand", "Melted rock"], answer: 0 },
      { q: "How long can a few centimeters of soil take to form?", choices: ["Hundreds of years", "One day", "A week", "One season"], answer: 0 },
      { q: "How do earthworms help soil?", choices: ["They tunnel, mix and soften it", "They eat all of it", "They dry it out", "They paint it"], answer: 0 },
      { q: "What do tiny microbes do in soil?", choices: ["Break down dead plants into food for new ones", "Sleep all day", "Make it glow", "Build tiny houses"], answer: 0 },
      { q: "Which soil is sticky?", choices: ["Clay", "Sand", "Loam", "Gravel"], answer: 0 },
      { q: "Which soil is best for growing food?", choices: ["Loam", "Pure sand", "Pure clay", "Rocks"], answer: 0 },
      { q: "What is soil made of?", choices: ["Crushed rock, water, air and humus", "Plastic and glass", "Only sand", "Clouds and rain"], answer: 0 },
      { q: "Why do farms need healthy soil?", choices: ["Crops cannot grow without it", "It looks pretty", "Tractors like it", "It keeps cows warm"], answer: 0 },
      { q: "Sandy soil feels...", choices: ["Loose", "Sticky", "Like glue", "Like ice"], answer: 0 },
      { q: "Soil is often called a living...", choices: ["Blanket over the land", "Ocean", "Cloud", "Star"], answer: 0 }
    ]
  } },

  { id: "air", title: "Air All Around Us", emoji: "💨",
    scene: ["💨", "🎈", "🍃"],
    video: { young: "", older: "" },
  young: {
    story: "Air is all around us, even though we cannot see it. We breathe air in and out all day and night. Air fills up balloons and bubbles, and moving air is the wind. Every person, animal, and plant needs air to live!",
    questions: [
      { q: "Can we see air?", choices: ["No, it is invisible", "Yes, it is green", "Yes, it is shiny"], answer: 0 },
      { q: "What do we do with air?", choices: ["Breathe it", "Eat it with a fork", "Wear it"], answer: 0 },
      { q: "What fills up a balloon?", choices: ["Air", "Sand", "Water always"], answer: 0 },
      { q: "What is moving air called?", choices: ["Wind", "Rain", "Dirt"], answer: 0 },
      { q: "Who needs air to live?", choices: ["People, animals and plants", "Only fish", "Only rocks"], answer: 0 },
      { q: "Where is air?", choices: ["All around us", "Only in bottles", "Only outside"], answer: 0 },
      { q: "When you blow bubbles, what is inside them?", choices: ["Air", "Juice", "Little stars"], answer: 0 },
      { q: "Do we breathe when we sleep?", choices: ["Yes, all night", "No, we stop", "Only if we snore"], answer: 0 },
      { q: "What do you feel when air moves fast?", choices: ["Wind on your skin", "Nothing ever", "Rain for sure"], answer: 0 },
      { q: "Can you catch air in your hands?", choices: ["No, it slips through", "Yes, like a ball", "Yes, in a net"], answer: 0 }
    ]
  },
  older: {
    story: "Air is a mixture of invisible gases: mostly nitrogen, then oxygen, the gas our bodies need, plus small amounts of others like carbon dioxide. When we breathe in, our lungs take oxygen from the air; when we breathe out, we release carbon dioxide, which plants then use to make their food. So animals and plants trade gases in a perfect partnership! Air also has weight and pushes on everything; this push is called air pressure. The blanket of air around Earth, the atmosphere, protects us from space rocks and the Sun's harmful rays.",
    questions: [
      { q: "What gas makes up most of the air?", choices: ["Nitrogen", "Oxygen", "Carbon dioxide", "Helium"], answer: 0 },
      { q: "Which gas do our bodies need from air?", choices: ["Oxygen", "Nitrogen", "Smoke", "Neon"], answer: 0 },
      { q: "What do we breathe out?", choices: ["Carbon dioxide", "Pure oxygen", "Nitrogen only", "Water"], answer: 0 },
      { q: "What do plants do with carbon dioxide?", choices: ["Use it to make food", "Throw it away", "Turn it into rocks", "Sleep on it"], answer: 0 },
      { q: "What is the push of air on everything called?", choices: ["Air pressure", "Air hug", "Gravity", "Wind chill"], answer: 0 },
      { q: "Does air have weight?", choices: ["Yes", "No", "Only cold air", "Only in balloons"], answer: 0 },
      { q: "What is the blanket of air around Earth called?", choices: ["The atmosphere", "The blanket-zone", "The ozone puddle", "The sky sea"], answer: 0 },
      { q: "How do animals and plants help each other?", choices: ["They trade oxygen and carbon dioxide", "They share food bowls", "They sing together", "They do not help each other"], answer: 0 },
      { q: "What does the atmosphere protect us from?", choices: ["Space rocks and harmful rays", "Loud noises", "Cold water", "Big waves"], answer: 0 },
      { q: "Which body parts take oxygen from air?", choices: ["Lungs", "Ears", "Elbows", "Knees"], answer: 0 }
    ]
  } },

  { id: "matter", title: "Solid, Liquid, Gas", emoji: "🧊",
    scene: ["🧊", "💧", "💨"],
    video: { young: "", older: "" },
  young: {
    story: "Everything around us comes in three forms: solid, liquid, and gas. A solid keeps its shape, like an ice cube or a toy block. A liquid flows and takes the shape of its cup, like water or juice. A gas floats and spreads everywhere, like the air in a balloon. Water can be all three: ice, water, and steam!",
    questions: [
      { q: "Which one is a solid?", choices: ["An ice cube", "Milk", "Steam"], answer: 0 },
      { q: "Which one is a liquid?", choices: ["Juice", "A rock", "A balloon of air"], answer: 0 },
      { q: "What does a liquid do in a cup?", choices: ["Takes the shape of the cup", "Keeps its own shape", "Jumps out"], answer: 0 },
      { q: "What floats and spreads everywhere?", choices: ["Gas", "Solid", "Rocks"], answer: 0 },
      { q: "What is frozen water called?", choices: ["Ice", "Steam", "Sand"], answer: 0 },
      { q: "What happens to ice in the sun?", choices: ["It melts into water", "It gets harder", "It turns blue"], answer: 0 },
      { q: "A toy block is a...", choices: ["Solid", "Liquid", "Gas"], answer: 0 },
      { q: "What comes out of a boiling kettle?", choices: ["Steam", "Snow", "Bubbgum"], answer: 0 },
      { q: "Can water be solid, liquid AND gas?", choices: ["Yes, all three", "No, only liquid", "No, only ice"], answer: 0 },
      { q: "Which keeps its shape?", choices: ["A solid", "A liquid", "A gas"], answer: 0 }
    ]
  },
  older: {
    story: "Matter is everything that takes up space, and it usually comes in three states: solid, liquid, and gas. In a solid, tiny particles are packed tightly and only wiggle in place, so solids hold their shape. In a liquid, particles slide past each other, so liquids flow and take the shape of their container. In a gas, particles zoom around freely and spread out to fill any space. Heating or cooling changes the state: ice melts into water at 0 degrees Celsius, and water boils into steam at 100 degrees. Freezing, melting, boiling, and condensing happen around you every day!",
    questions: [
      { q: "What is matter?", choices: ["Everything that takes up space", "Only heavy things", "Only liquids", "Invisible magic"], answer: 0 },
      { q: "How do particles act in a solid?", choices: ["Packed tight, wiggling in place", "Zooming freely", "Sliding past each other", "Sleeping"], answer: 0 },
      { q: "How do particles act in a liquid?", choices: ["They slide past each other", "They stay frozen", "They fly apart", "They line up in rows"], answer: 0 },
      { q: "How do particles act in a gas?", choices: ["They zoom around freely", "They hold hands", "They stack up", "They stand still"], answer: 0 },
      { q: "At what temperature does ice melt?", choices: ["0 degrees Celsius", "100 degrees", "50 degrees", "Minus 100"], answer: 0 },
      { q: "At what temperature does water boil?", choices: ["100 degrees Celsius", "10 degrees", "0 degrees", "1000 degrees"], answer: 0 },
      { q: "What changes matter from one state to another?", choices: ["Heating or cooling", "Shaking it", "Painting it", "Wishing"], answer: 0 },
      { q: "Water turning to ice is called...", choices: ["Freezing", "Boiling", "Melting", "Raining"], answer: 0 },
      { q: "Which state fills any container completely?", choices: ["Gas", "Solid", "Liquid", "None"], answer: 0 },
      { q: "Steam turning back into water drops is called...", choices: ["Condensing", "Freezing", "Exploding", "Mixing"], answer: 0 }
    ]
  } },

  { id: "hot-cold", title: "Hot and Cold", emoji: "🌡️",
    scene: ["🔥", "🌡️", "❄️"],
    video: { young: "", older: "" },
  young: {
    story: "Some things are hot, like soup and sunshine. Some things are cold, like ice cream and snow. We use a thermometer to measure how hot or cold something is. Heat likes to travel: that is why hot cocoa warms your hands and an ice pop cools your mouth!",
    questions: [
      { q: "Which one is hot?", choices: ["Soup", "Ice cream", "Snow"], answer: 0 },
      { q: "Which one is cold?", choices: ["An ice cube", "A campfire", "The sun"], answer: 0 },
      { q: "What measures hot and cold?", choices: ["A thermometer", "A ruler", "A spoon"], answer: 0 },
      { q: "What warms your hands on a cold day?", choices: ["Hot cocoa", "An ice cube", "A snowball"], answer: 0 },
      { q: "What should you NOT touch because it is too hot?", choices: ["A hot stove", "A pillow", "A crayon"], answer: 0 },
      { q: "What do you wear when it is cold?", choices: ["A cozy jacket", "A swimsuit", "Flip flops only"], answer: 0 },
      { q: "What happens to a snowman on a hot day?", choices: ["He melts", "He grows", "He turns blue"], answer: 0 },
      { q: "Which drink cools you down in summer?", choices: ["Cold lemonade", "Hot soup", "Hot tea"], answer: 0 },
      { q: "Fire is very...", choices: ["Hot", "Cold", "Wet"], answer: 0 },
      { q: "Where is it cold?", choices: ["Inside the freezer", "Inside the oven", "Next to a fire"], answer: 0 }
    ]
  },
  older: {
    story: "Heat is energy, and temperature tells us how much of it something has. Heat always travels from warmer things to cooler things, never the other way. That is why a hot drink slowly cools down while a cold drink warms up to room temperature. Heat can move in three ways: conduction through touching things, like a metal spoon getting hot in soup; convection through moving liquids and air, like warm air rising; and radiation through invisible rays, like the warmth you feel from the Sun. We measure temperature in degrees using a thermometer.",
    questions: [
      { q: "Which way does heat always travel?", choices: ["From warm things to cool things", "From cool to warm", "Sideways only", "It never moves"], answer: 0 },
      { q: "What is heat?", choices: ["A kind of energy", "A liquid", "A sound", "A smell"], answer: 0 },
      { q: "Heat moving through a touching metal spoon is...", choices: ["Conduction", "Convection", "Radiation", "Inflation"], answer: 0 },
      { q: "Warm air rising is an example of...", choices: ["Convection", "Conduction", "Radiation", "Condensation"], answer: 0 },
      { q: "Feeling the Sun's warmth from far away is...", choices: ["Radiation", "Conduction", "Convection", "Vibration"], answer: 0 },
      { q: "Why does a hot drink cool down?", choices: ["Its heat flows into the cooler air", "It falls asleep", "Cold jumps into it", "The cup eats the heat"], answer: 0 },
      { q: "What does temperature tell us?", choices: ["How hot or cold something is", "How heavy something is", "How fast something is", "What color something is"], answer: 0 },
      { q: "What tool measures temperature?", choices: ["A thermometer", "A telescope", "A stopwatch", "A scale"], answer: 0 },
      { q: "Temperature is measured in...", choices: ["Degrees", "Meters", "Kilograms", "Minutes"], answer: 0 },
      { q: "Why does a cold drink warm up in a room?", choices: ["Heat from the room flows into it", "It exercises", "Ice makes heat", "The glass squeezes it"], answer: 0 }
    ]
  } },

  { id: "floating", title: "Floating and Sinking", emoji: "⛵",
    scene: ["⛵", "🦆", "🪨"],
    video: { young: "", older: "" },
  young: {
    story: "When you put things in water, some float on top and some sink to the bottom. A rubber duck floats, but a rock sinks, splash! Light things full of air usually float. Big ships float too because they have lots of air inside, like a giant bathtub toy!",
    questions: [
      { q: "What does a rubber duck do in water?", choices: ["Floats", "Sinks", "Flies away"], answer: 0 },
      { q: "What does a rock do in water?", choices: ["Sinks", "Floats", "Dances"], answer: 0 },
      { q: "What usually helps things float?", choices: ["Air inside them", "Being heavy", "Being tiny"], answer: 0 },
      { q: "Where do sinking things go?", choices: ["To the bottom", "To the top", "Into the sky"], answer: 0 },
      { q: "Do big ships float or sink?", choices: ["Float", "Sink", "Bounce"], answer: 0 },
      { q: "What floats in your bathtub?", choices: ["A toy boat", "A spoon of metal", "A marble"], answer: 0 },
      { q: "Which would sink faster?", choices: ["A heavy stone", "A leaf", "A feather"], answer: 0 },
      { q: "A beach ball on water will...", choices: ["Float", "Sink", "Melt"], answer: 0 },
      { q: "Floating things stay on...", choices: ["Top of the water", "The bottom", "The clouds"], answer: 0 },
      { q: "What happens when you drop a coin in water?", choices: ["It sinks", "It floats", "It pops"], answer: 0 }
    ]
  },
  older: {
    story: "Whether something floats or sinks depends on density: how much stuff is packed into its size. If an object is less dense than water, it floats; if it is more dense, it sinks. That is why a huge steel ship floats: its hollow shape is full of air, making it less dense than water overall, while a tiny solid coin sinks. Water also pushes up on objects with a force called buoyancy. A famous scientist named Archimedes discovered this idea in his bathtub and shouted Eureka, which means I found it!",
    questions: [
      { q: "What decides if something floats or sinks?", choices: ["Its density", "Its color", "Its price", "Its smell"], answer: 0 },
      { q: "What happens if an object is less dense than water?", choices: ["It floats", "It sinks", "It dissolves", "It boils"], answer: 0 },
      { q: "Why does a huge steel ship float?", choices: ["Its hollow shape is full of air", "Steel is lighter than paper", "Magic keeps it up", "Fish hold it up"], answer: 0 },
      { q: "What is the upward push of water called?", choices: ["Buoyancy", "Gravity", "Friction", "Electricity"], answer: 0 },
      { q: "Who discovered buoyancy in his bathtub?", choices: ["Archimedes", "Einstein", "Newton", "Edison"], answer: 0 },
      { q: "What does Eureka mean?", choices: ["I found it", "Good morning", "Watch out", "Jump in"], answer: 0 },
      { q: "Why does a tiny coin sink?", choices: ["It is denser than water", "It is too small", "It is scared", "Water dislikes coins"], answer: 0 },
      { q: "What is density?", choices: ["How much stuff is packed into a size", "How wet something is", "How fast something moves", "How bright something is"], answer: 0 },
      { q: "An object denser than water will...", choices: ["Sink", "Float", "Fly", "Glow"], answer: 0 },
      { q: "Which is more dense, a solid steel ball or a beach ball?", choices: ["The steel ball", "The beach ball", "Both the same", "Neither has density"], answer: 0 }
    ]
  } },

  { id: "recycling", title: "Caring for Our Earth", emoji: "♻️",
    scene: ["♻️", "🌍", "💚"],
    video: { young: "", older: "" },
  young: {
    story: "Our Earth is our only home, so we must take care of it! We can recycle paper, plastic, and cans so they can be made into new things. We can save water, pick up trash, and plant trees. When we keep Earth clean, animals, plants, and people all stay happy and healthy!",
    questions: [
      { q: "What can we recycle?", choices: ["Paper, plastic and cans", "Puppies", "Sunshine"], answer: 0 },
      { q: "Why do we take care of Earth?", choices: ["It is our only home", "It is boring", "We do not need to"], answer: 0 },
      { q: "What should we do with trash?", choices: ["Put it in the bin", "Throw it on the grass", "Hide it in the sea"], answer: 0 },
      { q: "What can we plant to help Earth?", choices: ["Trees", "Rocks", "Plastic bags"], answer: 0 },
      { q: "What happens to recycled things?", choices: ["They become new things", "They vanish", "They fly to space"], answer: 0 },
      { q: "How can we save water?", choices: ["Turn off the tap when brushing", "Leave the tap running", "Water the sidewalk"], answer: 0 },
      { q: "A clean Earth makes animals...", choices: ["Happy and healthy", "Sad", "Sleepy"], answer: 0 },
      { q: "Which bin symbol means recycling?", choices: ["Arrows in a circle", "A big X", "A smiley face"], answer: 0 },
      { q: "Litter on the beach can hurt...", choices: ["Sea animals", "Nobody", "Only sandcastles"], answer: 0 },
      { q: "Who can help care for Earth?", choices: ["Everyone, even kids", "Only grown-ups", "Only scientists"], answer: 0 }
    ]
  },
  older: {
    story: "Everything we throw away has to go somewhere, and much of it ends up buried in landfills or floating in the ocean, where plastic can harm sea animals for hundreds of years. The three Rs help: Reduce means using less in the first place, Reuse means using things again, and Recycle means turning old materials into new ones; a recycled soda can can become a brand new can in about 60 days! Saving energy and water, walking or biking instead of driving, and planting trees all shrink our footprint on the planet. Small habits by millions of people add up to a big difference.",
    questions: [
      { q: "What are the three Rs?", choices: ["Reduce, Reuse, Recycle", "Run, Rest, Repeat", "Read, Rhyme, Race", "Rocks, Rivers, Rain"], answer: 0 },
      { q: "What does Reduce mean?", choices: ["Using less in the first place", "Buying more", "Burning trash", "Hiding waste"], answer: 0 },
      { q: "How fast can a recycled can become a new can?", choices: ["About 60 days", "60 years", "One hour", "Never"], answer: 0 },
      { q: "Where does much of our trash end up?", choices: ["Landfills and oceans", "The Moon", "Clouds", "Volcanoes"], answer: 0 },
      { q: "How long can plastic harm the ocean?", choices: ["Hundreds of years", "One day", "A week", "It never lasts"], answer: 0 },
      { q: "What does Reuse mean?", choices: ["Using things again", "Throwing things away", "Buying new things", "Painting things"], answer: 0 },
      { q: "Which travel choice helps the planet?", choices: ["Walking or biking", "Driving alone everywhere", "Flying to school", "Racing trucks"], answer: 0 },
      { q: "What do planting trees do?", choices: ["Clean the air and give animals homes", "Make more trash", "Block all rain", "Nothing"], answer: 0 },
      { q: "Who makes the biggest difference for Earth?", choices: ["Millions of people with small habits", "One person only", "Nobody can help", "Only presidents"], answer: 0 },
      { q: "Plastic in the sea can hurt...", choices: ["Sea animals", "Only boats", "Nothing", "Just seaweed"], answer: 0 }
    ]
  } },

  { id: "tides", title: "Waves and Tides", emoji: "🌊",
    scene: ["🌊", "🌙", "🏖️"],
    video: { young: "", older: "" },
  young: {
    story: "Ocean water is always moving. Wind blowing across the sea makes waves that roll and crash on the beach. The ocean also slowly rises and falls every day, like the sea breathing in and out; that is called the tide. At low tide, you can find crabs and shells in little pools left on the beach!",
    questions: [
      { q: "What makes waves?", choices: ["Wind blowing on the sea", "Fish jumping", "Boats honking"], answer: 0 },
      { q: "What is the tide?", choices: ["The sea slowly rising and falling", "A big fish", "A kind of boat"], answer: 0 },
      { q: "What can you find in pools at low tide?", choices: ["Crabs and shells", "Lions", "Snowmen"], answer: 0 },
      { q: "Where do waves crash?", choices: ["On the beach", "On the moon", "In the forest"], answer: 0 },
      { q: "Is ocean water still or always moving?", choices: ["Always moving", "Perfectly still", "Frozen"], answer: 0 },
      { q: "The tide is like the sea...", choices: ["Breathing in and out", "Sleeping", "Laughing"], answer: 0 },
      { q: "What do waves do?", choices: ["Roll and crash", "Fly", "Sing songs"], answer: 0 },
      { q: "When the water goes far out, it is...", choices: ["Low tide", "High tide", "Snack time"], answer: 0 },
      { q: "What do surfers ride?", choices: ["Waves", "Clouds", "Trains"], answer: 0 },
      { q: "How often does the tide rise and fall?", choices: ["Every day", "Once a year", "Never"], answer: 0 }
    ]
  },
  older: {
    story: "Waves are made by wind pushing on the surface of the sea; the stronger and longer the wind blows, the bigger the waves grow. Tides are different: they are caused mostly by the Moon! The Moon's gravity gently pulls on Earth's oceans, making the water bulge toward it. As Earth spins through these bulges, the sea level rises and falls, giving most beaches two high tides and two low tides every day. Sailors and fishermen check tide charts, and tide pools at low tide are tiny worlds full of starfish, crabs, and anemones.",
    questions: [
      { q: "What makes ocean waves?", choices: ["Wind pushing on the water", "The Moon glowing", "Fish swimming", "Boats only"], answer: 0 },
      { q: "What mostly causes the tides?", choices: ["The Moon's gravity", "The wind", "Rain", "Whales"], answer: 0 },
      { q: "How many high tides do most beaches get daily?", choices: ["Two", "Ten", "One a week", "None"], answer: 0 },
      { q: "What does the Moon's pull make the ocean do?", choices: ["Bulge toward it", "Freeze", "Turn green", "Disappear"], answer: 0 },
      { q: "When do bigger waves form?", choices: ["When wind is stronger and blows longer", "When it is quiet", "At exactly noon", "When boats stop"], answer: 0 },
      { q: "What lives in tide pools?", choices: ["Starfish, crabs and anemones", "Polar bears", "Camels", "Eagles"], answer: 0 },
      { q: "Who checks tide charts?", choices: ["Sailors and fishermen", "Pilots only", "Farmers only", "Dentists"], answer: 0 },
      { q: "When can you explore tide pools?", choices: ["At low tide", "At high tide", "At midnight only", "During storms"], answer: 0 },
      { q: "What spins through the ocean bulges?", choices: ["The Earth", "The Moon", "The Sun", "The stars"], answer: 0 },
      { q: "Tides make the sea level...", choices: ["Rise and fall", "Stay the same", "Boil", "Turn to ice"], answer: 0 }
    ]
  } },

  { id: "comets", title: "Comets and Shooting Stars", emoji: "☄️",
    scene: ["☄️", "🌠", "🌌"],
    video: { young: "", older: "" },
  young: {
    story: "A shooting star is not really a star: it is a tiny space rock burning up as it zooms into the sky! It makes a bright streak of light for just a second. Comets are big balls of ice and dust that fly around the Sun with long glowing tails. If you see a shooting star, you can make a wish!",
    questions: [
      { q: "What is a shooting star really?", choices: ["A tiny space rock burning up", "A real star falling", "A firework"], answer: 0 },
      { q: "What is a comet made of?", choices: ["Ice and dust", "Cheese", "Fire only"], answer: 0 },
      { q: "What does a comet have behind it?", choices: ["A glowing tail", "A parachute", "A ribbon"], answer: 0 },
      { q: "How long does a shooting star last?", choices: ["Just a second", "All night", "A whole year"], answer: 0 },
      { q: "What do comets fly around?", choices: ["The Sun", "Your house", "A mountain"], answer: 0 },
      { q: "What do people do when they see a shooting star?", choices: ["Make a wish", "Go to sleep", "Cry"], answer: 0 },
      { q: "What does a shooting star look like?", choices: ["A bright streak of light", "A big circle", "A cloud"], answer: 0 },
      { q: "When can you see shooting stars?", choices: ["At night", "At lunchtime", "In the shower"], answer: 0 },
      { q: "Are comets big or tiny?", choices: ["Big balls of ice", "Tiny like sand only", "Invisible"], answer: 0 },
      { q: "Where do shooting stars zoom?", choices: ["Across the sky", "Under the sea", "Through the garden"], answer: 0 }
    ]
  },
  older: {
    story: "A shooting star, properly called a meteor, is a piece of space rock or dust that slams into Earth's atmosphere so fast that it burns up in a streak of light. If a piece survives and lands on the ground, it is called a meteorite. Comets are giant snowballs of ice, dust, and rock left over from when the solar system formed; when one swings near the Sun, the heat melts its ice and pushes out a glowing tail millions of kilometers long. The most famous one, Halley's Comet, visits Earth's sky about every 76 years. During a meteor shower, you can see dozens of meteors in one night!",
    questions: [
      { q: "What is the proper name for a shooting star?", choices: ["A meteor", "A meteorite", "A comet", "A planet"], answer: 0 },
      { q: "What is a space rock called after it lands on Earth?", choices: ["A meteorite", "A meteor", "A moon", "An asteroid belt"], answer: 0 },
      { q: "What are comets made of?", choices: ["Ice, dust and rock", "Fire and lava", "Metal only", "Clouds"], answer: 0 },
      { q: "What makes a comet's tail appear?", choices: ["The Sun's heat melting its ice", "Wind in space", "Its engine", "Paint"], answer: 0 },
      { q: "How often does Halley's Comet visit our sky?", choices: ["About every 76 years", "Every night", "Every 7 days", "Once ever"], answer: 0 },
      { q: "Why do meteors glow?", choices: ["They burn up in the atmosphere", "They have light bulbs", "The Moon shines on them", "They are angry"], answer: 0 },
      { q: "What is a meteor shower?", choices: ["Many meteors in one night", "Rain in space", "A comet bath", "Falling planets"], answer: 0 },
      { q: "How long can a comet's tail be?", choices: ["Millions of kilometers", "One meter", "A few steps", "As long as a bus"], answer: 0 },
      { q: "Comets are left over from...", choices: ["When the solar system formed", "Last week", "Old fireworks", "Broken satellites"], answer: 0 },
      { q: "What must a meteor do to become a meteorite?", choices: ["Survive and land on the ground", "Burn up completely", "Fly past the Moon", "Turn blue"], answer: 0 }
    ]
  } }
  ]
};
