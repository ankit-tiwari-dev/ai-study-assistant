import mongoose, { Schema } from "mongoose";

const milestoneSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        category: {
            type: String,
            enum: ["learning", "activity"]
        },
        criteria: {
            type: String,
            required: true
        },
        rewardPoints: {
            type: Number,
            default: 0
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

export const Milestone = mongoose.model("Milestone", milestoneSchema)