import { reactive } from 'vue'
import { BgImage } from "./models/BgImage.js"

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/BgImage.js').BgImage{}} */
  BgImage: {},
  /** @type {import('./models/Quote.js').Quote{}} */
  Quote: {},
  /** @type {import('./models/Weather.js').Weather{}} */
  weather: {},
  /** @type {import('./models/DadJoke.js').DadJoke{}} */
  dadJoke: {},
  /** @type {import('./models/Poem.js').Poem{}} */
  Poem: {},
  Goals: [],
  activeGoal: null,
  imageSearch: {},
  weatherSearch: {},
  settings: {},
  rhythmsByGoalId: [],
})
