import mongoose, { Schema } from "mongoose";

const pointSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        source: {
            type: String,
            enum: ["quiz", "article", "answer", "video_watch", "login_streak", "referral"]
        },
        value: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        subject: {
            type: Schema.Types.ObjectId,
            ref: "Subject"
        },
        topic: {
            type: Schema.Types.ObjectId,
            ref: "Topic"
        }
    },
    {
        timestamps: true
    }
)

export const Point = mongoose.model("Point", pointSchema)