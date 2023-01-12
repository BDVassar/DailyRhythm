import { api } from "./AxiosService";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger";
class RhythmService {
    async createRhythm(body) {
        const res = await api.post('api/rhythms', body)
        logger.log(res.data)
        AppState.rhythm = res.data
        return res.data
    }
    async getRhythmsByGoalId(goalId) {
        const res = await api.get('api/goals/' + goalId + '/rhythms')
        logger.log(res.data)
        AppState.rhythmsByGoalId = res.data
        return res.data
    }


}
export const rhythmService = new RhythmService()