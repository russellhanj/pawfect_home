import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    emailAddress: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true
    }
});

// Create a model based on the schema
export const User = mongoose.model('User', userSchema);
