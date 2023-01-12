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

export const rhythmService = new RhythmService()