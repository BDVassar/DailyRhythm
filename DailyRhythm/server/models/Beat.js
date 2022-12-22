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
    color: { type: String, default: '#ffaf87' },
    icon: { type: String, required: true, enum: ['mdi-weight-lifter', 'mdi-leaf', 'mdi-book-open-page-variant', 'mdi-food-apple', 'mdi-heart', 'mdi-lead-pencil', 'mdi-music-clef-treble', 'mdi-music', 'mdi-music-note', 'mdi-palette', 'mdi-paw', 'mdi-currency-usd', 'mdi-home', 'mdi-comment-text-outline', 'mdi-plus-thick', 'mdi-silverware', 'mdi-meditation', 'mdi-beach', 'mdi-power-sleep', 'mdi-star', 'mdi-cup-water', 'mdi-laptop', 'mdi-flower-tulip'], default: 'mdi-music-note' }
})