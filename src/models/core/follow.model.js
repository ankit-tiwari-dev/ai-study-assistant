import mongoose, { Schema } from "mongoose";

const followSchema = new Schema(
    {
        follower:{
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        following:{
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        followedAt:{
            type: Date,
            default: Date.now
        },
        status:{
            type: String,
            enum: ["active", "unfollowed", "blocked"]
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

export const Follow = mongoose.model("Follow", followSchema)