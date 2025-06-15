import mongoose, { Schema } from "mongoose";

const feedbackSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            validate: 
            {
                validator: function(v) 
                {
                    return this.isAnonymous || !!v;
                },
                message: "User ID is required unless feedback is anonymous"
            }   
        },
        contentId: {
            type:  Schema.Types.ObjectId,
            refPath: 'contentType'
        },
        contentType:{
            type: String,
            enum: ["Question", "Answer", "Article", "Video"],
            required: true          
        },
        rating: {
            type: Number,
            min: 0,
            max: 5,
            default: 0
        },
        text: {
            type: String
        },
        isAnonymous:{
            type: Boolean,
            default: false
        },
        isFlagged: {
            type: Boolean,
            default: false
        },
        flagReason: {
            type: String
        },
        status: {
            type: String,
            enum: ["pending", "approved", "rejected"],
            default: "pending"
        },
        isReviewed: {
            type: Boolean,
            default: false
        },
        reviewedAt:{
            type: Date
        }        
    },
    {
        timestamps: true
    }
)

feedbackSchema.index(
    {
        contentId: 1,
        contentType: 1 
    }
);

feedbackSchema.index(
    {
        user: 1 
    }
);

feedbackSchema.index(
    {
        status: 1 
    }
);


export const Feedback = mongoose.model("Feedback", feedbackSchema)