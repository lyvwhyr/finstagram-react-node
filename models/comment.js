const mongoose = require('./connection.js')


const CommentModelSchema = new mongoose.Schema({
    content: String,
    postId: String,
})

const commentModel = mongoose.model('Comment', CommentModelSchema)

function getAllComments() {
    return commentModel.find({})
}

function getCommentById(commentId) {
    return commentModel.findOne({ _id: commentId })
}

function getCommentsByPostId(postId) {
    return commentModel.find({ postId: postId })
}

function updateCommentById(commentId, updatedComment) {
    return commentModel.update({ _id: commentId }, updatedComment)
}

function createComment(newComment) {
    return commentModel.create(newComment)
}

function deleteCommentById(commentId) {
    return commentModel.deleteOne({ _id: commentId })
}

module.exports = {
    getAllComments,
    getCommentById,
    getCommentsByPostId,
    updateCommentById,
    createComment,
    deleteCommentById
}