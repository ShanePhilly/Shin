const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
});

const commentSchema = new mongoose.Schema({});

const blogpostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    body: {
        type: String,
        required: true
    },

},{
    timestamps: {
        createdAt: "created_at"
    }
});

const BlogPost = mongoose.model("BlogPost", blogpostSchema, "blogposts");

module.exports = { BlogPost };