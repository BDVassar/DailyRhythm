import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"
import { logger } from '../utils/Logger.js'

class GoalService {
    async createGoal(body) {
        const goal = await dbContext.Goals.create(body)
        logger.log(goal)
        return goal
    }

    async getMyGoals(creatorId) {
        const goals = await dbContext.Goals.find({creatorId})
        return goals
    }

    async getOneGoal(id) {
        const goal = await dbContext.Goals.findById(id)
        if (!goal) throw new BadRequest(`no goal by id: ${id}`)
        return goal
    }

    async updateGoal(goalId, data, userId) {
        const original = await dbContext.Goals.findById(goalId)
    }

    async archiveGoal(goalId, accountId) {
        const goal = await this.getOneGoal(goalId)
        await goal.save()
        return `archived ${goal.name}`
    }
}

export const goalService = new GoalService()