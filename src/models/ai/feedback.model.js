import mongoose, { Schema } from "mongoose"

const feedbackSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        aiFeature: {
            type: String,
            enum: ["chat", "recommendation", "video_summary"]
        },
        feedbackText:{
            type: String
        },
        rating:{
            type: Number
        },
        suggestion:{
            type: String
        },
        isAnonymous:{
            type: Boolean,
            default: false
        },
        status: {
            type: String,
            enum: ["pending", "reviewed", "ignored"],
            default: "pending"
        },
        reviewedAt: {
            type: Date
        }
    },
    {
        timestamps: true
    }
)

export const AiFeedback = mongoose.model("AiFeedback", feedbackSchema);