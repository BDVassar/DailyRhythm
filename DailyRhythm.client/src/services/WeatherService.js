import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { logger } from "../utils/Logger.js"
import { WeatherApi } from "./AxiosService.js"

class WeatherService {
    async getWeather() {
        if (AppState.searchWeather) {
            const city = AppState.searchWeather
            this.searchWeather(city)
        } else {
            const res = await WeatherApi.get('weather?q=boise')
            logger.log('Getting local weather', res.data)
            AppState.weather = new Weather(res.data)
        }
    }

    async searchWeather(city) {
        AppState.weatherSearch = city
        const res = await WeatherApi.get('weather', { params: city })
        logger.log('[Search Weather]', res.data)
        AppState.weather = new Weather(res.data)
    }
}
export const weatherService = new WeatherService()