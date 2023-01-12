import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class SettingsService {
  async getSettings() {
    const res = await api.get('account')
    logger.log(res.data)
    AppState.settings = res.data
  }

  async updateAccount(search, editing) {
    try {
      editing.bgImage = search
      logger.log('current editing', editing)
      const res = await api.put('/account', editing)
      logger.log('update settings', res.data)
      AppState.settings = res.data
    } catch (error) {
      logger.error('Failed to update settings', error)
    }
  }

}

export const settingsService = new SettingsService()