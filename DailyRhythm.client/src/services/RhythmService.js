import { api } from "./AxiosService";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger";
class RhythmService {
    async createRhythm(body) {
        const res = await api.post('api/rhythms', body)
        logger.log(res.data)
        AppState.Rhythms = res.data
        return res.data
    }
    async getRhythmsByGoalId(goalId) {
        const res = await api.get('api/goals/' + goalId + '/rhythms')
        // logger.log('[Rhythms by GoalId]', res.data)
        AppState.rhythmsByGoalId = res.data
        return res.data
    }
    async getMyRhythms() {
        const res = await api.get('account/rhythms')
        // logger.log('getting my rhythms', res.data)
        AppState.Rhythms = res.data
        return res.data
    }
    async getOneRhythm(rhythmId) {
        const res = await api.get('api/rhythms/' + rhythmId)
        logger.log('[Get rhythm by rhythm Id]', res.data)
        AppState.activeRhythm = res.data
        return res.data
    }

    async accomplishRhythm(rhythmId) {
        const currentRhythm = await this.getOneRhythm(rhythmId)
        currentRhythm.accomplished = !currentRhythm.accomplished
        const res = await api.put('api/rhythms/' + rhythmId, currentRhythm)
        logger.log('[rhythm accomplished]', res.data)
        AppState.activeRhythm = res.data
    }
}
export const rhythmService = new RhythmService()