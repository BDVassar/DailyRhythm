import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AccountSchema = new Schema(
  {
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String },
    // NOTE If you wish to add additional properties do so here
    bgImage: { type: String, default: 'beach sunset', maxLength: 50 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

