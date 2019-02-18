import React from 'react'
import CommentSection from './CommentSection'

class PostContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addCommment(e, this.props.post, this.state.input)
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
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
                    <p className='post-likes'>{this.props.post.likes} likes</p>
                    <CommentSection
                    post = {this.props.post}
                    />
                    <form onSubmit={() => this.handleSubmit}>
                        <input
                        onChange={this.handleChanges}
                        className='add-comment-input'
                        placeholder='add comment'
                        name='input'
                        value={this.state.input}
                        ></input>
                    </form>
                </footer>
            </div>
        )    
    }
}

export default PostContainer 