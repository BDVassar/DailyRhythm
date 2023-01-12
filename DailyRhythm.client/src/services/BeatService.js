import { logger } from "../utils/Logger"
import { api } from "./AxiosService"
import { AppState } from "../AppState.js"
class BeatService {
    async createBeat(body) {
        const res = await api.post('api/beats', body)
        logger.log('[Creating Beat.]', res.data)
        AppState.Beats = res.data
        return res.data
    }

    async getBeatsByGoalId(goalId) {
        const res = await api.get('api/goals/' + goalId + '/beats')
        logger.log('[Getting beats by goal Id.]', res.data)
        AppState.getBeatsByGoalId = res.data
        return res.data
    }
    async getMyBeats() {
        const res = await api.get('account/beats')
        logger.log('Getting my beats.', res.data)
        AppState.Beats = res.data
        return res.data
    }
    async getOneBeat(beatId) {
        const res = await api.get('api/beats/' + beatId)
        logger.log('[Get Beat by beat Id]', res.data)
        AppState.activeBeat = res.data
    }
}
export const beatService = new BeatService()