import mongoose, { Schema } from "mongoose"

const aiVideoExplainSchema = new Schema(
    {
        topic: {
            type: Schema.Types.ObjectId,
            ref: "Topic",
            index: true
        },
        videoUrl: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        generatedBy: {
            type: String,
            enum: ["User", "AI"]
        },
        generatedAt: {
            type: Date
        },
        status: {
            type: String,
            enum: ["active", "disabled", "pending_review"]
        },
        views: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

export const AiVideoExplain = mongoose.model("AiVideoExplain", aiVideoExplainSchema)