import mongoose, { Schema } from "mongoose";

const followSchema = new Schema(
    {
        follower:{
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        following:{
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        followedAt:{
            type: Date,
            default: Date.now
        },
        status:{
            type: String,
            enum: ["active", "unfollowed", "blocked"],
            default: "active"
        },
        isMuted:{
            type: Boolean,
            default: false
        },
        notificationsEnabled: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

followSchema.index({ follower: 1, following: 1 }, { unique: true });
followSchema.index({ following: 1 });
followSchema.index({ follower: 1 });

export const Follow = mongoose.model("Follow", followSchema)