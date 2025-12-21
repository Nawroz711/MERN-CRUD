import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true ,'Email is required'],
        trim: true,
        unique: [true , 'Email must be unique'],
        minLength: [5 , 'Email length must be 5'],
        lowercase: true
    },
    password: {
        type: String,
        required: [true , 'Password is required!'],
        trim: true,
        select: false,
    },
    name: {
        type: String,
        required: [true , 'Password is required!'],
        trim: true,
    },
    verified: {
        type: Boolean,
        default: false
    },
    verificationCode: {
        type: String,
        select: false
    },
    verificationCodeValidation: {
        type: Number,
        select: false
    },
    forgotPasswordCode: {
        type: String,
        select: false
    },  
    forgotPasswordCodeValidation: {
        type: Number,
        select: false
    }
} , { timestamps: true})

const User = mongoose.model('User' , userSchema)
export default User;