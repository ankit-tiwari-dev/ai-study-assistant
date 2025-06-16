import mongoose, { Schema } from "mongoose";

const userBadgeSchema = new Schema(
    {
        user:{
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        badge: {
            type: Schema.Types.ObjectId,
            ref: "Badge"
        },
        awardedAt: {
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

export const UserBadge = mongoose.model("UserBadge", userBadgeSchema)