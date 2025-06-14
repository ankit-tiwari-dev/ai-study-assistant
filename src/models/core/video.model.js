import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description : {
            type: String,
            required: true
        },
        subject : {
            type: Schema.Types.ObjectId,
            ref: "Subject"
        },
        topic: {
            type: Schema.Types.ObjectId,
            ref: "Topic"
        },
        uploadedBy : {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        isAIGenerated: {
            type: Boolean,
            default: false
        },
        videoUrl: {
            type: String,
            required: true
        },
        thumbnailUrl: {
            type : String,
            required: true
        },
        tags: [String],
        duration: {
            type: Number,
            default: 0
        },
        views: {
            type : Number,
            default: 0
        },
        likes: {
            type : Number,
            default: 0
        },
        commentsCount: {
            type : Number,
            default: 0
        },
        status: {
            type : String,
            enum: ["published", "draft", "archived"],
            default: "published"
        },
        isActive: {
            type : Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
)

videoSchema.index({ subject: 1 });
videoSchema.index({ topic: 1 });

export const Video = mongoose.model("Video", videoSchema)