import { logger } from "../utils/Logger"
import { api } from "./AxiosService"
import { AppState } from "../AppState.js"

class BeatService {
    async createBeat(body) {
        const res = await api.post('api/beats', body)
        logger.log(res.data)
        AppState.Beats = res.data
        return res.data
    }
}
export const beatService = new BeatService()