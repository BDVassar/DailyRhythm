import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = res.data
    } catch (error) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async editAccount(editing) {
    try {
      const res = await api.put('/account', editing)
      AppState.account = res.data
      logger.log('edit profile', res.data)
    } catch (error) {
      logger.error('Failed to edit account', error)
    }
  }
}

export const accountService = new AccountService()
