import mongoose, { Schema } from "mongoose";


const leaderboardSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "user"
        },
        points: {
            type: Number,
            default: 0
        },
        rank: {
            type: Number,
            default: 0
        },
        timeFrame: {
            type: String,
            enum: ["daily", "weekly", "monthly", "all_time"]
        },
        recorded_at: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true
    }
)

export const Leaderboard = mongoose.model("Leaderboard", leaderboardSchema)