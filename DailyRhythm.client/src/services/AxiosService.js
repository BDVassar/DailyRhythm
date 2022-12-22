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
    client_id: 'Nn9OBE0iNJvFJop3A8lI8DACrD-Pmqk3OUqabk1tEx8',
    per_page: 1
  }
})

export const zenQuoteAPI = Axios.create({
  baseURL: 'https://zenquotes.io/api ',
  timeout: 8000,
  params: {

  }
})