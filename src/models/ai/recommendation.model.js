import mongoose, { Schema } from "mongoose";

const recommendationSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        contextType: {
            type: String,
            enum: ["subject", "topic", "article", "question", "video"]
        },
        recommendedItems: {
            type: [
                {
                    itemId: {
                        type: Schema.Types.ObjectId,
                        refPath: 'recommendedItems.itemType'
                    },
                    itemType: {
                        type: String,
                        enum: ["article", "video","question"]
                    }
                }
            ],
            validate: [arr => arr.length <= 20, 'Too many recommendations']
        },
        status: {
            type: String,
            enum:["active", "archived", "deleted"],
            default: "active"
        },
        createdByAI:{
            type: Boolean,
            default: false    
        }
    },
    {
        timestamps: true
    }
)

recommendationSchema.index({ user: 1, contextType: 1 });

export const Recommendation = mongoose.model("Recommendation", recommendationSchema)