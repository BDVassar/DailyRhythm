import { rhythmService } from "../services/RhythmService";
import BaseController from "../utils/BaseController";

export class RhythmController extends BaseController {
    constructor() {
        super('api/rhythms')
        this.router
            .post('', this.createRhythm)
            .get('', this.getAllRhythms)
    }

    async createRhythm(req, res, next) {
        try {
            req.body.rhythm.accountId = req.userInfo.id
            const rhythm = await rhythmService.createRhythm(req.body)
            return res.send(rhythm)
        } catch (error) {
            next('error creating rhythm from the controller', error)
        }
    }

    async getAllRhythms(req, res, next) {
        try {
            const rhythms = await rhythmService.getAllRhythms()
            return res.send(rhythms)
        } catch (error) {
            next('error getting all rhythms from controller', error)
        }
    }


}