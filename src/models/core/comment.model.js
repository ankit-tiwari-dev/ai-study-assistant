import mongoose, { Schema } from "mongoose";

const replierSchema = new Schema(
    {
        replier: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        content: {
            type: String,
            required: true,
        },
        createdAt: { 
            type: Date,
            default: Date.now
        },
    },
    {
        _id: false
    }
)
const commentSchema = new Schema(
    {
        author: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        authorName: {
            type: String,
        },
        authorAvatar: {
            type: String
        },
        content: {
            type: String,
            required: true
        },
        parentType: {
            type: String,
            enum: ["Question", "Answer", "Article", "Video"],
            required: true
        },
        parentId: {
            type: Schema.Types.ObjectId,
            required: true
        },
        likesCount: {
            type: Number,
            default: 0
        },
        dislikesCount: {
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
        },
        report: {
            type: [
                {
                    reporter: {
                        type: Schema.Types.ObjectId,
                        ref: "User",
                        required: true
                    },
                    reportText: String 
                }
            ],
            default: []
        },
        editedAt: Date,
        updatedAt: Date,
        isEdited: {
            type: Boolean,
            default: false
        },
        replies: {
            type: [replierSchema],
            default: []
        },
        status: {
            type: String,
            enum: ["active", "deleted", "archived"]
        }
    },
    {
        timestamps: true
    }
)

export const Comment = mongoose.model("Comment", commentSchema)