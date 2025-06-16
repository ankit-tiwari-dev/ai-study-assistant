import mongoose, { Schema } from "mongoose";

const scoreSchema = new Schema(
    {
        user:{
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        subject: {
            type: Schema.Types.ObjectId,
            ref: "Subject"
        },
        topic:{
            type: Schema.Types.ObjectId,
            ref: "Topic"
        },
        score: {
            type: Number,
            default: 0
        }, 
        source: {
            type: String,
            enum: ["quiz", "practice", "exam", "assignment"]
        },
        attemptDate: {
            type: Date,
            default: Date.now
        } 
    },
    {
        timestamps: true
    }
)

export const Score = mongoose.model("Score", scoreSchema)