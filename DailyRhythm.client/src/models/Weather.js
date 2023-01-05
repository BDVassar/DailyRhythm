export class Weather {
    constructor(data) {
        this.id = data.id
        this.location = data.name
        this.kelvin = data.main.temp
        this.tempF = Math.floor((this.kelvin - 273.15) * 1.8 + 32)
        this.tempC = Math.floor((this.kelvin - 273.15))
        this.tempMinF = Math.floor((data.main.temp_min - 273.15) * 1.8 + 32)
        this.tempMaxF = Math.floor((data.main.temp_max - 273.15) * 1.8 + 32)
        this.feelsLikeF = Math.floor((data.main.feels_like - 273.15) * 1.8 + 32)
        this.tempMinC = Math.floor((data.main.temp_min - 273.15))
        this.tempMaxC = Math.floor((data.main.temp_max - 273.15))
        this.feelsLikeC = Math.floor((data.main.feels_like - 273.15))
        this.description = data.weather[0].description
        this.condition = data.weather[0].main
        this.icon = data.weather[0].icon
    }
}