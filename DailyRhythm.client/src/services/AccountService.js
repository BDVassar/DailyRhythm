import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
import { Account } from '../models/Account'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = res.data
    } catch (error) {

      logger.error('HAVE YOU STARTED YOUR SERVER YET???', error)
    }
  }

  async updateAccount(editing) {
    try {
      const res = await api.put('/account', editing)
      logger.log('edit profile', res.data)
      AppState.account = new Account(res.data)
    } catch (error) {
      logger.error('Failed to edit account', error)
    }
  }
}

export const accountService = new AccountService()
