const express = require('express')

const userModel = require('../models/user.js')
const postModel = require('../models/post.js')

const userRouter = express.Router()


userRouter.get('/', async (req, res) => {
  try {
    const allUsers = await userModel.getAllUsers()
    res.json(allUsers)
  } catch (error) {
    console.log('error', error)
    res.status(500).json(error)
  }
})

userRouter.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId
    const singleUser = await userModel.getUserById(userId)
    const posts = await postModel.getPostByUserId(userId)
    console.log('user', singleUser)
    console.log('post', posts)
    
    const payload = singleUser.toObject()
    payload.posts = posts

    res.json(payload)
  } catch (error) {
    console.log('error', error)
    res.status(500).json(error)
  }
})


userRouter.post('/', async (req, res) => {
  try {
    const newUser = req.body
    await userModel.createUser(newUser)
    res.json('ok')
  } catch (error) {
    console.log('error', error)
    res.status(500).json(error)
  }
})


userRouter.put('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId
    const newUser = req.body
    await userModel.updateUserById(userId, newUser)
    res.json('ok')
  } catch (error) {
    console.log('error', error)
    res.status(500).json(error)
  }
})


userRouter.delete('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId
    await userModel.deleteUserById(userId)
    res.json('ok')
  } catch (error) {
    console.log('error', error)
    res.status(500).json(error)
  }
})


module.exports = {
  userRouter
}
