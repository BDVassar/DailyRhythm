export class Weather {
    constructor(data) {
        this.base = data.base
        this.clouds = data.clouds
        this.cod = data.cod
        this.coord = data.coord
        this.dt = data.dt
        this.id = data.id
        this.main = data.main
        this.name = data.name
        this.origin = data.origin
        this.sys = data.sys
        this.timezone = data.timezone
        this.visibility = data.visibility
        this.weather = data.weather
        this.wind = data.wind
    }
}