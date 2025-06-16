import mongoose, { Schema } from "mongoose";

const streakSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "user"
        },
        type: {
            type: String,
            enum: ["login", "quiz", "lesson", "video_watch"]
        },
        currentCount: {
            type: Number,
            default: 0
        },
        longestCount: {
            type: Number,
            default: 0
        },
        lastStreakDate: {
            type: Date,
            default: Date.now
        },
        startDate: {
            type: Date,
            default: Date.now
        },
        isBroken: {
            type: Boolean,
            default: false
        },
        brokenAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true
    }
)

export const Streak = mongoose.model("Streak", streakSchema)