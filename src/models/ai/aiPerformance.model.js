import mongoose, { Schema } from "mongoose";

const aiPerformanceSchema =  new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        iqScore: {
            type: Number,
            default: 0
        },
        badge: {
            type: String,
            enum: ["Beginner", "Intermediate", "Advanced", "Master", "GrandMaster", "Genius", "Expert"]
        },
        testType: {
            type: String,
            enum: ["IQ Test", "Subject Quiz"]
        },
        subject: {
            type: Schema.Types.ObjectId,
            ref: "Subject"
        },
        topic: {
            type: Schema.Types.ObjectId,
            ref: "Topic"
        },
        score: {
            type: Number,
            min: 0,
            default: 0
        },
        timeTaken: {
            type: Number
        },
        level:{
            type: String,
            enum: ["Beginner", "Intermediate", "Advanced", "Master", "GrandMaster", "Genius", "Expert"]
        },
        aiSummary: {
            type: String,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

export const AiPerformance = mongoose.model("AiPerformace", aiPerformanceSchema)