import mongoose, { Schema } from "mongoose"

const reportSchema = new Schema(
    {
        reporter: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        reportedContentId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        reportReason: {
            type: String,
            required: true
        },
        reportedType: {
            type: String,
            enum: ["Question", "Answer", "Article", "Comment", "User"],
            required: true
        },
        reportType: {
            type: String,
            enum: ["Spam", "Abuse", "Harassment", "Fake News", "Other"],
            default: "Other"
        },
        status: {
            type: String,
            enum: ["pending", "in_progress", "reviewed", "closed"],
            default: "pending"
        },
        priority: {
            type: String,
            enum: ["low", "medium", "high"],
            default: "medium"
        },
        isReviewed: {
            type: Boolean,
            default: false
        },
        reviewer: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        reviewNotes: {
            type: String
        },
        resolutionOutcome: {
            type: String,
            enum: ["resolved", "rejected", "escalated"]
        },
        reviewedAt: {
            type: Date
        },
        resolvedAt: {
            type: Date
        }
    },
    {
        timestamps: true
    }
)

export const Report = mongoose.model("Report", reportSchema)