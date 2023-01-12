import { api } from "./AxiosService";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger";
class RhythmService {
    async getRhythmsByGoalId(goalId) {
        const res = await api.get('api/goals/' + goalId + '/rhythms')
        logger.log(res.data)
        AppState.rhythmsByGoalId = res.data
        return res.data
    }
}
export const rhythmService = new RhythmService()