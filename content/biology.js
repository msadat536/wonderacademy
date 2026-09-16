/* Biology - 30 concepts.
   Concepts with pages and questions are playable. Empty ones show "coming soon" until a later wave.
   The correct answer is always written first (answer: 0); the app shuffles choices on screen. */
window.CONTENT = window.CONTENT || {};
window.CONTENT['biology'] = {
  id: "biology", title: "Biology", emoji: "🌱", color: "#58B368", tint: "#E2F5E6",
  concepts: [
  { id: "living-nonliving", title: "Living and Non-Living", emoji: "🌸",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🌱🐶👧", text: "Some things are alive. Plants, animals, and you! Living things grow bigger, need food and water, and have babies." },
      { art: "🪨🥄🚗", text: "Some things are not alive. A rock, a spoon, a car. They do not grow. They do not eat. They do not need water." },
      { art: "❓🤔", text: "Here is a tricky one. Is a cloud alive? It moves and changes... but it does not eat or grow babies. So no, not alive!" }
    ],
    funFact: "A tree is alive, but a wooden table is not. The table was made from a tree that is no longer living.",
    tryThis: "Walk around your home and point at ten things. For each one ask: does it grow? does it eat? Sort them into alive and not alive.",
    questions: [
      { q: "Which one is alive?", choices: ["A puppy", "A rock", "A chair"], answer: 0 },
      { q: "Which one is NOT alive?", choices: ["A spoon", "A tree", "A bird"], answer: 0 },
      { q: "Living things need...", choices: ["Food and water", "Batteries", "Paint"], answer: 0 },
      { q: "Do living things grow?", choices: ["Yes", "No", "Only on Mondays"], answer: 0 },
      { q: "Is a car alive?", choices: ["No", "Yes", "Sometimes"], answer: 0 },
      { q: "Is a flower alive?", choices: ["Yes", "No", "Only when picked"], answer: 0 },
      { q: "Do rocks have babies?", choices: ["No", "Yes", "Every spring"], answer: 0 },
      { q: "Are you a living thing?", choices: ["Yes", "No", "Only when running"], answer: 0 },
      { q: "Is a cloud alive?", choices: ["No", "Yes", "Yes, when it rains"], answer: 0 },
      { q: "Do living things need air?", choices: ["Yes", "No", "Only fish"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🧬🔬", text: "Biologists define a living thing by a checklist of characteristics. All living things are made of cells, take in energy, grow and develop, respond to their surroundings, get rid of waste, and reproduce. Something must do essentially all of these to count as alive." },
      { art: "🌱☀️", text: "Plants and animals get energy differently. Plants are producers, making their own food from sunlight, water, and carbon dioxide. Animals are consumers, getting energy by eating plants or other animals. Both need energy constantly to stay alive." },
      { art: "🦠🔍", text: "Life comes in a staggering range of sizes. Bacteria are single cells invisible to the eye, while a blue whale has around 100 trillion cells. Scientists sort all of it into groups, from broad kingdoms down to individual species." },
      { art: "🦠❓", text: "Some cases genuinely puzzle scientists. Viruses have genetic material and can reproduce, but only by hijacking a host cell, and they have no cells of their own. Most biologists therefore place them on the borderline rather than calling them fully alive." }
    ],
    funFact: "Your body contains roughly 30 trillion of your own cells, and about the same number of bacteria living in and on you, most of them helpful.",
    tryThis: "Test a borderline case: fire grows, consumes fuel, produces waste, and spreads. Which items on the living checklist does it fail? That gap is why the checklist has so many items.",
    words: [
      { word: "Cell", meaning: "The smallest building block of every living thing." },
      { word: "Producer", meaning: "An organism that makes its own food, like a plant." },
      { word: "Consumer", meaning: "An organism that eats other living things for energy." },
      { word: "Reproduce", meaning: "To make more of your own kind." }
    ],
    questions: [
      { q: "What are all living things made of?", choices: ["Cells", "Metal", "Crystals", "Fibres"], answer: 0 },
      { q: "What is a producer?", choices: ["An organism that makes its own food", "An animal that eats plants", "A type of bacteria", "A dead organism"], answer: 0 },
      { q: "What is a consumer?", choices: ["An organism that eats other living things", "A plant", "A rock", "A cell wall"], answer: 0 },
      { q: "Which is NOT on the checklist for life?", choices: ["Being able to speak", "Growing", "Reproducing", "Responding to surroundings"], answer: 0 },
      { q: "Why are viruses a borderline case?", choices: ["They have no cells and need a host to reproduce", "They are too small", "They move too fast", "They are not found in nature"], answer: 0 },
      { q: "About how many cells does a blue whale have?", choices: ["Around 100 trillion", "About 1 million", "About 1,000", "Exactly 1 billion"], answer: 0 },
      { q: "Plants make food from sunlight, water and...", choices: ["Carbon dioxide", "Oxygen", "Nitrogen", "Salt"], answer: 0 },
      { q: "Roughly how many of your own cells are in your body?", choices: ["About 30 trillion", "About 30 million", "About 30 billion", "About 300"], answer: 0 },
      { q: "What does it mean to reproduce?", choices: ["To make more of your own kind", "To grow larger", "To eat", "To move"], answer: 0 },
      { q: "Are most bacteria in your body harmful?", choices: ["No, most are helpful", "Yes, all of them", "There are none", "Only in children"], answer: 0 }
    ]
  } },

  { id: "plants", title: "How Plants Grow", emoji: "🌱",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🌰🌱", text: "Every big plant starts as a tiny seed. Put it in soil, give it water, and wait. Something amazing happens!" },
      { art: "🌱☀️💧", text: "A little green shoot pushes up toward the sun. Roots grow down into the soil to drink water. Up and down at the same time!" },
      { art: "🌳🍎", text: "With sun and water and time, the plant grows tall. Leaves, then flowers, then fruit with new seeds inside. And it starts all over again!" }
    ],
    funFact: "Plants make their own food using sunlight. You could sit in the sun all day and you would still be hungry, but a plant would be full!",
    tryThis: "Put a bean on damp cotton wool in a clear jar by a window. Keep it damp and watch for a week. You will see the root and shoot appear.",
    questions: [
      { q: "What does a plant start as?", choices: ["A seed", "A leaf", "A rock"], answer: 0 },
      { q: "What do seeds need to grow?", choices: ["Water and sunlight", "Sugar and salt", "Music"], answer: 0 },
      { q: "Which part grows down into the soil?", choices: ["Roots", "Leaves", "Flowers"], answer: 0 },
      { q: "What do roots do?", choices: ["Drink water", "Catch butterflies", "Make noise"], answer: 0 },
      { q: "Which way does the shoot grow?", choices: ["Up toward the sun", "Sideways", "Down"], answer: 0 },
      { q: "Where do new seeds come from?", choices: ["Fruit and flowers", "Roots", "The sky"], answer: 0 },
      { q: "Do plants make their own food?", choices: ["Yes, using sunlight", "No, they buy it", "They do not eat"], answer: 0 },
      { q: "What colour are most leaves?", choices: ["Green", "Blue", "Black"], answer: 0 },
      { q: "What happens if a plant gets no water?", choices: ["It wilts and dies", "It grows faster", "It turns into a rock"], answer: 0 },
      { q: "Where do plants usually grow?", choices: ["In soil", "In the air", "In fire"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🌿☀️", text: "Plants perform photosynthesis, one of the most important processes on Earth. Using energy from sunlight captured by the green pigment chlorophyll, they combine water drawn up from the roots with carbon dioxide from the air to make glucose, their food, releasing oxygen as a by-product." },
      { art: "🌱🔩", text: "Each part has a job. Roots anchor the plant and absorb water and minerals. The stem transports water up and food down through tiny tubes called xylem and phloem. Leaves are the solar panels where photosynthesis happens." },
      { art: "🌸🐝", text: "Flowers exist for reproduction. Pollen must travel from one flower to another, a job done by bees, butterflies, birds, and wind. Once pollinated, the flower develops into a fruit containing seeds, which are then spread by animals, wind, or water." },
      { art: "🌍🫁", text: "Plants sustain nearly all life on land. They form the base of almost every food chain, produce the oxygen animals breathe, hold soil together against erosion, and absorb carbon dioxide, which is why forests matter so much to the climate." }
    ],
    funFact: "A single large tree can release enough oxygen in a day for two to four people, while absorbing around 20 kilograms of carbon dioxide a year.",
    tryThis: "Put a white flower or celery stalk in water dyed with food colouring. Within a day the colour appears in the petals or leaves, showing the xylem carrying water upward.",
    words: [
      { word: "Photosynthesis", meaning: "How plants use sunlight to make food from water and carbon dioxide." },
      { word: "Chlorophyll", meaning: "The green pigment that captures sunlight." },
      { word: "Xylem", meaning: "Tubes that carry water up from the roots." },
      { word: "Pollination", meaning: "Moving pollen between flowers so seeds can form." }
    ],
    questions: [
      { q: "What is photosynthesis?", choices: ["Making food from sunlight, water and carbon dioxide", "Drinking water through roots", "Growing taller", "Dropping leaves"], answer: 0 },
      { q: "What pigment captures sunlight?", choices: ["Chlorophyll", "Melanin", "Carotene", "Keratin"], answer: 0 },
      { q: "What gas do plants release during photosynthesis?", choices: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], answer: 0 },
      { q: "What carries water up from the roots?", choices: ["Xylem", "Phloem", "Chlorophyll", "Stomata"], answer: 0 },
      { q: "What is the job of a flower?", choices: ["Reproduction", "Absorbing water", "Holding the plant up", "Storing food only"], answer: 0 },
      { q: "What is pollination?", choices: ["Moving pollen between flowers", "Watering a plant", "Growing roots", "Losing leaves"], answer: 0 },
      { q: "Which animal is a major pollinator?", choices: ["Bees", "Sharks", "Snakes", "Owls"], answer: 0 },
      { q: "What sugar do plants make for food?", choices: ["Glucose", "Lactose", "Sucralose", "Fructose only"], answer: 0 },
      { q: "Why do plants matter for climate?", choices: ["They absorb carbon dioxide", "They make rain", "They cool the sun", "They block wind"], answer: 0 },
      { q: "What do roots absorb besides water?", choices: ["Minerals", "Sunlight", "Oxygen only", "Pollen"], answer: 0 }
    ]
  } },

  { id: "seeds", title: "Amazing Seeds", emoji: "🌰",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "flowers", title: "Flowers and Bees", emoji: "🌺",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "trees", title: "Trees", emoji: "🌳",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "animal-groups", title: "Animal Groups", emoji: "🦁",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🐶🐱🐘", text: "Animals with fur or hair are called mammals. They drink milk from their mums when they are babies. Dogs, cats, elephants and YOU!" },
      { art: "🐦🐧🦅", text: "Animals with feathers are birds. All birds lay eggs. Most can fly, but penguins swim instead and ostriches run." },
      { art: "🐟🐸🦎", text: "Fish live in water and have scales. Frogs are amphibians, living in water then on land. Lizards and snakes are reptiles." }
    ],
    funFact: "A bat has fur and drinks milk as a baby, so it is a mammal, not a bird, even though it flies!",
    tryThis: "Think of five animals you love. For each one ask: does it have fur, feathers, or scales? That tells you its group.",
    questions: [
      { q: "Animals with fur are called...", choices: ["Mammals", "Birds", "Fish"], answer: 0 },
      { q: "Animals with feathers are...", choices: ["Birds", "Reptiles", "Mammals"], answer: 0 },
      { q: "Where do fish live?", choices: ["In water", "In trees", "Underground"], answer: 0 },
      { q: "What do all birds do?", choices: ["Lay eggs", "Drink milk", "Breathe underwater"], answer: 0 },
      { q: "Are you a mammal?", choices: ["Yes", "No", "Only sometimes"], answer: 0 },
      { q: "Which bird cannot fly?", choices: ["Penguin", "Eagle", "Sparrow"], answer: 0 },
      { q: "A frog is an...", choices: ["Amphibian", "Insect", "Bird"], answer: 0 },
      { q: "A snake is a...", choices: ["Reptile", "Mammal", "Fish"], answer: 0 },
      { q: "Baby mammals drink...", choices: ["Milk", "Juice", "Seawater"], answer: 0 },
      { q: "What covers a fish?", choices: ["Scales", "Feathers", "Fur"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🦴🐛", text: "The broadest split in the animal kingdom is between vertebrates, which have a backbone, and invertebrates, which do not. Surprisingly, about 97 percent of all animal species are invertebrates: insects, spiders, worms, jellyfish, and molluscs." },
      { art: "🐘🐦", text: "Vertebrates divide into five classes. Mammals have hair, are warm-blooded, and feed their young milk. Birds have feathers, are warm-blooded, and lay hard-shelled eggs. Both maintain a steady body temperature regardless of their surroundings." },
      { art: "🦎🐸🐟", text: "Reptiles have dry scaly skin and are cold-blooded, relying on their environment for warmth. Amphibians such as frogs have moist skin and typically begin life in water with gills before developing lungs. Fish live entirely in water, breathing through gills." },
      { art: "🐜🕷️", text: "Among invertebrates, arthropods are the largest group by far, with jointed legs and a hard external skeleton called an exoskeleton. Insects alone account for over a million known species, more than every other animal group combined." }
    ],
    funFact: "There are around 10 quintillion insects alive at any moment, roughly 1.4 billion insects for every single human being.",
    tryThis: "Spend 15 minutes in a garden or park counting every animal you see, then sort them into vertebrate and invertebrate. The invertebrates will almost certainly win.",
    words: [
      { word: "Vertebrate", meaning: "An animal with a backbone." },
      { word: "Invertebrate", meaning: "An animal without a backbone." },
      { word: "Warm-blooded", meaning: "Able to keep a steady body temperature." },
      { word: "Exoskeleton", meaning: "A hard skeleton on the outside of the body." }
    ],
    questions: [
      { q: "What is a vertebrate?", choices: ["An animal with a backbone", "An animal with fur", "A sea creature", "An animal that flies"], answer: 0 },
      { q: "About what share of animal species are invertebrates?", choices: ["97 percent", "50 percent", "10 percent", "25 percent"], answer: 0 },
      { q: "How many classes of vertebrates are there?", choices: ["Five", "Three", "Ten", "Two"], answer: 0 },
      { q: "Which two groups are warm-blooded?", choices: ["Mammals and birds", "Reptiles and fish", "Amphibians and fish", "Insects and spiders"], answer: 0 },
      { q: "What does cold-blooded mean?", choices: ["Body temperature depends on the surroundings", "The blood is literally cold", "It cannot survive winter", "It has no blood"], answer: 0 },
      { q: "What is an exoskeleton?", choices: ["A hard skeleton on the outside", "A backbone", "A type of shell for eggs", "An inner ear bone"], answer: 0 },
      { q: "Which is the largest invertebrate group?", choices: ["Arthropods", "Jellyfish", "Worms", "Molluscs"], answer: 0 },
      { q: "How do amphibians typically start life?", choices: ["In water, breathing with gills", "On land with lungs", "Inside eggs on trees", "In deserts"], answer: 0 },
      { q: "Roughly how many known insect species are there?", choices: ["Over a million", "About a thousand", "About fifty", "About ten million exactly"], answer: 0 },
      { q: "Why is a bat a mammal?", choices: ["It has fur and feeds its young milk", "It flies", "It lives in caves", "It lays eggs"], answer: 0 }
    ]
  } },

  { id: "mammals", title: "Mammals", emoji: "🐘",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "birds", title: "Birds", emoji: "🐦",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "fish", title: "Fish", emoji: "🐟",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "insects", title: "Insects", emoji: "🐞",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "reptiles", title: "Reptiles", emoji: "🦎",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "amphibians", title: "Amphibians", emoji: "🐸",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "butterfly-cycle", title: "The Butterfly Life Cycle", emoji: "🦋",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "frog-cycle", title: "The Frog Life Cycle", emoji: "🐸",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "human-body", title: "The Human Body", emoji: "🧍",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "heart", title: "The Heart", emoji: "❤️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "lungs", title: "Lungs and Breathing", emoji: "🫁",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "bones", title: "Bones and the Skeleton", emoji: "🦴",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "muscles", title: "Muscles", emoji: "💪",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "brain", title: "The Amazing Brain", emoji: "🧠",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "five-senses", title: "The Five Senses", emoji: "👀",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "teeth", title: "Teeth", emoji: "🦷",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "healthy-food", title: "Healthy Food", emoji: "🥦",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "germs", title: "Germs and Washing Hands", emoji: "🧼",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "sleep", title: "Why We Sleep", emoji: "😴",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "exercise", title: "Moving and Exercise", emoji: "🏃",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "habitats", title: "Animal Homes", emoji: "🏠",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "food-chains", title: "Food Chains", emoji: "🐛",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "baby-animals", title: "Baby Animals", emoji: "🐣",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "pets", title: "Caring for Pets", emoji: "🐶",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } }
  ]
};
