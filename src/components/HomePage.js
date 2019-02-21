import React, { Component } from 'react';
import SearchBar from './postPageComponents/SearchBar/SearchBar'
import PostContainer from './postPageComponents/PostContainer'
import dummyData from '../DummyData';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
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
      <div 
      className="App"
      >
        <SearchBar 
        handleSearch={this.handleSearch}
        />
        <section className='posts-section'>
          {this.state.data.map((post) => {
            return (
              <PostContainer
              username={localStorage.getItem('user')}
              post={post}
              />
            )
          })}
      </section>
      </div>
    );
  }
}

export default HomePage;
