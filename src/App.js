import React, { Component } from 'react';
import AllPost from './components/AllPost';
import PostForm from './components/PostForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AllPost />
        <PostForm />
      </div>
    );
  }
}

export default App;
