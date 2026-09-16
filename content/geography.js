/* Geography - 30 concepts.
   Concepts with pages and questions are playable. Empty ones show "coming soon" until a later wave.
   The correct answer is always written first (answer: 0); the app shuffles choices on screen. */
window.CONTENT = window.CONTENT || {};
window.CONTENT['geography'] = {
  id: "geography", title: "Geography", emoji: "🗺️", color: "#2D9CDB", tint: "#DFF0FB",
  concepts: [
  { id: "what-is-a-map", title: "What Is a Map?", emoji: "🗺️",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🗺️", text: "A map is a picture of a place, seen from way up high. Like a bird looking down!" },
      { art: "🏠🛣️🌳", text: "Maps use little pictures. A blue line is a river. A green patch is a park. A small square is a house." },
      { art: "👆📍", text: "Maps help us find things. Where is my school? Where is the zoo? Follow the map and you will get there!" }
    ],
    funFact: "There are maps of shopping malls, maps of zoos, even maps of the inside of your body that doctors use!",
    tryThis: "Draw a map of your bedroom from above. Put in your bed, your door, and your window. Can a grown-up find their way using your map?",
    questions: [
      { q: "What is a map?", choices: ["A picture of a place from above", "A kind of hat", "A story book"], answer: 0 },
      { q: "On a map, a blue line is usually a...", choices: ["River", "Road", "Tree"], answer: 0 },
      { q: "What do maps help us do?", choices: ["Find places", "Cook dinner", "Tell time"], answer: 0 },
      { q: "A map looks at a place like a...", choices: ["Bird flying above", "Worm underground", "Fish in the sea"], answer: 0 },
      { q: "What colour is usually used for parks?", choices: ["Green", "Purple", "Black"], answer: 0 },
      { q: "Do maps use little pictures?", choices: ["Yes, symbols", "No, only words", "Only numbers"], answer: 0 },
      { q: "Can you have a map of a zoo?", choices: ["Yes", "No", "Only of forests"], answer: 0 },
      { q: "Is a map bigger or smaller than the real place?", choices: ["Smaller", "Bigger", "Exactly the same"], answer: 0 },
      { q: "What might a small square on a map mean?", choices: ["A house", "A cloud", "A song"], answer: 0 },
      { q: "If you are lost, a map can help you...", choices: ["Find your way", "Go faster", "Fly"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🗺️👁️", text: "A map is a drawing of a place as seen from directly above, called a bird's eye view. Because the real world is far too big to draw at full size, every map shrinks it down by a fixed amount, and that shrinking is called the scale." },
      { art: "📏🔑", text: "A scale might say 1 centimetre equals 1 kilometre, letting you measure real distances with a ruler. The key, or legend, explains what each symbol and colour means: blue for water, green for parks or forests, thick red lines for major roads." },
      { art: "🧭⬆️", text: "Almost every map includes a compass rose showing which way is north, and by convention north points to the top of the page. Knowing that lets you line the map up with the real world and work out which direction to walk." },
      { art: "📱🛰️", text: "Today most maps come from satellite photographs and are delivered by phone using GPS, a network of satellites that works out exactly where you are. But the principles are the same ones mapmakers used with pen and paper for centuries." }
    ],
    funFact: "The oldest known world map is a Babylonian clay tablet from about 2,600 years ago, showing Babylon at the centre ringed by ocean.",
    tryThis: "Open a map app, find your home, and switch to satellite view. Then try to sketch your street from memory and compare. Mapmaking is harder than it looks.",
    words: [
      { word: "Scale", meaning: "How much a map shrinks the real world." },
      { word: "Legend", meaning: "The key explaining a map's symbols and colours." },
      { word: "Compass rose", meaning: "The symbol on a map showing north, south, east and west." },
      { word: "GPS", meaning: "Satellites that work out your exact position on Earth." }
    ],
    questions: [
      { q: "What does a map's scale tell you?", choices: ["How much the real world has been shrunk", "Which way is north", "Who drew it", "How old it is"], answer: 0 },
      { q: "What is the key on a map called?", choices: ["The legend", "The scale", "The grid", "The index"], answer: 0 },
      { q: "Which direction is normally at the top of a map?", choices: ["North", "South", "East", "West"], answer: 0 },
      { q: "What is a compass rose?", choices: ["The symbol showing the directions", "A flower marking parks", "The map's title", "A type of scale"], answer: 0 },
      { q: "What does GPS use to find your position?", choices: ["Satellites", "Radio towers only", "Street signs", "Magnets"], answer: 0 },
      { q: "A bird's eye view means looking...", choices: ["Straight down from above", "From the side", "From below", "Through a window"], answer: 0 },
      { q: "If 1 cm equals 1 km, how far is 5 cm on the map?", choices: ["5 km", "1 km", "50 km", "500 m"], answer: 0 },
      { q: "Which colour usually shows water?", choices: ["Blue", "Brown", "Yellow", "Red"], answer: 0 },
      { q: "Why must every map shrink the real world?", choices: ["The real world is far too big to draw full size", "Paper is expensive", "To save ink", "To make it prettier"], answer: 0 },
      { q: "How old is the oldest known world map?", choices: ["About 2,600 years", "About 200 years", "About 50 years", "About 10,000 years"], answer: 0 }
    ]
  } },

  { id: "the-globe", title: "The Globe", emoji: "🌐",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🌐", text: "A globe is a little model of the whole Earth. It is round, like a ball, because Earth is round too." },
      { art: "💙💚", text: "Spin it and look. The blue parts are the oceans. The green and brown parts are the land where people live." },
      { art: "🔝🔽", text: "The very top is the North Pole, where polar bears live. The very bottom is the South Pole, where penguins live. Both are freezing cold!" }
    ],
    funFact: "If you could dig a tunnel straight down through the middle of the Earth from your house, you would pop out on the other side of the world!",
    tryThis: "Find a ball and draw your country on it with a marker. Now you have made your own globe.",
    questions: [
      { q: "What shape is a globe?", choices: ["Round like a ball", "Flat like paper", "Square"], answer: 0 },
      { q: "What are the blue parts?", choices: ["Oceans", "Mountains", "Deserts"], answer: 0 },
      { q: "What is at the very top of a globe?", choices: ["The North Pole", "The equator", "Australia"], answer: 0 },
      { q: "What is at the very bottom?", choices: ["The South Pole", "The North Pole", "Africa"], answer: 0 },
      { q: "Which animal lives near the South Pole?", choices: ["Penguin", "Camel", "Monkey"], answer: 0 },
      { q: "Which animal lives near the North Pole?", choices: ["Polar bear", "Kangaroo", "Lion"], answer: 0 },
      { q: "A globe is a little model of...", choices: ["The Earth", "The Moon", "A city"], answer: 0 },
      { q: "Are the poles hot or cold?", choices: ["Very cold", "Very hot", "Warm"], answer: 0 },
      { q: "What colour is land on a globe?", choices: ["Green and brown", "Blue", "Pink"], answer: 0 },
      { q: "Can a globe spin?", choices: ["Yes", "No", "Only once"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🌐🌍", text: "A globe is a spherical model of Earth, and it is the only truly accurate way to show our planet. Every flat map has to stretch or squash something to lay a curved surface out on a page, which is why Greenland looks enormous on many wall maps." },
      { art: "⭕📏", text: "Globes are marked with imaginary lines. Lines of latitude run horizontally, with the equator at zero degrees dividing north from south. Lines of longitude run pole to pole, with the Prime Meridian through Greenwich in London at zero degrees." },
      { art: "📍🔢", text: "Together these lines give every point on Earth a unique address. Los Angeles sits at roughly 34 degrees north, 118 degrees west. Ships, planes, and phones all use this same coordinate system to know exactly where they are." },
      { art: "↗️🌗", text: "A globe on a stand is usually mounted at a tilt of 23.5 degrees, matching Earth's real tilt. That tilt is not decoration: it is what creates our seasons as the planet orbits the Sun." }
    ],
    funFact: "The oldest surviving globe, the Erdapfel made in 1492, has no Americas on it. Columbus had not returned yet when it was finished.",
    tryThis: "Compare Greenland and Africa on a flat world map, then on a globe. On the map they look similar; in reality Africa is about 14 times larger.",
    words: [
      { word: "Latitude", meaning: "Lines measuring how far north or south you are." },
      { word: "Longitude", meaning: "Lines measuring how far east or west you are." },
      { word: "Equator", meaning: "The line around Earth's middle, at zero degrees latitude." },
      { word: "Prime Meridian", meaning: "The zero line for longitude, running through Greenwich." }
    ],
    questions: [
      { q: "Why is a globe more accurate than a flat map?", choices: ["Flat maps must stretch a curved surface", "Globes are bigger", "Globes are newer", "Flat maps leave out oceans"], answer: 0 },
      { q: "What do lines of latitude measure?", choices: ["How far north or south you are", "How far east or west", "Height above sea level", "Temperature"], answer: 0 },
      { q: "What is the equator's latitude?", choices: ["0 degrees", "90 degrees", "45 degrees", "180 degrees"], answer: 0 },
      { q: "Where does the Prime Meridian run through?", choices: ["Greenwich in London", "Paris", "New York", "Cairo"], answer: 0 },
      { q: "At what angle is a globe usually tilted?", choices: ["23.5 degrees", "45 degrees", "90 degrees", "10 degrees"], answer: 0 },
      { q: "Why is the tilt important?", choices: ["It creates the seasons", "It makes globes look nice", "It helps them spin", "It shows the poles"], answer: 0 },
      { q: "Which country looks much bigger than it is on many flat maps?", choices: ["Greenland", "Brazil", "India", "Kenya"], answer: 0 },
      { q: "Latitude and longitude together give a place its...", choices: ["Unique coordinates", "Population", "Climate", "Name"], answer: 0 },
      { q: "Lines of longitude run...", choices: ["From pole to pole", "Around the middle", "In circles", "Diagonally"], answer: 0 },
      { q: "What was missing from the 1492 Erdapfel globe?", choices: ["The Americas", "Africa", "Asia", "Europe"], answer: 0 }
    ]
  } },

  { id: "continents", title: "The Seven Continents", emoji: "🌍",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🌍🌎🌏", text: "The land on Earth is split into seven really big pieces. Each big piece is called a continent." },
      { art: "🦁🐼🦘", text: "Africa has lions and elephants. Asia has pandas and tigers. Australia has kangaroos that hop!" },
      { art: "🧊🐧", text: "One continent is all ice and snow. It is called Antarctica, and penguins live there. Nobody lives there, only scientists visiting." }
    ],
    funFact: "Asia is the biggest continent of all. More than half of all the people in the whole world live there!",
    tryThis: "Sing the seven continents until you can say them without stopping: Africa, Asia, Europe, North America, South America, Australia, Antarctica.",
    questions: [
      { q: "How many continents are there?", choices: ["Seven", "Three", "Twenty"], answer: 0 },
      { q: "Which continent has kangaroos?", choices: ["Australia", "Africa", "Europe"], answer: 0 },
      { q: "Which continent is covered in ice?", choices: ["Antarctica", "Asia", "Africa"], answer: 0 },
      { q: "Which continent has lions and elephants?", choices: ["Africa", "Antarctica", "Australia"], answer: 0 },
      { q: "Which continent has pandas?", choices: ["Asia", "Europe", "South America"], answer: 0 },
      { q: "Which is the biggest continent?", choices: ["Asia", "Australia", "Europe"], answer: 0 },
      { q: "Who lives in Antarctica?", choices: ["Penguins and visiting scientists", "Big cities of people", "Nobody at all ever"], answer: 0 },
      { q: "A continent is a very big piece of...", choices: ["Land", "Water", "Cloud"], answer: 0 },
      { q: "Do you live on a continent?", choices: ["Yes", "No", "Only in summer"], answer: 0 },
      { q: "Which continent is Egypt in?", choices: ["Africa", "Europe", "Asia"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🌍7️⃣", text: "Earth's land is divided into seven continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia, listed here from largest to smallest. Together they cover only about 30 percent of the planet's surface; the rest is ocean." },
      { art: "🏔️🌾", text: "Asia is by far the biggest and most populated, home to over 4.7 billion people, the Himalayas, and the Gobi Desert. Africa is second, containing the Sahara, the Nile, and more countries than any other continent at 54." },
      { art: "🗽🌴", text: "North America runs from Arctic Canada to tropical Panama. South America holds the Amazon rainforest and the Andes, the world's longest mountain range on land. Europe is small but densely packed with nearly 50 countries." },
      { art: "🧩🐢", text: "The continents were once joined in a single supercontinent called Pangaea, about 250 million years ago. Tectonic plates slowly tore it apart, and they are still moving: the Atlantic widens by a few centimetres every year." }
    ],
    funFact: "Antarctica has no permanent residents, no countries, and no government. It is governed by an international treaty and used only for scientific research.",
    tryThis: "Print an outline world map and label all seven continents from memory. Then check your answers. Try again a week later and see how much stuck.",
    words: [
      { word: "Continent", meaning: "One of Earth's seven great landmasses." },
      { word: "Pangaea", meaning: "The single supercontinent that existed 250 million years ago." },
      { word: "Tectonic plates", meaning: "The giant moving pieces of Earth's crust." },
      { word: "Population", meaning: "The number of people living in a place." }
    ],
    questions: [
      { q: "Which is the largest continent by area?", choices: ["Asia", "Africa", "North America", "Antarctica"], answer: 0 },
      { q: "Which continent has the most countries?", choices: ["Africa, with 54", "Europe", "Asia", "South America"], answer: 0 },
      { q: "What was the ancient supercontinent called?", choices: ["Pangaea", "Atlantis", "Gondwana only", "Laurasia only"], answer: 0 },
      { q: "About how long ago did Pangaea exist?", choices: ["250 million years", "5,000 years", "1 million years", "2 billion years"], answer: 0 },
      { q: "What moves the continents?", choices: ["Tectonic plates", "Ocean currents", "Wind", "Earth's spin"], answer: 0 },
      { q: "Roughly how much of Earth's surface is land?", choices: ["About 30 percent", "About 70 percent", "About 50 percent", "About 10 percent"], answer: 0 },
      { q: "Where is the Amazon rainforest?", choices: ["South America", "Africa", "Asia", "Australia"], answer: 0 },
      { q: "Which continent has no countries or permanent residents?", choices: ["Antarctica", "Australia", "Europe", "Africa"], answer: 0 },
      { q: "How many people live in Asia?", choices: ["Over 4.7 billion", "About 500 million", "About 100 million", "About 1 billion"], answer: 0 },
      { q: "What is happening to the Atlantic Ocean?", choices: ["It is slowly widening", "It is shrinking fast", "It is staying exactly the same", "It is freezing"], answer: 0 }
    ]
  } },

  { id: "five-oceans", title: "The Five Oceans", emoji: "🌊",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "compass-directions", title: "North, South, East, West", emoji: "🧭",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-equator", title: "The Equator", emoji: "🌞",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "north-pole", title: "The North Pole", emoji: "🐻‍❄️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "south-pole", title: "The South Pole", emoji: "🐧",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "countries-flags", title: "Countries and Flags", emoji: "🚩",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "capital-cities", title: "Capital Cities", emoji: "🏛️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "north-america", title: "North America", emoji: "🦅",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "south-america", title: "South America", emoji: "🦜",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "europe", title: "Europe", emoji: "🏰",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "africa", title: "Africa", emoji: "🦁",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "asia", title: "Asia", emoji: "🐼",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "australia-oceania", title: "Australia and Oceania", emoji: "🦘",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "antarctica", title: "Antarctica", emoji: "🧊",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-usa", title: "The United States", emoji: "🗽",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "islands", title: "Islands", emoji: "🏝️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "famous-rivers", title: "Famous Rivers", emoji: "🏞️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "famous-mountains", title: "Famous Mountains", emoji: "🏔️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-sahara", title: "The Sahara Desert", emoji: "🏜️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "great-wall", title: "The Great Wall of China", emoji: "🧱",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "pyramids-egypt", title: "The Pyramids of Egypt", emoji: "🔺",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "eiffel-tower", title: "The Eiffel Tower", emoji: "🗼",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "statue-liberty", title: "The Statue of Liberty", emoji: "🗽",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "grand-canyon", title: "The Grand Canyon", emoji: "🏜️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "where-food-grows", title: "Where Our Food Comes From", emoji: "🌾",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "city-vs-village", title: "Cities and Villages", emoji: "🏙️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "landforms", title: "Hills, Valleys, and Plains", emoji: "⛰️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } }
  ]
};
