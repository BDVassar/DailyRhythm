import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class SettingsService {
  async getSettings() {
    const res = await api.get('account')
    // logger.log('Getting Settings', res.data)
    AppState.settings = res.data
  }

  async updateAccount(editing) {
    try {
      logger.log('current editing', editing)
      const res = await api.put('/account', editing)
      logger.log('update settings', res.data)
      AppState.settings = res.data
      AppState.account = res.data
    } catch (error) {
      logger.error('Failed to update settings', error)
    }
  }

}

export const settingsService = new SettingsService()