import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"
class GoalService {
    async createGoal(body) {
        const goal = await dbContext.Goals.create(body)
        //TODO - Add Schema populate here
        await goal.populate(`our schema here`)
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

    async archiveGoal(goalId) {
        const goal = await this.getOneGoal(goalId)
        await goal.save()
        return `archived ${goal.name}`
    }
}

export const goalService = new GoalService()