import { Auth0Provider } from "@bcwdev/auth0provider"
import { beatService } from "../services/BeatService.js"
import BaseController from "../utils/BaseController.js"

export class BeatController extends BaseController {
    constructor() {
        super('api/beats')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createBeat)
            .get('/:id', this.getOneBeat)
            .put('/:id', this.updateBeat)
            .delete('/:id', this.archiveBeat)

    }
    async getOneBeat(req, res, next) {
        try {
            const beat = await beatService.getOneBeat(req.params.id)
            return res.send(beat)
        } catch (error) {
            next(error)
        }
    }
    async createBeat(req, res, next) {
        try {
            req.body.creatorId = req.userInfo.id
            const beat = await beatService.createBeat(req.body)
            return res.send(beat)
        } catch (error) {
            next(error)
        }
    }

    async updateBeat(req, res, next) {
        try {
            const updatedBeat = await beatService.updateBeat(req.params.id, req.body, req.userInfo.id)
            return res.send(updatedBeat)
        } catch (error) {
            next(error)
        }
    }

    async archiveBeat(req, res, next) {
        try {
            const beat = await beatService.archiveBeat(req.params.id, req.userInfo.id)
            return res.send(beat)
        } catch (error) {
            next(error)
        }
    }

}