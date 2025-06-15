import mongoose, { Schema } from "mongoose"

const reportSchema = new Schema(
    {
        reporter: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        contentId: {
            type: Schema.Types.ObjectId,
            required: true,
            refPath: 'reportedType'
        },
        reportReason: {
            type: String,
            required: true
        },
        reportedType: {
            type: String,
            required: true,
            enum: ["Question", "Answer", "Article", "Comment", "User"],
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
        reviewNotes: String,
        resolutionOutcome: {
            type: String,
            enum: ["resolved", "rejected", "escalated"]
        },
        reviewedAt: Date,
        resolvedAt: Date
    },
    {
        timestamps: true
    }
)

reportSchema.index(
    { 
        reporter: 1, 
        contentId: 1,
        reportedType: 1 
    },
    {
        unique: true 
    }
);

reportSchema.index(
    {
        status: 1, 
        priority: -1 
    }
);

export const Report = mongoose.model("Report", reportSchema)