import mongoose, { Schema } from "mongoose"

const bookmarkSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true
        },
        title: String,
        contentId: {
            type: Schema.Types.ObjectId,
            required: true,
            index: true
        },
        contentType: {
            type: String,
            enum: ["Question", "Answer", "Article", "Video", "Topic"],
            required: true
        },
        bookmarkType: {
            type: String,
            enum: ["Favorite", "Read Later", "Important"],
            default: "Favorite"
        },
        tags:{
            type: [String],
            validate: [arr => arr.length <= 10, 'Too many tags']
        },
        status: {
            type: String,
            enum: ["active", "archived", "deleted"],
            default: "active"
        },
        archivedAt: Date,
        deletedAt: Date
    },
    {
        timestamps: true
    }
)

bookmarkSchema.index(
    {
        user: 1,
        contentId: 1,
        contentType: 1 
    },
    {
        unique: true 
    }
);

export const Bookmark = mongoose.model("Bookmark", bookmarkSchema);