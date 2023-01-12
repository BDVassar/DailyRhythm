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

import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class RhythmService {
    async getMyRhythms() {
        const res = await api.get('account/rhythms')
        logger.log(res.data)
        AppState.Rhythms = res.data
    }

    async getOneRhythm(rhythmId) {
        const res = await api.get('api/rhythms/' + rhythmId)
        logger.log('[Get rhythm by rhythm Id]', res.data)
        AppState.activeRhythm = res.data
    }
}
