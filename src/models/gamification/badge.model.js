import mongoose, { Schema } from "mongoose";


const badgeSchema = new Schema(
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
        criteria:{
            type: String,
            required: true
        },
        badgeType: {
            type: String,
            enum:["achievement", "milestone", "participation"]
        },
        isActive: {
            type: Boolean,
            default: true
        },
        awardedAutomatically: {
            type: Boolean,
            default: false
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User"            
        },
        awardedTo: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ]
    },
    {
        timestamps: true
    }
)

export const Badge = mongoose.model("Badge", badgeSchema)