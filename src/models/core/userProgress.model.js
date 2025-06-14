import mongoose, { Schema } from "mongoose";

const milestoneSchema = new Schema({
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
})

const userProgressSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        subject: {
            type: Schema.Types.ObjectId,
            ref: "Subject"
        },
        topic: {
            type: Schema.Types.ObjectId,
            ref: "Topic"
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
            default: 0
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
        isCompleted: {
            type: Boolean,
            default: false
        },
        certified: {
            type: Boolean,
            default: false
        },
        notes: {
            type: [String],
            default: []
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

export const UserProgress = mongoose.model("UserProgress", userProgressSchema)