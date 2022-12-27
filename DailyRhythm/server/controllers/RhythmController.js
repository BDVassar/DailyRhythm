import { Auth0Provider } from "@bcwdev/auth0provider";
import { rhythmService } from "../services/RhythmService";
import BaseController from "../utils/BaseController";

export class RhythmController extends BaseController {
    constructor() {
        super('api/rhythms')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createRhythm)
            .get('/:id', this.getOneRhythm)
    }

    async createRhythm(req, res, next) {
        try {
            req.body.creatorId = req.userInfo.id
            const rhythm = await rhythmService.createRhythm(req.body)
            return res.send(rhythm)
        } catch (error) {
            next(error)
        }
    }

    async getOneRhythm(req, res, next) {
        try {
            const rhythm = await rhythmService.getOneRhythm(req.params.id)
            return res.send(rhythm)
        } catch (error) {
            next(error)
        }
    }




}