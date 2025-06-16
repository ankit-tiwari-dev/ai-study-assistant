import mongoose, { Schema } from "mongoose";

const creditSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        creditAmount: {
            type: Number,
            default: 0
        },
        validityInDays: {
            type: Number,
            default: 0
        },
        isSystemDefined: {
            type: Boolean,
            default: true,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "System"
        },
        creditType: {
            type: String,
            enum: ["bonus", "purchase", "reward", "default"]
        }
    },
    {
        timestamps: true
    }
);

export const Credit = mongoose.model("Credit", creditSchema)