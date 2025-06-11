import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema = Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        fullName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        educationLevel: {
            type: String,
            required: true
        },
        interests: {
            type: [String],
            default: []
        },
        preferredLanguage: {
            type: String,
            required: true
        },
        bio: {
            type: String
        },
        country: {
            type: String
        },
        isPremium: {
            type: Boolean,
            default: false
        },
        avatar: {
            type: String,
            required: true
        },
        coverImage: {
            type: String
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            select: false
        },
        refreshToken: {
            type: String
        }        
    },
    {
        timestamps:true
    }
)

userSchema.pre('save', async function (next) {
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)