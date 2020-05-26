const express = require('express')

const commentModel = require('../models/comment.js')


const commentRouter = express.Router()


commentRouter.get('/', async (req, res) => {
    try {
        const allComments = await commentModel.getAllComments()
        res.json(allComments)
    } catch (error) {
        console.log('error', error)
        res.status(500).json(error)
    }
})

commentRouter.get('/:commentId', async (req, res) => {
    try {
        const commentId = req.params.commentId
        const singleComment = await commentModel.getCommentById(commentId)
        res.json(singleComment)
    } catch (error) {
        console.log('error', error)
        res.status(500).json(error)
    }
})


commentRouter.post('/', async (req, res) => {
    try {
        const newComment = req.body
        await commentModel.createComment(newComment)
        res.json('ok')
    } catch (error) {
        console.log('error', error)
        res.status(500).json(error)
    }
})


commentRouter.put('/:commentId', async (req, res) => {
    try {
        const commentId = req.params.commentId
        const newComment = req.body
        await commentModel.updateCommentById(commentId, newComment)
        res.json('ok')
    } catch (error) {
        console.log('error', error)
        res.status(500).json(error)
    }
})


commentRouter.delete('/:commentId', async (req, res) => {
    try {
        const commentId = req.params.commentId
        await commentModel.deleteCommentById(commentId)
        res.json('ok')
    } catch (error) {
        console.log('error', error)
        res.status(500).json(error)
    }
})


module.exports = {
    commentRouter
}
