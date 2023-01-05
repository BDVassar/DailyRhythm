import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class BeatService {
  async getMyBeats(creatorId) {
    const beats = await dbContext.Beats.find({ creatorId })
    return beats.filter(beat => beat.archived === false)
  }
  async createBeat(body) {
    const beat = await dbContext.Beats.create(body)
    return beat
  }
  async getOneBeat(beatId) {
    const beat = await dbContext.Beats.findById(beatId)
    if (!beat) throw new BadRequest('No beat found.')
    return beat
  }
  async getBeatsByGoalId(goalId, accountId) {
    const goalBeats = await dbContext.Beats.find({ goalId })
    return goalBeats.filter(beat => beat.archived === false)
  }
  async updateBeat(beatId, body, accountId) {
    const currentBeat = await this.getOneBeat(beatId)
    if (currentBeat.archived) throw new BadRequest('You cannot edit an archived beat.')
    if (accountId != currentBeat.creatorId) throw new Forbidden('You cannot edit someone elses beat.')
    currentBeat.name = body.name ? body.name : currentBeat.name
    currentBeat.description = body.description ? body.description : currentBeat.description
    currentBeat.completedDate = body.completedDate ? body.completedDate : currentBeat.completedDate
    currentBeat.priority = body.priority ? body.priority : currentBeat.priority
    currentBeat.accomplished = body.accomplished ? body.accomplished : currentBeat.accomplished
    currentBeat.archived = body.archived ? body.archived : currentBeat.archived
    currentBeat.color = body.color ? body.color : currentBeat.color
    currentBeat.icon = body.icon ? body.icon : currentBeat.icon
    await currentBeat.save()
    return currentBeat
  }

  async archiveBeat(beatId, accountId) {
    const currentBeat = await this.getOneBeat(beatId)
    if (accountId != currentBeat.creatorId) throw new Forbidden('You cannot edit someone elses beat.')
    currentBeat.archived = !currentBeat.archived
    await currentBeat.save()
    if (currentBeat.archived == true) {
      return `archived ${currentBeat.name}`
    } else {
      return `restored ${currentBeat.name}`
    }
  }
}

export const beatService = new BeatService()