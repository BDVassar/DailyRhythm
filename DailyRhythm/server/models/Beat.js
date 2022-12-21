import { Schema } from "mongoose";

export const BeatSchema = new Schema({
    name: { type: String, maxLength: 50, minLength: 2, required: true },
    goalId: { type: String },
    createdAt: { type: Date, required: true },
    creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
    description: { type: String, required: false, minLength: 2, maxLength: 1000 },
    completedDate: { type: Date, required: false },
    priority: { type: String, required: false, enum: ['high', 'medium', 'low',], default: '', lowercase: true },
    accomplished: { type: Boolean, required: true, default: false },
    archived: { type: Boolean, required: true, default: false },
    color: { type: String, default: '#0CC0D4' },
    icon: { type: String, required: true }
})