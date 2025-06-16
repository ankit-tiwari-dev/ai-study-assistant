import mongoose, { Schema } from "mongoose";

const usageLogSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        actionType: {
            type: String,
            enum: ["ai_query", "video_generation", "pdf_summarization"]
        },
        creditsUsed: {
            type: Number,
            default: 0
        },
        status: {
            type: String,
            enum: ["success", "failed"]
        },
        inputSummary: {
            type: String
        },
        gatewayResponse: {
            type: Schema.Types.Mixed
        }
    },
    {
        timestamps: true
    }
);

export const UsageLog = mongoose.model("UsageLog", usageLogSchema)