import React, { Component } from 'react';
import DummyData from './DummyData'
import SearchBar from './components/SearchBar'
import PostContainer from './components/PostContainer'
import './App.css';

const data = DummyData;

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data
    }
  }

  addComment = (e, post, comment) => {
    e.preventDefault();
    const newComment = {
      username: 'jakey',
      text: comment
    }
    post.comments = [...post.comments, newComment];
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <section>
        {this.state.data.map((post) => {
          return (
            <PostContainer
            addComment={this.addComment}
            post={post}
            />
          )
        })}
      </section>
      </div>
    );
  }
}

export default App;
