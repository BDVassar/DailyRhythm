import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { WeatherAPI } from "./AxiosService.js"

class WeatherService {
    async getWeather() {
        const res = await WeatherAPI.get()
        AppState.weather = new Weather(res.data)
    }
}
export const weatherService = new WeatherService()