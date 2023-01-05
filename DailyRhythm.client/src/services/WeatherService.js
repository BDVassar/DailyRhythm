import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { logger } from "../utils/Logger.js"
import { WeatherApi } from "./AxiosService.js"

class WeatherService {
    async getWeather() {
        const res = await WeatherApi.get()
        logger.log('Getting local weather', res.data)
        AppState.weather = new Weather(res.data)
    }
}
export const weatherService = new WeatherService()