import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors.js"

class RhythmService {
    async getMyRhythms(creatorId) {
        const rhythms = await dbContext.Rhythms.find({ creatorId })
        return rhythms
    }

    async getOneRhythm(rhythmId) {
        const rhythm = await dbContext.Rhythms.findById(rhythmId)
        if (!rhythm) throw new BadRequest('No rhythm found.')
        return rhythm
    }

    async createRhythm(body) {
    }
}

export const rhythmService = new RhythmService