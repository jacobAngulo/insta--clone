import React from 'react'
import CommentSection from './CommentSection'

class PostContainer extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            likes: Number,
            liked: Boolean
        }
    }

    componentDidMount() {
        this.setState({
            likes: this.props.post.likes,
            liked: false
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.liked === false) {
            e.preventDefault()
            this.setState({
                likes: this.state.likes + 1,
                liked: true
            })
        } else {
            e.preventDefault()
            this.setState({
                likes: this.state.likes - 1,
                liked: false
            })
        }
        console.log(this.state.likes, this.state.liked)
    }

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
                    <form 
                        onSubmit={this.handleSubmit}
                        className='post-likes-section'
                    >
                        <p className='post-likes'>{this.state.likes} likes</p>
                        <button>
                            <i className={`post-like-btn ${this.state.liked ? 'liked fas' : 'far'} fa-heart`}></i>
                        </button>
                    </form>
                    <CommentSection
                    post = {this.props.post}
                    />
                </footer>
            </div>
        )    
    }
}

export default PostContainer 