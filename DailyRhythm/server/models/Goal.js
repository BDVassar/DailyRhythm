import { Schema } from "mongoose";

export const GoalSchema = new Schema({
    name: { type: String, maxLength: 50, minLength: 2, required: true },
    createdAt: { type: Date, required: true, default: new Date },
    creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
    description: { type: String, required: false, minLength: 2, maxLength: 1000 },
    goalDate: { type: Date, required: true, default: new Date },
    accomplished: { type: Boolean, required: true, default: false },
    archived: { type: Boolean, required: true, default: false },
    progress: { type: Number, required: true, default: 0 },
    color: { type: String, default: '#0cc0d4' },
    icon: { type: String, required: true, enum: ['mdi-weight-lifter', 'mdi-leaf', 'mdi-book-open-page-variant', 'mdi-food-apple', 'mdi-heart', 'mdi-lead-pencil', 'mdi-music-clef-treble', 'mdi-music', 'mdi-music-note', 'mdi-palette', 'mdi-paw', 'mdi-currency-usd', 'mdi-home', 'mdi-comment-text-outline', 'mdi-plus-thick', 'mdi-silverware', 'mdi-meditation', 'mdi-beach', 'mdi-power-sleep', 'mdi-star', 'mdi-cup-water', 'mdi-laptop', 'mdi-flower-tulip'], default: 'mdi-music-clef-treble' }
}, { timestamps: true, toJSON: { virtuals: true } })
