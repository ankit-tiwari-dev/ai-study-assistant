import mongoose, {Schema} from "mongoose"

const answerSchema = new Schema(
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
        question: {
            type: Schema.Types.ObjectId,
            ref: "Question"
        },
        content: {
            type: String,
            required: true
        },
        images: {
            type: [String],
            default: []
        },
        isAccepted: {
            type: Boolean,
            default: false
        },
        likesCount: {
            type: Number,
            default: 0
        },
        dislikesCount: {
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
        isEdited: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
    }
)

answerSchema.index({ question: 1 });
answerSchema.index({ author: 1 });

export const Answer = mongoose.model("Answer", answerSchema)