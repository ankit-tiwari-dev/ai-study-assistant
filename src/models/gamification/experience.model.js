import mongoose, { Schema } from "mongoose";

const experienceSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        totalXP:{
            type: Number,
            default: 0

        },
        currentLevel: {
            type: Number,
            default: 0
        },
        lastEarnedAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true
    }
)

export const Experience = mongoose.model("Experience", experienceSchema)