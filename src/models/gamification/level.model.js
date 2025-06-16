import mongoose, { Schema } from "mongoose";

const levelSchema = new Schema(
    {
        levelNumber: {
            type: Number,
            default:0
        },
        title: {
            type: String,
            required: true
        },
        requiredXP: {
            type: Number,
            default:0
        },
        rewardPoints: {
            type: Number,
            default:0
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

export const Level = mongoose.model("Level", levelSchema)