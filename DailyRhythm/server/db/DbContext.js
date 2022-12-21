import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { BeatSchema } from '../models/Beat';
import { GoalSchema } from '../models/Goal';
import { RhythmSchema } from '../models/Rhythm';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Beats = mongoose.model('Beat', BeatSchema);
  Goals = mongoose.model('Goal', GoalSchema);
  Rhythms = mongoose.model('Rhythm', RhythmSchema);
}

export const dbContext = new DbContext()
