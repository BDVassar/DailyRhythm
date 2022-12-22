import { AppState } from "../AppState.js"
import { BgImage } from "../models/BgImage.js"
import { UnsplashApi } from "./AxiosService.js"

class BgImageService{
  async getRandomPicture(){
    const res = await UnsplashApi.get('?query=beach')
    res.data.results.sort((a, b) => 0.5 - Math.random())
    AppState.BgImage = new BgImage(res.data.results[0])
    console.log(AppState.BgImage, 'Appstate Data')
  }
}
export const bgImageService = new BgImageService()