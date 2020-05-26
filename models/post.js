const mongoose = require('./connection.js')


const PostModelSchema = new mongoose.Schema({
    title: String,
    imageURL: String,
    userId: String
})

const postModel = mongoose.model('Post', PostModelSchema)

function getAllPosts() {
    return postModel.find({})
}

function getPostById(postId) {
    return postModel.findOne({ _id: postId })
}

function getPostByUserId(userId) {
    return postModel.find({ userId: userId })
}

function updatePostById(postId, updatedPost) {
    return postModel.update({ _id: postId }, updatedPost)
}

function createPost(newPost) {
    return postModel.create(newPost)
}

function deletePostById(postId) {
    return postModel.deleteOne({ _id: postId })
}

module.exports = {
    getAllPosts,
    getPostById,
    getPostByUserId,
    updatePostById,
    createPost,
    deletePostById
}