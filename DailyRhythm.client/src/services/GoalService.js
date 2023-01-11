import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class GoalService {
    async createGoal(body) {
        const res = await api.post('api/goals', body)
        logger.log(res.data)
        AppState.Goals.push(res.data)
        return res.data
    }

    async getMyGoals() {
        const res = await api.get('account/goals')
        logger.log(res.data)
        AppState.Goals = res.data
    }

    async getOneGoal(goalId) {
        const res = await api.get('api/goals/' + goalId)
        logger.log('[Get goal by goal Id]', res.data)
        AppState.activeGoal = res.data
    }
}
export const goalService = new GoalService()