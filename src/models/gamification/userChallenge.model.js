import mongoose, { Schema } from "mongoose";

const userChallengeSchema = new Schema(
    {
        user:{
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        challenge: {
            type: Schema.Types.ObjectId,
            ref: "Challenge"
        },
        progressValue: {
            type: Number,
            default: 0
        },
        isCompleted: {
            type: Boolean,
            default: false
        },
        completedAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true
    }
)

export const UserChallenge = mongoose.model("UserChallenge", userChallengeSchema)