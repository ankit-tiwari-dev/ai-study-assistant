import mongoose, { Schema } from "mongoose";

const redemptionLogSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        reward: {
            type: Schema.Types.ObjectId,
            ref: "Reward"
        },
        pointsUsed: {
            type: Number,
            default: 0
        },
        status: {
            type: String,
            enum: ["pending", "approved", "rejected", "delivered"]
        },
        handledBy: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        actionAt: {
            type: Date,
            default: Date.now
        }               
    },
    {
        timestamps: true
    }
)

export const RedemptionLog = mongoose.model("RedemptionLog", redemptionLogSchema)