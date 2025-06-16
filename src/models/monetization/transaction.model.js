import mongoose, { Schema } from "mongoose";

const transactionSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        amount: {
            type: Number,
            required: true
        },
        currency: {
            type: String,
            enum: ["USD", "INR"]
        },
        transactionId: {
            type: String,
            required: true
        },
        paymentMethod: {
            type: String,
            enum: ["Card", "UPI", "Wallet"],
            default: "UPI"
        },
        status: {
            type: String,
            enum: ["pending", "completed", "failed"],
            default: "pending"
        },
        transactionType: {
            type: String,
            enum: ["subscription", "credit_purchase", "reward_redeem"]
        },
    },
    {
        timestamps: true
    }
);

export const Transaction = mongoose.model("Transaction", transactionSchema);