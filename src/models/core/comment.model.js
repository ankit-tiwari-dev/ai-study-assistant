import mongoose, { Schema } from "mongoose";

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
            enum: ["Question", "Answer", "Article"],
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
                    reportid: {
                        type: Schema.Types.ObjectId,
                        ref: "User",
                        required: true
                    },
                    reportText: String 
                }
            ],
            default: []
        },
        isEdited: {
            type: Boolean,
            default: false
        },
        replies: {
            type: [
                {
                    replier: {
                        type: Schema.Types.ObjectId,
                        ref: "User",
                        required: true
                    },
                    content: {
                        type: String,
                        required: true,
                    }
                }
            ],
            default: []
        }
    },
    {
        timestamps: true
    }
)

export const Comment = mongoose.model("Comment", commentSchema)