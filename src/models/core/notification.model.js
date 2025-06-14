import mongoose, { Schema } from "mongoose";

const notificationSchema = new Schema(
    {
        recipient: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        sender: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        type: {
            type: String,
            enum: ["like", "comment", "follow", "reply", "report_status", "system"],
            required: true
        },
        contentId: {
            type: Schema.Types.ObjectId
        },
        contentType: {
            type: String,
            enum: ["article", "comment", "question", "answer"]
        },
        message: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        isRead: {
            type: Boolean,
            default: false
        },
        readAt: {
            type: Date
        },
        isSeen: {
            type: Boolean,
            default: false
        },
        seenAt: {
            type: Date
        },
        delivered: {
            type: Boolean,
            default: false
        },
        deliveredAt: {
            type: Date
        },
        channel: {
            type: String,
            enum: ["in_app", "email", "sms"],
            default: "in_app"
        },
        priority: {
            type: String,
            enum: ["low", "medium", "high"],
            default: "medium"
        },
        expiresAt: {
            type: Date
        },
        retries: {
            type: Number,
            default: 0
        },
        meta: {
            type: Object
        },
        notificationId: {
            type: String,
            unique: true
        }
    },
    {
        timestamps: true
    }
);

notificationSchema.index({ recipient: 1, createdAt: -1 });
notificationSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const Notification = mongoose.model("Notification", notificationSchema);