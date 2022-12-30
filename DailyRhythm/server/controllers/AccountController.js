import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import { beatService } from "../services/BeatService.js"
import { goalService } from "../services/GoalService.js"
import { rhythmService } from "../services/RhythmService.js"
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/goals', this.getMyGoals)
      .get('/rhythms', this.getMyRhythms)
      .get('/beats', this.getMyBeats)
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async getMyGoals(req, res, next) {
    try {
      const goals = await goalService.getMyGoals(req.userInfo.id)
      return res.send(goals)
    } catch (error) {
      next('failed to get goals via GoalController', error)
    }
  }

  async getMyRhythms(req, res, next) {
    try {
      const rhythms = await rhythmService.getMyRhythms(req.userInfo.id)
      return res.send(rhythms)
    } catch (error) {
      next('error getting all rhythms from controller', error)
    }
  }

  async getMyBeats(req, res, next) {
    try {
      const beats = await beatService.getMyBeats(req.userInfo.id)
      return res.send(beats)
    } catch (error) {
      next(error)
    }
  }
}
