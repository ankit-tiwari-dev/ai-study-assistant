import mongoose, { Schema } from "mongoose";


const achievementSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        iconUrl: {
            type: String,
            required: true
        },
        criteriaType:{
            type: String,
            enum: ["quiz", "video", "streak", "points", "custom"]
        },
        criteriaValue: {
            type: Number,
            default: 0
        },
        rewardPoints: {
            type: Number,
            default: 0
        },
        isActive: {
            type: Boolean,
            default: true
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User"            
        },
        autoAward: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

export const Achievement = mongoose.model("Achievement", achievementSchema)