import mongoose, { Schema } from "mongoose";

const userSubscriptionSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        subscriptionPlan: {
            type: Schema.Types.ObjectId,
            ref: "Subscription",
        },
        startDate: {
            type: Date,
            default: Date.now,
        },
        endDate: {
            type: Date,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        renewalStatus: {
            type: String,
            enum: ["active", "cancelled", "paused"],
            default: "active",
        },
        paymentStatus: {
            type: String,
            enum: ["pending", "paid", "failed"],
            default: "pending",
        },
        paymentMethod: {
            type: String,
        },
        transactionId: {
            type: String, 
        },
    },
    {
        timestamps: true
    }
);

export const UserSubscription = mongoose.model("UserSubscription", userSubscriptionSchema)