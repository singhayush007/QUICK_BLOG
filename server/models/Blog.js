import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    subTitle: { type: String, trim: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    isPublished: { type: Boolean, default: false },
}, { timestamps: true });

const Blog = mongoose.model('blog', blogSchema);

export default Blog;