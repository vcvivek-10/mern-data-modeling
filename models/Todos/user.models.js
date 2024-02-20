import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        // userName : String ,email : String ,isActive: Boolean   // instead of this we define as object for more prperty

        userName: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercasr: true,
        },
        password: {
            type: String,
            // required : [true,"password must"] // or
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const User = mongoose.model('User', userSchema);
