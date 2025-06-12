import mongoose, { Schema } from "mongoose"

const bookmarkSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true
        },
        contentId: {
            type: Schema.Types.ObjectId,
            required: true,
            index: true
        },
        contentType: {
            type: String,
            enum: ["Question", "Answer", "Article"],
            required: true
        },
        bookmarkType: {
            type: String,
            enum: ["Favorite", "Read Later", "Important"],
            default: "Favorite"
        },
        tags: [String],
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
export const Bookmark = mongoose.model("Bookmark", bookmarkSchema);