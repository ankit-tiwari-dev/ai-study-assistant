import mongoose, { Schema } from "mongoose";

const userPurchaseSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    itemType: {
      type: String,
      enum: ["course", "credits", "subscription", "bundle"],
      required: true
    },
    itemId: {
      type: Schema.Types.ObjectId,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      enum: ["INR", "USD"],
      default: "INR"
    },
    status: {
      type: String,
      enum: ["completed", "pending", "failed"],
      default: "pending"
    },
    paymentId: {
      type: String,
      required: true
    },
    transaction: {
      type: Schema.Types.ObjectId,
      ref: "Transaction"
    },
    creditsGranted: {
      type: Number,
      default: 0
    },
    purchaseDate: {
      type: Date,
      default: Date.now
    },
    isRefunded: {
      type: Boolean,
      default: false
    },
    refundReason: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export const UserPurchase = mongoose.model("UserPurchase", userPurchaseSchema);
