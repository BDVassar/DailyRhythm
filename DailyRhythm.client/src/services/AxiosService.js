import axios from "axios"
import Axios from 'axios'
import { baseURL, appid, client_id } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const UnsplashApi = Axios.create({
  baseURL: 'https://api.unsplash.com/search/photos/',
  timeout: 8000,
  params: {
    client_id: client_id
  }
})

export const TypeFitApi = Axios.create({
  baseURL: 'https://type.fit/api/quotes',
  timeout: 8000,
})

export const PoetryApi = Axios.create({
  baseURL: 'https://poetrydb.org/author/Emily Dickinson',
  timeout: 8000,
})

export const WeatherApi = Axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  timeout: 8000,
  params: {
    appid: appid
  }
})

// Might need for geocoding weather
// export const GeoWeatherApi = Axios.create({
//   baseURL: 'http://api.openweathermap.org/geo/1.0/direct',
//   timeout: 8000,
//   params: {
//     appid: appid
//   }
// })

export const DadJokesApi = new axios.create({
  baseURL: 'https://icanhazdadjoke.com/',
  timeout: 8000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})
