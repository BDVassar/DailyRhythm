import { dbContext } from "../db/DbContext"

class RhythmService {
    async getAllRhythms() {
        const rhythms = await dbContext.Rhythms.find()
        return rhythms
    }

    async createRhythm(body) {
    }
}

export const rhythmService = new RhythmService