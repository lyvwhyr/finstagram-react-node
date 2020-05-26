
const mongoose = require('./connection.js')


const UserModelSchema = new mongoose.Schema({
    userName: String,
    age: Number
})

const userModel = mongoose.model('User', UserModelSchema)

function getAllUsers() {
    return userModel.find({})
}

function getUserById(userId) {
    return userModel.findOne({ _id: userId })
}

function updateUserById(userId, updatedUser) {
    return userModel.update({ _id: userId }, updatedUser)
}

function createUser(newUser) {
    return userModel.create(newUser)
}

function deleteUserById(userId) {
    return userModel.deleteOne({ _id: userId })
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    createUser,
    deleteUserById
}