const Post = require('../models/PostModel');
const mongoose = require('mongoose');

// get all posts
const getPosts = async (req, res) => {
    const posts = await Post.find({}).sort({createAt: -1});

    res.status(200).json(posts);
}

// get single post
const getPost = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Post missing'});
    }

    const post = await Post.findById(id);

    if (!post) {
        return res.status(404).json({error: 'Post missing'});
    }

    res.status(200).json(post);
}

// create new post
const createPost = async (req, res) => {
    const {title, content} = req.body;

    try {
        const post = await Post.create({title, content});
        res.status(200).json(post);
    } catch (error) {
        res.status(400).error({error: error.massage});
    }
}

// delete post
const deletePost = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Post missing'});
    }

    const post = await Post.findOneAndDelete({_id: id});

    if (!post) {
        return res.status(400).json({error: 'Post missing'});
    }

    res.status(200).json(post);
}

// Edit post
const editPost = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Post missing'});
    }

    const post = await Post.findOneAndUpdate({_id:id}, {
        ...req.body
    })

    if (!post) {
        return res.status(400).json({error: 'Post missing'});
    }
}

module.exports = {
    getPosts,
    getPost,
    createPost,
    deletePost,
    editPost
}