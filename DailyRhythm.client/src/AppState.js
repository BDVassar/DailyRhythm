import { reactive } from 'vue'
import { BgImage } from "./models/BgImage.js"

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/BgImage').BgImage[]} */
  BgImages: [],
})
