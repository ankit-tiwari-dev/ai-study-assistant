import mongoose, { Schema } from "mongoose";

const rewardSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        pointsRequired: {
            type: Number,
            default: 0
        },
        quantity:{
            type: Number,
            default: 0
        },
        isActive: {
            type: Boolean,
            default: true
        },
        imageUrl: {
            type: String,
            required: true
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User"            
        },
        redeemLimit:{
            type: Number,
            default: 0
        },
        expiresAt:{
            type: Date
        },
    },
    {
        timestamps: true
    }
)

export const Reward = mongoose.model("Reward", rewardSchema)