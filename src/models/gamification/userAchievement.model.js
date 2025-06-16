import mongoose, { Schema } from "mongoose";

const userAchievementSchema = new Schema(
    {
        user:{
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        achievement: {
            type: Schema.Types.ObjectId,
            ref: "Achievement"
        },
        earnedAt: {
            type: Date,
            default: Date.now
        },
        awardedBy: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        isRevoked: {
            type: Boolean,
            default: false
        },
        revokedAt: {
            type: Date
        }
    },
    {
        timestamps: true
    }
)

export const UserAchievement = mongoose.model("UserAchievement", userAchievementSchema)