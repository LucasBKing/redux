import React, { Component } from 'react';

class PostForm extends Component {
    render() {
        return (
            <div>
                <h1>Create Post</h1>
                <form>
                    <input required type="text" placeholder="Enter Post Title" /><br /><br />
                    <textarea required cols="30" rows="10"></textarea><br /><br />
                    <button>Post</button>
                </form>
            </div>
        );
    }
}

export default PostForm;