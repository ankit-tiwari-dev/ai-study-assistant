import mongoose, { Schema } from "mongoose";

const userRewardSchema = new Schema(
    {
        user:{
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
        redeemedAt: {
            type: Date,
            default: Date.now
        },
        status: {
            type: String,
            enum: ["pending", "approved", "rejected", "delivered"] 
        },
        deliveryDetails: String,
        approvedBy:{
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
)

export const UserReward = mongoose.model("UserReward", userRewardSchema)