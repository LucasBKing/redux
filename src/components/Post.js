import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.post.title}</h2>
                <p>{this.props.post.msg}</p>
            </div>
        )
    }
}
export default Post;