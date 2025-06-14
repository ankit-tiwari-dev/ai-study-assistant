import mongoose, { Schema } from "mongoose"

const aiLogSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        actionType: {
            type: String,
            required: true
        },
        inputData: {
            type: Schema.Types.Mixed,
            required: true
        },
        outputData: {
            type: Schema.Types.Mixed,
            required: true
        },
        modelUsed: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ["Success", "Error"]
        },
        error: {
            type: String
        }
    }, 
    {
        timestamps: true
    }
)

export const AiLog = mongoose.model("AiLog", aiLogSchema)