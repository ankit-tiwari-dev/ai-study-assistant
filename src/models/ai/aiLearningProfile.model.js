import mongoose, {Schema} from "mongoose";

const aiLearningProfileSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        preferredSubjects: [{
            type: Schema.Types.ObjectId,
            ref: "Subject"
        }],
        learningStyle: {
            type: String
        },
        strengths: {
            type: [String],
            default: []
        },
        weaknesses: {
            type: [String],
            default: []
        },
        goals: {
            type: [String],
            default: []
        },
        lastUpdatedByAI: {
            type: Date
        }
    },
    {
        timestamps: true
    }
)

export const AiLearningProfile = mongoose.model("AiLearningProfile", aiLearningProfileSchema)