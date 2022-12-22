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

    async updateGoal(goalId, body, accountId) {
        const currentGoal = await dbContext.Goals.findById(goalId)
        if (currentGoal.archived) throw new BadRequest('You cannot edit an archived goal.')
        if (accountId == currentGoal.creatorId) throw new Forbidden('You cannot edit someone elses goal.')
        
        currentGoal.name = body.name ? body.name : currentGoal.name
        currentGoal.description = body.description ? body.name : currentGoal.name
        currentGoal.goalDate = body.goalDate ? body.goalDate : currentGoal.goalDate
        currentGoal.accomplished = body.accomplished ? body.accomplished : currentGoal.accomplished
        currentGoal.progress = body.progress ? body.progress : currentGoal.progress
        currentGoal.color = body.color ? body.color : currentGoal.color
        currentGoal.icon = body.icon ? body.icon : currentGoal.icon
        await currentGoal.save()
        return currentGoal    

    }

    async archiveGoal(goalId, accountId) {
        const goal = await this.getOneGoal(goalId)
        await goal.save()
        return `archived ${goal.name}`
    }
}

export const goalService = new GoalService()