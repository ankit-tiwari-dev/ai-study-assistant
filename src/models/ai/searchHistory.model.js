import mongoose, { Schema } from "mongoose";

const searchHistorySchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        query: {
            type: String,
            required: true
        },
        resultsCount: {
            type: Number,
            min: 0
        },
        searchType: {
            type: String,
            enum: ["article", "question", "video", "topic", "all"],
            default: "all"
        },
        aiEnhanced: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

searchHistorySchema.index({ user: 1, searchType: 1 });

export const SearchHistory = mongoose.model("SearchHistory", searchHistorySchema) 