import axios from "axios"
import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const UnsplashApi = Axios.create({
  baseURL: 'https://api.unsplash.com/search/photos/',
  timeout: 8000,
  params: {
    client_id: 'Nn9OBE0iNJvFJop3A8lI8DACrD-Pmqk3OUqabk1tEx8'

  }
})

export const TypeFitApi = Axios.create({
  baseURL: 'https://type.fit/api/quotes',
  timeout: 8000,
})
export const WeatherAPI = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather',
    timeout: 8000,
})