import { UnsplashApi } from "./AxiosService.js"

class BgImageService{
  async getRandomPicture(){
    const res = await UnsplashApi.get('?query=beach')
    console.log(res.data, 'getting random picture')
  }
}
export const bgImageService = new BgImageService()