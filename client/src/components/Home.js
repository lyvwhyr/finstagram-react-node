import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    state = {
        users: [],
        posts: [],
        comments: []
    }

    componentDidMount() {
        this.getAllUsers()
        this.getAllPosts()
        this.getAllComments()
    }

    getAllUsers = async () => {
        const res = await axios.get('/api/user/')
        const newState = { ...this.state }
        newState.users = res.data
        this.setState(newState)
    }

    getAllPosts = async () => {
        const res = await axios.get('/api/post/')
        const newState = { ...this.state }
        newState.posts = res.data
        this.setState(newState)
    }

    getAllComments = async () => {
        const res = await axios.get('/api/comment/')
        const newState = { ...this.state }
        newState.comments = res.data
        this.setState(newState)
    }

    render() {
        const { posts, comments, users } = this.state
        return (
            <div>
                <h1>Finstagram</h1>
                <h3>Recent Posts</h3git st>

                {posts.map(post => {
                    return (
                        <Link to={`/p/${post._id}`}>
                            <img src={post.imageURL} width="500" />
                        </Link>
                    )
                })}

            </div>
        )
    }
}
