import mongoose, { Schema } from "mongoose";

const userCreditSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        creditsEarned: {
            type: Number,
            required: true
        },
        creditsUsed: {
            type: Number,
            default: 0
        },
        currentBalance: {
            type: Number,
            default: 0
        },
        source: {
            type: String,
            enum: ["subscription", "bonus", "referral", "admin"]
        },
        earnedAt: {
            type: Date,
            default: Date.now,
        },
        expiresAt: {
            type: Date,
            default: Date.now,
        }
    },
    {
        timestamps: true
    }
);

export const UserCredit = mongoose.model("UserCredit", userCreditSchema)