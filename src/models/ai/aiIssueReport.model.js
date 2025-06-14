import mongoose, {Schema} from "mongoose"

const aiIssueReportSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        feature: {
            type: String,
            required: true
        },
        issue: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ["open", "in_progress", "resolved"]
        },
        resolvedAt: {
            type: Date
        },
        screenshotUrl: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

export const AiIssueReport = mongoose.model("AiIssueReport", aiIssueReportSchema)