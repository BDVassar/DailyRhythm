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
        const goals = await dbContext.Goals.find({ creatorId })
        return goals
    }

    async getOneGoal(id) {
        const goal = await dbContext.Goals.findById(id)
        if (!goal) throw new BadRequest(`no goal by id: ${id}`)
        return goal
    }

    async updateGoal(goalId, body, accountId) {
        const currentGoal = await this.getOneGoal(goalId)
        if (currentGoal.archived) throw new BadRequest('You cannot edit an archived goal.')
        if (accountId != currentGoal.creatorId) throw new Forbidden('You cannot edit someone elses goal.')

        currentGoal.name = body.name ? body.name : currentGoal.name
        currentGoal.description = body.description ? body.description : currentGoal.description
        currentGoal.goalDate = body.goalDate ? body.goalDate : currentGoal.goalDate
        currentGoal.accomplished = body.accomplished ? body.accomplished : currentGoal.accomplished
        currentGoal.progress = body.progress ? body.progress : currentGoal.progress
        currentGoal.color = body.color ? body.color : currentGoal.color
        currentGoal.icon = body.icon ? body.icon : currentGoal.icon
        await currentGoal.save()
        return currentGoal

    }

    async archiveGoal(goalId, accountId) {
        const currentGoal = await dbContext.Goals.findById(goalId)
        if (accountId != currentGoal.creatorId) throw new Forbidden('You cannot archive someone elses goal.')
        currentGoal.archived = !currentGoal.archived
        await currentGoal.save()
        if (currentGoal.archived == true) {
            return `archived ${currentGoal.name}`
        } else {
            return `restored ${currentGoal.name}`
        }
    }
}

export const goalService = new GoalService()