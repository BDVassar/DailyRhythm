import { dbContext } from "../db/DbContext.js"

class BeatService {
  createBeat(body) {
    const beat = dbContext.Beats.create(body)
    return beat
  }
  getOneBeat(beatId) {
    const beat = dbContext.Beats.findById(beatId)
    return beat
  }
  updateBeat(body, accountId) {
      throw new Error("Method not implemented.")
  }
  
}

export const beatService = new BeatService()