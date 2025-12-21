import mongoose from "mongoose";

const postsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minLength: 5,
    },
    description: {
        type: String,
        required: [true, 'Description is true'],
        minLength: 5
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true })

const Post = mongoose.model('Post' , postsSchema)
export default Post;