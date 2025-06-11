import mongoose, {Schema} from "mongoose";

const articleSchema = new Schema(
    {
        author: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        authorName: {
            type: String
        },
        authorAvatar: {
            type: String
        },
        title: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            unique: true,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        summary: {
            type: String,
            required: true
        },
        tags: {
            type: [String], 
            default: []
        },
        viewsCount: {
            type: Number,
            default: 0
        },
        likesCount: {
            type: Number,
            default: 0
        },
        bookmarkedBy: [{
            type: Schema.Types.ObjectId,
            ref: "User"
        }],
        commentsCount: {
            type: Number,
            default: 0
        },
        readTime: {
            type: String
        },
        isPublished: {
            type: Boolean,
            default: false
        },
        isFlagged: {
            type: Boolean,
            default: false
        },
        flagReason: {
            type: String
        },
        isReviewed: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

export const Articles = mongoose.model("Articles", articleSchema)