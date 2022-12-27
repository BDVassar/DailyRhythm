import { Schema } from "mongoose";

export const RhythmSchema = new Schema({
    name: { type: String, maxLength: 50, minLength: 2, required: true },
    goalId: { type: Schema.Types.ObjectId, required: true, ref: 'Goal' },
    createdAt: { type: Date, required: true },
    creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
    description: { type: String, required: false, minLength: 2, maxLength: 1000 },
    start: { type: Date, required: true, },
    end: { type: Date, required: false, },
    completedDate: { type: Date, required: false },
    priority: { type: String, required: false, enum: ['high', 'medium', 'low',], default: '', lowercase: true },
    accomplished: { type: Boolean, required: true, default: false },
    archived: { type: Boolean, required: true, default: false },
    color: { type: String, default: '#99c2ac' },
    icon: { type: String, required: true, enum: ['mdi-weight-lifter', 'mdi-leaf', 'mdi-book-open-page-variant', 'mdi-food-apple', 'mdi-heart', 'mdi-lead-pencil', 'mdi-music-clef-treble', 'mdi-music', 'mdi-music-note', 'mdi-palette', 'mdi-paw', 'mdi-currency-usd', 'mdi-home', 'mdi-comment-text-outline', 'mdi-plus-thick', 'mdi-silverware', 'mdi-meditation', 'mdi-beach', 'mdi-power-sleep', 'mdi-star', 'mdi-cup-water', 'mdi-laptop', 'mdi-flower-tulip'], default: 'mdi-music' }
})