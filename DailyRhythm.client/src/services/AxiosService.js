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

export const WeatherApi = Axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather?q=boise,id,us',
  timeout: 8000,
  params: {
    appid: appid
  }
})

export const DadJokesApi = new axios.create({
  baseURL: 'https://icanhazdadjoke.com/',
  timeout: 8000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})
