const express = require('express')

const postModel = require('../models/post.js')
const commentModel = require('../models/comment.js')
const userModel = require('../models/user.js')

const postRouter = express.Router()


postRouter.get('/', async (req, res) => {
    try {
        const allPosts = await postModel.getAllPosts()
        res.json(allPosts)
    } catch (error) {
        console.log('error', error)
        res.status(500).json(error)
    }
})

postRouter.get('/:postId', async (req, res) => {
    try {
        const postId = req.params.postId
        const singlePost = await postModel.getPostById(postId)
        const comments = await commentModel.getCommentsByPostId(postId)
        const user = await userModel.getUserById(singlePost.userId)

        const payload = singlePost.toObject()
        payload.user = user
        payload.comments = comments

        res.json(payload)
    } catch (error) {
        console.log('error', error)
        res.status(500).json(error)
    }
})


postRouter.post('/', async (req, res) => {
    try {
        const newPost = req.body
        await postModel.createPost(newPost)
        res.json('ok')
    } catch (error) {
        console.log('error', error)
        res.status(500).json(error)
    }
})


postRouter.put('/:postId', async (req, res) => {
    try {
        const postId = req.params.postId
        const newPost = req.body
        await postModel.updatePostById(postId, newPost)
        res.json('ok')
    } catch (error) {
        console.log('error', error)
        res.status(500).json(error)
    }
})


postRouter.delete('/:postId', async (req, res) => {
    try {
        const postId = req.params.postId
        await postModel.deletePostById(postId)
        res.json('ok')
    } catch (error) {
        console.log('error', error)
        res.status(500).json(error)
    }
})


module.exports = {
    postRouter
}
