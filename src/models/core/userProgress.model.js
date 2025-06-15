import mongoose, { Schema } from "mongoose";

const milestoneSchema = new Schema(
    {
        title:{
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            default: false
        },
        completedAt: {
            type: Date
        }
    },
    {
        _id: false 
    }
)

const userProgressSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        subject: {
            type: Schema.Types.ObjectId,
            ref: "Subject",
            required: true
        },
        topic: {
            type: Schema.Types.ObjectId,
            ref: "Topic",
            required: true
        },
        completionPercentage: {
            type: Number,
            default: 0
        },
        lastAccessAt: {
            type: Date
        },
        totalTimeSpent: {
            type: Number,
            default: 0
        },
        sessionsCount: {
            type: Number,
            default: 0
        },
        milestones: [milestoneSchema],
        quizzesTaken: {
            type: Number,
            default: 0
        },
        averageScore: {
            type: Number,
            min: 0,
            max: 100
        },
        lastScore: {
            type: Number,
            default: 0
        },
        lastQuizTakenAt: {
            type: Date,
        },
        status: {
            type: String,
            enum: ["in_progress", "completed", "not_started"],
            default: "not_started"
        },
        certified: {
            type: Boolean,
            default: false
        },
        certifiedAt: Date,
        certificateUrl: String,
        notes: [
            {
                type: [String],
                default: []
            }
        ],
        isDeleted: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

userProgressSchema.index(
    { 
        user: 1,
        topic: 1     
    }
);

userProgressSchema.index(
    { 
        user: 1,
        subject: 1 
    }
);

userProgressSchema.index(
    { 
        status: 1 
    }
);

export const UserProgress = mongoose.model("UserProgress", userProgressSchema)