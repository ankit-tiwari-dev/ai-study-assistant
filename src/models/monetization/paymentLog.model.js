import mongoose, { Schema, SchemaType } from "mongoose";

const paymentLogSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        transaction: {
            type: Schema.Types.ObjectId,
            ref: "Transaction"
        },
        transactionId: {
            type: String,
            required: true
        },
        eventType: {
            type: String,
            enum: [ "payment_intent.succeeded", "subscription.renewed"]
        },
        payload: {
            type: Schema.Types.Mixed
        },
        loggedAt: {
            type: Date,
            default: Date.now
        },
        status: {
            type: String,
            enum: ["logged", "processed", "error"]
        }
    },
    {
        timestamps: true
    }
);

export const PaymentLog = mongoose.model("PaymentLog", paymentLogSchema)