import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AccountSchema = new Schema(
  {
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String },
    // NOTE If you wish to add additional properties do so here
    bgImage: { type: String, required: true, default: 'beach sunset', maxLength: 50 },
    weatherLocation: { type: String, required: true, default: 'boise' },
    weatherOn: { type: Boolean, required: true, default: true },
    clockOn: { type: Boolean, required: true, default: true },
    timerOn: { type: Boolean, required: true, default: true },
    quoteType: { type: String, required: true, enum: ['inspiration', 'dadJokes', 'poetry'], default: 'inspiration' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

