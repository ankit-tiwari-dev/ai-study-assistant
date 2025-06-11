import mongoose, {Schema} from 'mongoose'

const questionSchema = new Schema(
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
        title: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            unique: true,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        tags: {
            type: [String],
            default: []
        },
        subject: {
            type: String,
            required: true,
        },
        images: {
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
        isSolved: {
            type: Boolean,
            default: false
        },
        acceptedAnswers: {
            type: Schema.Types.ObjectId,
            ref: "Answer"
        }
    },
    {
        timestamps: true
    }
)

export const Question = mongoose.model("Question", questionSchema)