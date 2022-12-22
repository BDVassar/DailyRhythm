import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import { goalService } from "../services/GoalService.js"
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/goals', this.getMyGoals)
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
}
