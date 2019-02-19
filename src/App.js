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
  render() {
    return (
      <div className="App">
        <SearchBar />
        <section>
          {this.state.data.map((post) => {
            return (
              <PostContainer
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
