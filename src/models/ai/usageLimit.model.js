import mongoose, { Schema } from "mongoose";

const usageLimitSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        aiFeature:{
            type: String,
            enum:["chat", "recommendation", "video_summary", "search", "question_generator"]
        },
        limitType: {
            type: String,
            enum: ["daily", "monthly", "lifetime"]
        },
        usageCount: {
            type: Number,
            default: 0
        },
        limit: {
            type: Number,
            required: true
        },
        resetAt: {
            type: Date
        },
        status: {
            type: String,
            enum: ["active", "blocked", "expired"], 
            default: "active"
        },
        lastUsedAt: {
            type: Date
        },
        isDeleted: { 
            type: Boolean,
            default: false 
        }

    },
    {
        timestamps:true
    }
)

usageLimitSchema.index({ user: 1, aiFeature: 1, limitType: 1 });

export const UsageLimit = mongoose.model("UsageLimit", usageLimitSchema)