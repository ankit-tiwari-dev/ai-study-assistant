import mongoose, { Schema } from "mongoose";

const attachmentSchema = new Schema({
  filename: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  uploadedAt: {
    type: Date,
    default: Date.now
  }
}, { _id: false });


const SubjectSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        code: {
            type: String,
            unique: true,
            required: true,
            index: true,
            trim: true
        },
        description: {
            type: String,
            required: true
        },
        tags: {
            type: [String],
            default: []
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        updatedBy: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        status: {
            type: String,
            enum: ['active', 'archived', 'inactive'],
            default: 'active'
        },
        category: {
            type: String,
            required: false
        },
        syllabusUrl: {
            type: String
        },
        attachments: [attachmentSchema],
        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

SubjectSchema.index(
    {
        name: 1 
    }
);

SubjectSchema.index(
    {
        updatedAt: 1 
    },
    {
        expireAfterSeconds: 31536000 
    }
) 

export default mongoose.model("Subject", SubjectSchema);