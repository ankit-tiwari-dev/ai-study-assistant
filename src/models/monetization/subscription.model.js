import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        price: {
            type: Number,
            required: true
        },
        billingCycle: {
            type: String,
            enum: ["monthly", "yearly"]
        },
        features: [
            {
                title: String,
                description: String
            }
        ],
        aiCredits: {
            type: Number,
            default: 0
        },
        isActive: {
            type: Boolean,
            default: true
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "Admin"
        }
    },
    {
        timestamps: true
    }
)

export const Subscription = mongoose.model("Subscription", subscriptionSchema)