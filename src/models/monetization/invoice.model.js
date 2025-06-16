import mongoose, { Schema } from "mongoose";

const invoiceSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    invoiceNumber: {
      type: String,
      required: true,
      unique: true
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
    items: [
      {
        title: String,
        quantity: Number,
        unitPrice: Number
      }
    ],
    paymentStatus: {
      type: String,
      enum: ["paid", "pending", "failed"],
      default: "pending"
    },
    transaction: {
      type: Schema.Types.ObjectId,
      ref: "Transaction"
    },
    issuedAt: {
      type: Date,
      default: Date.now
    },
    dueDate: {
      type: Date
    },
    notes: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export const Invoice = mongoose.model("Invoice", invoiceSchema);
