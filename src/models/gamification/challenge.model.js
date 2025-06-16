import mongoose, { Schema } from "mongoose";

const challengeSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        type: {
            type: String,
            enum:["quiz", "video", "login", "streak"]
        },
        targetValue:{
            type: Number,
            default: 0
        },
        rewardPoints: {
            type: Number,
            default: 0
        },
        startDate: {
            type: Date,
            default: Date.now    
        },
        endDate: {
            type: Date,
            default: Date.now
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
)

export const Challenge = mongoose.model("Challenge", challengeSchema)