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
export const WeatherAPI = Axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather',
    timeout: 8000,
})

// export const DadJokesApi = new axios.create({
//     baseURL: 'https://dad-jokes.p.rapidapi.com/random/joke',
//     timeout: 8000,
//     headers: {
//         common: {
//             'x-rapidapi-key': 'a0ff27e692msh7766b73ebc40ac4p1e7647jsn570d1f2b64bf'
//         }
//     }
// })
<<<<<<< Updated upstream
export const DadJokesApi = Axios.create({
=======
export const DadJokesApi = new axios.create({
>>>>>>> Stashed changes
    baseURL: 'https://icanhazdadjoke.com/',
    timeout: 8000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
<<<<<<< Updated upstream


=======
>>>>>>> Stashed changes
