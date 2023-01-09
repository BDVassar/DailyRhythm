import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class GoalService {
    async createGoal(body) {
        const res = await api.post('api/goals', body)
        logger.log(res.data)
        AppState.goals.push(res.data)
    }
}
export const goalService = new GoalService()