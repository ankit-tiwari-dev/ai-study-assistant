import mongoose, { Schema } from "mongoose";

const feedbackSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        contentId: {
            type:  Schema.Types.ObjectId
        },
        contentType:{
            type: String,
            enum: ["Question", "Answer", "Article", "Video"]            
        },
        rating: {
            type: Number,
            default: 0
        },
        text: {
            type: String
        },
        isAnonymous:{
            type: Boolean,
            default: false
        },
        isFlagged: {
            type: Boolean,
            default: false
        },
        flagReason: {
            type: String
        },
        status: {
            type: String,
            enum: ["pending", "approved", "rejected"],
            default: "pending"
        },
        isReviewed: {
            type: Boolean,
            default: false
        },
        reviewedAt:{
            type: Date
        }        
    },
    {
        timestamps: true
    }
)

export const Feedback = mongoose.model("Feedback", feedbackSchema)