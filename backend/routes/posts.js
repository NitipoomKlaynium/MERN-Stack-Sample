const express = require('express');
const {
    getPosts,
    getPost,
    createPost,
    deletePost,
    editPost
} = require('../controllers/PostController')

const router = express.Router();

router.get('/', getPosts);

router.get('/:id', getPost);

router.post('/', createPost);

router.delete('/:id', deletePost);

router.patch('/:id', editPost);

module.exports = router