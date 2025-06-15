import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        slug: {
            type: String,
            unique: true,
            lowercase: true,
            trim: true
        },
        subject: {
            type: Schema.Types.ObjectId,
            ref: "Subject", 
            required: true
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
            enum: ["active", "archived", "draft"],
            default: "active"
        },
        order: {
            type: Number, 
            default: 0
        },
        estimatedTime: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

topicSchema.index(
    {
        subject: 1,
        order: 1 
    }
); 

topicSchema.index(
    {
        slug: 1 
    }
); 

topicSchema.index(
    {
        title: "text", 
        description: "text", 
        tags: 1 
    }
);

topicSchema.index(
    {
        status: 1
    }
);

export const Topic = mongoose.model("Topic", topicSchema) 