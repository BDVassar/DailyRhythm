import { AppState } from "../AppState.js"
import { BgImage } from "../models/BgImage.js"
import { UnsplashApi } from "./AxiosService.js"
import { logger } from "../utils/Logger.js"

class BgImageService {
  async getRandomPicture() {
    if (AppState.searchImage) {
      const search = AppState.searchImage
      this.searchImage(search)
    } else {
      const res = await UnsplashApi.get('?query=beach sunset')
      logger.log('[GETTING RANDOM IMAGE]', res.data.results)
      res.data.results.sort((a, b) => 0.5 - Math.random())
      AppState.BgImage = new BgImage(res.data.results[0])
    }
  }

  async searchImage(search) {
    AppState.imageSearch = search
    const res = await UnsplashApi.get('', { params: search })
    logger.log('[Search Images]', res.data.results)
    res.data.results.sort((a, b) => 0.5 - Math.random())
    AppState.BgImage = new BgImage(res.data.results[0])
  }
}
export const bgImageService = new BgImageService()