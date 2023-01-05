import { Quote } from "../models/Quote.js";
import { logger } from "../utils/Logger.js";
import { DadJokesApi, TypeFitApi } from "./AxiosService.js";
import { AppState } from "../AppState.js"
import axios from "axios";
import { DadJoke } from "../models/DadJoke.js";

class QuoteService {
  async getRandomQuote() {
    const res = await TypeFitApi.get()
    logger.log('[GETTING RANDOM QUOTE]', res.data)
    res.data.sort((a, b) => 0.5 - Math.random())
    AppState.Quote = new Quote(res.data[0])
  }

  async getRandomDadJoke() {
    const res = await DadJokesApi.get()
    logger.log(['Getting Dad Joke'], res.data)
    AppState.dadJoke = new DadJoke(res.data)
  }
}

export const quoteService = new QuoteService()