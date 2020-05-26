import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class User extends Component {
    state = {
        userName: '',
        age: 0,
        posts: []
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = async () => {
        const userId = this.props.match.params.userId
        const res = await axios.get(`/api/user/${userId}`)
        this.setState(res.data)
    }

    render() {
        return (
            <div>
                <h1>{this.state.userName}</h1>
                <h5>{this.state.age}</h5>

                {this.state.posts.length < 1 ? <div>No Posts</div> : null}
                
                {this.state.posts.map((post) => {
                    return (
                        <Link to={`/p/${post._id}`}>
                            < div >
                                <img src={post.imageURL} width="500" />
                                <div>{post.title}</div>
                            </div>
                        </Link>)
                })
                }
            </div >
        )
    }
}
