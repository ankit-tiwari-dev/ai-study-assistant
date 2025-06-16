import mongoose, { Schema } from "mongoose";

const paymentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      enum: ["INR", "USD"],
      default: "INR",
    },
    paymentMethod: {
      type: String,
      enum: ["card", "upi", "wallet", "netbanking"],
    },
    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },
    paymentGateway: {
      type: String,
      enum: ["Razorpay", "Stripe", "PayPal"],
    },
    paymentId: {
      type: String,
      required: true,
    },
    paymentDate: {
      type: Date,
      default: Date.now,
    },
    purpose: {
      type: String,
      enum: ["subscription", "credit_purchase", "course_purchase"],
    },
    receiptUrl: {
      type: String,
    },
    failureReason: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Payment = mongoose.model("Payment", paymentSchema);