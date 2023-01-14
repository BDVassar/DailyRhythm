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
        logger.log('[Getting my goals.]', res.data)
        AppState.Goals = res.data
    }

    async getOneGoal(goalId) {
        const res = await api.get('api/goals/' + goalId)
        logger.log('[Get goal by goal Id]', res.data)
        AppState.activeGoal = res.data
    }

    async updateGoal(goalData) {
        logger.log(goalData)
        const res = await api.put('api/goals/' + goalData.goalId, goalData)
        logger.log('[Edit goal]', res.data)
    }
}
export const goalService = new GoalService()