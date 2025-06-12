import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            unique: true,
            lowercase: true,
            trim: true
        },
        subject: {
            type: Schema.Types.ObjectId,
            ref: "Subject"
        },
        attachments: {
            type: [String],
            default: []
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        updatedBy: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        tags: [String],
        resources: {
            type: [String],// Cloudinary URL
            default: []
        },
        status: {
            type: String,
            enum: ["active", "archived", "draft"]
        },
        order: {
            type: Number, 
            default: 0
        },
        estimatedTime: {
            type: Number,
            default: 0
        },
        isActive: {
            type: Boolean,
            default : true
        }
    },
    {
        timestamps: true
    }
)

export const Topic = mongoose.model("Topic", topicSchema) 