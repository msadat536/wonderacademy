/* Story Time - 30 concepts. Filled concepts are playable; empty ones show "coming soon".
   The correct answer is always written first (answer: 0); the app shuffles choices on screen. */
window.CONTENT = window.CONTENT || {};
window.CONTENT['story-time'] = {
  id: "story-time", title: "Story Time", emoji: "📚", color: "#E76F51", tint: "#FBE3DC",
  concepts: [
  { id: "the-lost-kite", title: "The Lost Kite", emoji: "🪁",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🪁😊", text: "Zara had a red kite with a long yellow tail. She loved it more than any toy. Every windy day she ran to the park with it." },
      { art: "🌬️😮", text: "One day the wind blew extra hard. The string slipped from her hand. Up, up, up went the kite, over the trees and away!" },
      { art: "😢🐦", text: "Zara sat down and cried. A little bird landed beside her. It chirped, then flew toward the big oak tree. Was it showing her something?" },
      { art: "🌳🪁", text: "There, caught in the branches, was her red kite! A tall neighbour helped her get it down. Zara said thank you to the neighbour and to the bird too." }
    ],
    funFact: "Zara felt sad, but she did not give up. She looked, she noticed the bird, and she asked for help. That is how problems get solved!",
    tryThis: "Draw the red kite in the oak tree. Then draw the little bird. What do you think the bird was saying?",
    questions: [
      { q: "What colour was Zara's kite?", choices: ["Red", "Blue", "Green"], answer: 0 },
      { q: "What colour was the tail?", choices: ["Yellow", "Black", "Purple"], answer: 0 },
      { q: "What made the kite fly away?", choices: ["The wind blew extra hard", "A dog grabbed it", "It broke"], answer: 0 },
      { q: "How did Zara feel first?", choices: ["Sad", "Happy", "Sleepy"], answer: 0 },
      { q: "Who landed beside her?", choices: ["A little bird", "A cat", "A frog"], answer: 0 },
      { q: "Where did the bird fly?", choices: ["To the big oak tree", "To the sea", "To the shop"], answer: 0 },
      { q: "Where was the kite?", choices: ["Caught in the branches", "In a pond", "In a car"], answer: 0 },
      { q: "Who helped get it down?", choices: ["A tall neighbour", "Her teacher", "A robot"], answer: 0 },
      { q: "What did Zara say?", choices: ["Thank you", "Go away", "Nothing"], answer: 0 },
      { q: "What did Zara do instead of giving up?", choices: ["Looked and asked for help", "Went home", "Bought a new kite"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🪁😊", text: "Zara's kite was not the fanciest in the park, but it was hers. She had painted the red diamond herself and tied the yellow tail from strips of an old scarf. On windy Saturdays she was always first through the gate." },
      { art: "🌬️😮", text: "That morning the wind arrived in gusts, the kind that snatch. One tug pulled the spool clean out of her fingers. She lunged, missed, and watched the red diamond shrink over the oaks until it was a dot, then nothing." },
      { art: "😢🐦", text: "She sat on the bench feeling foolish for crying over a kite. A sparrow landed on the armrest, looked at her sideways, chirped twice, and flew a short hop toward the oldest oak. It stopped, looked back, and hopped again." },
      { art: "🌳🔭", text: "It was probably nothing. But she followed anyway, and thirty feet up, wedged between two branches, hung a flash of red. Her neighbour Mr. Okafor, who was walking his dog, fetched a long pole from his garage and worked it free in ten patient minutes." },
      { art: "🪁💭", text: "Walking home, Zara thought about how close she had come to going home empty-handed. The kite had been findable the whole time. The only thing that had changed was that she stood up and looked." }
    ],
    funFact: "In stories, a moment like the sparrow's hop is called a turning point: the place where things start to change direction.",
    tryThis: "Rewrite the ending so Zara does not follow the bird. What happens instead? Notice how one small decision changes the whole story.",
    words: [
      { word: "Gust", meaning: "A sudden strong burst of wind." },
      { word: "Lunged", meaning: "Made a sudden forward movement." },
      { word: "Turning point", meaning: "The moment in a story where things change direction." },
      { word: "Findable", meaning: "Able to be found if you look." }
    ],
    questions: [
      { q: "Who painted the red diamond on the kite?", choices: ["Zara herself", "Her father", "A shopkeeper", "Mr. Okafor"], answer: 0 },
      { q: "What was the yellow tail made from?", choices: ["Strips of an old scarf", "Ribbon from a shop", "Paper", "Wool"], answer: 0 },
      { q: "What kind of wind took the kite?", choices: ["Sudden gusts", "A gentle breeze", "A hurricane", "No wind at all"], answer: 0 },
      { q: "Why did Zara feel foolish?", choices: ["For crying over a kite", "For losing money", "For being late", "For shouting"], answer: 0 },
      { q: "How did the sparrow behave?", choices: ["It hopped toward the oak and looked back", "It flew away fast", "It sang a song", "It slept"], answer: 0 },
      { q: "How high was the kite?", choices: ["About thirty feet", "About three feet", "About three hundred feet", "On the ground"], answer: 0 },
      { q: "What did Mr. Okafor use?", choices: ["A long pole", "A ladder", "A drone", "His dog"], answer: 0 },
      { q: "How long did it take him?", choices: ["Ten patient minutes", "Ten seconds", "An hour", "All day"], answer: 0 },
      { q: "What is the story's turning point?", choices: ["The sparrow's hop toward the oak", "The kite being painted", "Walking home", "The wind arriving"], answer: 0 },
      { q: "What is the lesson Zara draws?", choices: ["The kite was findable once she stood up and looked", "Kites are not worth having", "Birds always help", "Wind is dangerous"], answer: 0 }
    ]
  } },

  { id: "the-honest-woodcutter", title: "The Honest Woodcutter", emoji: "🪓",
    video: { young: "", older: "" },
  young: {
    pages: [
      { art: "🪓🌲", text: "A poor woodcutter named Hamid chopped wood by the river every day. His axe was old, but it was the only one he had." },
      { art: "💦😱", text: "One day his axe slipped and SPLASH, it fell into the deep river! Hamid could not swim. He sat down and put his head in his hands." },
      { art: "✨🪓", text: "An old man appeared and dived in. He came up holding a golden axe. Is this yours? he asked. Hamid said, No, mine is old and plain." },
      { art: "🪓🪓🪓", text: "The old man dived again and again, and finally brought up Hamid's old axe. Because Hamid told the truth, the old man gave him the golden axe as a gift, and the silver one too!" }
    ],
    funFact: "Hamid could have said the golden axe was his. Nobody would have known. But he knew, and that is what honesty really is.",
    tryThis: "Act this story out with a grown-up. One of you is Hamid and one is the old man. Use a wooden spoon for the axe!",
    questions: [
      { q: "What was the woodcutter's name?", choices: ["Hamid", "Zara", "Omar"], answer: 0 },
      { q: "Where did he chop wood?", choices: ["By the river", "On a mountain", "In a city"], answer: 0 },
      { q: "What happened to his axe?", choices: ["It fell in the river", "It broke", "It was stolen"], answer: 0 },
      { q: "Could Hamid swim?", choices: ["No", "Yes", "Only a little"], answer: 0 },
      { q: "Who appeared?", choices: ["An old man", "A fish", "A king"], answer: 0 },
      { q: "What did the old man bring up first?", choices: ["A golden axe", "Hamid's axe", "A fish"], answer: 0 },
      { q: "What did Hamid say?", choices: ["No, mine is old and plain", "Yes, that is mine", "Give it to me"], answer: 0 },
      { q: "What did Hamid get in the end?", choices: ["All three axes", "Nothing", "Only the old one"], answer: 0 },
      { q: "Why was Hamid rewarded?", choices: ["He told the truth", "He was strong", "He was fast"], answer: 0 },
      { q: "Would anyone have known if he lied?", choices: ["No, but Hamid would know", "Yes, everyone", "The fish"], answer: 0 }
    ]
  },
  older: {
    pages: [
      { art: "🪓🌲", text: "Hamid cut firewood on the riverbank and sold it in the village, which earned him just enough. His axe had belonged to his father. The handle was worn smooth and the blade had been sharpened so many times it was narrower than it should be, but it was the one tool that stood between his family and hunger." },
      { art: "💦😱", text: "One afternoon a swing went wrong. The axe head glanced off a knot, twisted out of his grip, and vanished into the fast brown water. Hamid could not swim. He knew exactly what that lost axe meant, and he sat on the bank with his head in his hands." },
      { art: "✨🪓", text: "An old man he had never seen stepped out from the trees, asked what had happened, and without another word waded in and disappeared beneath the surface. He came up holding an axe of solid gold. Is this yours? Hamid looked at it a long moment. No, he said. Mine is iron, and old." },
      { art: "🪓🪓", text: "The old man dived again and returned with an axe of silver. Again Hamid shook his head, though the silver alone would have fed his family for years. The third time, the old man surfaced with a worn iron axe on a smooth handle, and Hamid's whole face changed." },
      { art: "🎁💭", text: "Then the old man handed him all three. You told the truth when a lie would have cost you nothing and gained you a fortune, he said. That is worth more than gold. Hamid walked home carrying three axes and thinking that he had nearly not been the kind of man who deserved them." }
    ],
    funFact: "This kind of story is called a fable: a short tale with a clear lesson, usually testing a character's choice rather than their strength or cleverness.",
    tryThis: "Think of a time you could have taken credit for something that was not yours and nobody would have known. What did you do? What did it cost or gain you?",
    words: [
      { word: "Glanced off", meaning: "Struck at an angle and bounced away." },
      { word: "Fable", meaning: "A short story with a clear moral lesson." },
      { word: "Integrity", meaning: "Being honest even when no one is checking." },
      { word: "Worn", meaning: "Smoothed or thinned by long use." }
    ],
    questions: [
      { q: "Who had the axe belonged to before Hamid?", choices: ["His father", "A neighbour", "The old man", "A shopkeeper"], answer: 0 },
      { q: "Why was the blade narrower than it should be?", choices: ["It had been sharpened many times", "It was cheaply made", "It was broken", "It was new"], answer: 0 },
      { q: "How did the axe end up in the river?", choices: ["It glanced off a knot and twisted from his grip", "He threw it", "It was stolen and dropped", "A wave took it"], answer: 0 },
      { q: "What did the lost axe mean for Hamid?", choices: ["His family might go hungry", "A day off work", "A trip to the village", "Nothing serious"], answer: 0 },
      { q: "What did the old man bring up first?", choices: ["A gold axe", "A silver axe", "Hamid's axe", "A fish"], answer: 0 },
      { q: "What would the silver axe alone have done?", choices: ["Fed his family for years", "Nothing useful", "Made him a king", "Bought a boat"], answer: 0 },
      { q: "How did Hamid react to seeing his own axe?", choices: ["His whole face changed", "He was disappointed", "He said nothing", "He asked for the gold"], answer: 0 },
      { q: "What reason did the old man give for the gift?", choices: ["Honesty when lying would have cost nothing", "Hamid's strength", "Hamid's poverty", "Hamid's skill"], answer: 0 },
      { q: "What kind of story is this?", choices: ["A fable", "A biography", "A news report", "A mystery"], answer: 0 },
      { q: "What did Hamid think on the way home?", choices: ["He nearly was not the kind of man who deserved the axes", "He should buy a boat", "He should sell the gold", "He wanted more axes"], answer: 0 }
    ]
  } },

  { id: "the-little-lantern", title: "The Little Lantern", emoji: "🏮",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-brave-snail", title: "The Brave Snail", emoji: "🐌",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-sharing-tree", title: "The Sharing Tree", emoji: "🌳",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-cloud-who-cried", title: "The Cloud Who Cried", emoji: "☁️",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-tortoise-and-the-hill", title: "The Tortoise and the Hill", emoji: "🐢",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-lion-who-said-sorry", title: "The Lion Who Said Sorry", emoji: "🦁",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-boy-and-the-star", title: "The Boy and the Star", emoji: "🌟",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-quiet-drum", title: "The Quiet Drum", emoji: "🥁",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-camel-who-counted", title: "The Camel Who Counted", emoji: "🐪",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-two-brothers", title: "The Two Brothers", emoji: "👬",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-tiny-seed", title: "The Tiny Seed", emoji: "🌱",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-goat-who-would-not-share", title: "The Goat Who Would Not Share", emoji: "🐐",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-night-market", title: "The Night Market", emoji: "🌃",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-fox-and-the-well", title: "The Fox and the Well", emoji: "🦊",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-girl-who-fixed-things", title: "The Girl Who Fixed Things", emoji: "🔧",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-sleepy-volcano", title: "The Sleepy Volcano", emoji: "🌋",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-owl-who-could-not-sleep", title: "The Owl Who Could Not Sleep", emoji: "🦉",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-race-to-the-river", title: "The Race to the River", emoji: "🏁",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-kind-baker", title: "The Kind Baker", emoji: "🥖",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-lost-mitten", title: "The Lost Mitten", emoji: "🧤",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-whale-who-sang", title: "The Whale Who Sang", emoji: "🐋",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-rainy-day-castle", title: "The Rainy Day Castle", emoji: "🏰",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-ant-and-the-crumb", title: "The Ant and the Crumb", emoji: "🐜",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-boy-who-cried-dragon", title: "The Boy Who Cried Dragon", emoji: "🐉",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-moon-picnic", title: "The Moon Picnic", emoji: "🌕",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-three-lanterns", title: "The Three Lanterns", emoji: "🎑",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-bridge-of-sticks", title: "The Bridge of Sticks", emoji: "🌉",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } },

  { id: "the-last-page", title: "The Last Page", emoji: "📖",
    video: { young: "", older: "" },
    young: { pages: [], questions: [] },
    older: { pages: [], questions: [] } }
  ]
};
