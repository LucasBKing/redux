import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const msg = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            msg,
            editing: false
        };
        // I can access the props here cause I'm using connect method
        this.props.dispatch({
            type: 'ADD_POST',
            data
        });
        this.getTitle.value = '';
        this.getMessage.value = '';
    }
    render() {
        return (
            <div className="post-container">
                <h1 className="post_heading">Create Post</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input required type="text" ref={(input) => this.getTitle = input} placeholder="Enter Post Title" /><br /><br />
                    <textarea required cols="30" ref={(input) => this.getMessage = input} rows="10"></textarea><br /><br />
                    <button>Post</button>
                </form>
            </div>
        );
    }
}

export default connect()(PostForm);