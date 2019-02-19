import React, { Component } from 'react';
import SearchBar from './components/SearchBar'
import PostContainer from './components/PostContainer'
import './App.css';
import dummyData from './DummyData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }

  handleSearch = (e, search) => {
    e.preventDefault();
    this.setState({
      data: dummyData
    })
    const searchedState = dummyData.slice().filter(post => post.username.includes(search));
    this.setState({
      data: searchedState
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar 
        handleSearch={this.handleSearch}
        />
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
