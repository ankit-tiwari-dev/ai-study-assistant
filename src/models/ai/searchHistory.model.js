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
            type: Number
        },
        searchType: {
            type: String,
            enum: ["article", "question", "video", "topic", "all"]
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

export const SearchHistory = mongoose.model("SearchHistory", searchHistorySchema) 