import { Auth0Provider } from "@bcwdev/auth0provider";
import { beatService } from "../services/BeatService.js";
import { goalService } from "../services/GoalService";
import { rhythmService } from "../services/RhythmService.js";
import BaseController from "../utils/BaseController";

export class GoalController extends BaseController {
    constructor() {
        super('api/goals')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createGoal)
            .get('/:id', this.getOneGoal)
            .get('/:id/rhythms', this.getRhythmsByGoalId)
            .get('/:id/beats', this.getBeatsByGoalId)
            .put('/:id', this.updateGoal)
            .delete('/:id', this.archiveGoal)
    }
    
    
    async createGoal(req, res, next) {
        try {
            req.body.creatorId = req.userInfo.id
            const goal = await goalService.createGoal(req.body)
            return res.send(goal)
        } catch (error) {
            next(error)
        }
    }
    
    async getOneGoal(req, res, next) {
        try {
            const goal = await goalService.getOneGoal(req.params.id)
            return res.send(goal)
        } catch (error) {
            next(error)
        }
    }
    async getRhythmsByGoalId(req, res, next) {
        try {
            const rhythms = await rhythmService.getRhythmsByGoalId(req.params.id, req.userInfo.id)
            return res.send(rhythms)
        } catch (error) {
            next(error)
        }
    }

    async getBeatsByGoalId(req, res, next) {
        try {
            const beats = await beatService.getBeatsByGoalId(req.params.id, req.userInfo.id)
            return res.send(beats)
        } catch (error) {
            next(error)
        }
    }
    
    async updateGoal(req, res, next) {
        try {
            const updatedGoal = await goalService.updateGoal(req.params.id, req.body, req.userInfo.id)
            return res.send(updatedGoal)
        } catch (error) {
            next(error)
        }
    }

    async archiveGoal(req, res, next) {
        try {
            const message = await goalService.archiveGoal(req.params.id, req.userInfo.id)
            return res.send(message)
        } catch (error) {
            next(error)
        }
    }


}