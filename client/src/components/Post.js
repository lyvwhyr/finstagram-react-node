import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Post extends Component {
    state = {
        user: {
            userName: '',
            age: 0,
            posts: []
        },
        title: '',
        imageURL: '',
        comments: []
    }

    componentDidMount() {
        this.getPost()
    }

    getPost = async () => {
        const postId = this.props.match.params.postId
        const res = await axios.get(`/api/post/${postId}`)
        this.setState(await res.data)
    }

    render() {
        return (
            <div>
                <h3><Link to={`/${this.state.user._id}`} >{this.state.user.userName}</Link> - {this.state.title}</h3>
                <img src={this.state.imageURL} width="500" />
                <h5>Comments</h5>
                {this.state.comments.map((comment) => {
                    return (<div>{comment.content}</div>)
                })}

            </div>
        )
    }
}
