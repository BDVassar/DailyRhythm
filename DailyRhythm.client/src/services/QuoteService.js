import { Quote } from "../models/Quote.js";
import { logger } from "../utils/Logger.js";
import { ZenQuoteApi } from "./AxiosService.js";
import { AppState } from "../AppState.js"

class QuoteService {
  async getRandomQuote() {
    const res = await ZenQuoteApi.get('')
    logger.log('[GETTING RANDOM QUOTE]', res.data)
    // AppState.Quote = new Quote(res.data)
  }
}

export const quoteService = new Quote