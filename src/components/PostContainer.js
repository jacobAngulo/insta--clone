import React from 'react'
import CommentSection from './CommentSection'

class PostContainer extends React.Component {    
    render() {
        return (
            <div key={this.props.post.id} className='post'>
                <header className='post-header'>
                    <img src={this.props.post.thumbnailUrl}/>
                    <h1>{this.props.post.username}</h1>
                </header>
                <div className='post-content'>
                    <img className='post-image' src={this.props.post.imageUrl}/>
                </div>
                <footer className='post-footer'>
                    <p className='post-likes'>{this.props.post.likes} likes</p>
                    <CommentSection
                    post = {this.props.post}
                    />
                </footer>
            </div>
        )    
    }
}

export default PostContainer 