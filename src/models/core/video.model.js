import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            unique: true,
            required: true,
            lowercase: true,
            trim: true
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
        transcriptText: String,
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
        language: { 
            type: String, 
            default: "English" 
        },
        difficultyLevel: {
            type: String,
            enum: ["beginner", "intermediate", "advanced"],
            default: "beginner"
        },
        status: {
            type : String,
            enum: ["published", "draft", "archived"],
            default: "published"
        },
        isFlagged: { 
            type: Boolean, 
            default: false 
        },
        flagReason: String
    },
    {
        timestamps: true
    }
)

videoSchema.index(
    { 
        title: "text", 
        description: "text", 
        tags: 1 
    }
);

videoSchema.index(
    { 
        subject: 1 
    }
);

videoSchema.index(
    {
        topic: 1 
    }
);

videoSchema.index(
    {
        uploadedBy: 1 
    }
);

videoSchema.index(
    {
        status: 1 
    }
);
    
export const Video = mongoose.model("Video", videoSchema)