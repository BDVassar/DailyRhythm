import { Auth0Provider } from "@bcwdev/auth0provider";
import { goalService } from "../services/GoalService";
import BaseController from "../utils/BaseController";

export class GoalController extends BaseController {
    constructor() {
        super('api/goals')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createGoal)
            .get('/:id', this.getOneGoal)
            .put(':id', this.updateGoal)
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
            next('failed to getOneGoal via controller', error)
        }
    }

    async updateGoal(req, res, next) {
        try {
            req.body.creatorId = req.userinfo.id
            const updatedGoal = await goalService.updateGoal(req.params.id, req.body, req.userInfo.id)
            return res.send(updatedGoal)
        } catch (error) {
            next('error updating goal', error)
        }
    }


}