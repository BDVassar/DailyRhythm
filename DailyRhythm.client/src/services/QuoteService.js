import { Quote } from "../models/Quote.js";
import { logger } from "../utils/Logger.js";
import { TypeFitApi } from "./AxiosService.js";
import { AppState } from "../AppState.js"

class QuoteService {
  async getRandomQuote() {
    const res = await TypeFitApi.get()
    logger.log('[GETTING RANDOM QUOTE]', res.data)
    res.data.sort((a, b) => 0.5 - Math.random())
    AppState.Quote = new Quote(res.data[0])
  }
}

export const quoteService = new QuoteService()