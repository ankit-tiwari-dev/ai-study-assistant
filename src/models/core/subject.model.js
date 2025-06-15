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
        category: String,
        syllabusUrl: String,
        attachments: [attachmentSchema],
        slug: {
            type: String,
            unique: true,
            lowercase: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

SubjectSchema.index(
    {
        name: 'text' 
    },
    {
        description: 'text'
    }
);


export default mongoose.model("Subject", SubjectSchema);