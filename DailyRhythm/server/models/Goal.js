import { Schema } from "mongoose";

export const GoalSchema = new Schema({
    name: { type: String, maxLength: 50, minLength: 2, required: true },
    createdAt: { type: Date, required: true },
    creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
    description: { type: String, required: false, minLength: 2, maxLength: 1000 },
    goalDate: { type: Date, required: true },
    accomplished: { type: Boolean, required: true, default: false },
    archived: { type: Boolean, required: true, default: false },
    progress: { type: Number, required: true, default: 0 },
    color: { type: String, default: '#0CC0D4' },
    icon: { type: String, required: true, enum: [], }
})



