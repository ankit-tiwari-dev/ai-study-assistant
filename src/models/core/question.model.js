import mongoose, {Schema} from 'mongoose'

const questionSchema = new Schema(
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
        description: {
            type: String,
            required: true
        },
        tags: {
            type: [String],
            default: []
        },
        subject: {
            type: Schema.Types.ObjectId,
            ref: "Subject"
        },
        topic: {
            type: Schema.Types.ObjectId,
            ref: "Topic"
        },
        status: {
            type: String,
            enum: ["open", "closed", "archived"],
            default: "open"
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
        commentsCount: {
            type: Number,
            default: 0
        },
        isFlagged: {
            type: Boolean,
            default: false
        },
        flagReason: String,
        isReviewed: {
            type: Boolean,
            default: false
        },
        isSolved: {
            type: Boolean,
            default: false
        },
        acceptedAnswers: [
            {
                type: Schema.Types.ObjectId,
                ref: "Answer"
            }
        ]
    },
    {
        timestamps: true
    }
)

questionSchema.index({ title: "text", description: "text" });
questionSchema.index({ tags: 1 });
questionSchema.index({ subject: 1 });
questionSchema.index({ topic: 1 });
questionSchema.index({ status: 1 });
questionSchema.index({ isSolved: 1 });

export const Question = mongoose.model("Question", questionSchema)