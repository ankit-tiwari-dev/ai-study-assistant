import mongoose, {Schema} from "mongoose";

const articleSchema = new Schema(
    {
        author: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        authorName: String,
        authorAvatar: String,
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
        status: {
            type: String,
            enum: ["draft", "published", "archived"],
            default: "draft"
        },
        publishedAt: Date,
        featured: {
            type: Boolean,
            default: false
        },
        viewsCount: {
            type: Number,
            default: 0
        },
        likesCount: {
            type: Number,
            default: 0
        },
        bookmarkedBy: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ],
        commentsCount: {
            type: Number,
            default: 0
        },
        readTime: {
            type: Number,
            default: 0
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

export const Article = mongoose.model("Article", articleSchema)