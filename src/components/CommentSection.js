import React from 'react';
import ElapsedTime from './ElapsedTime'

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            comments: this.props.post.comments
        }
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const newComment = {
            username: 'jakey',
            text: this.state.input
        }
        this.setState({
            input: '',
            comments: [...this.state.comments, newComment]
        })
    }

    render() {
        return (
            <div>
                <ul className='post-comment-section'>
                {this.state.comments.map((comment) => {
                    return (
                        <li className='post-comment'>
                            <strong>{comment.username} </strong>
                            {comment.text}
                        </li>
                    )
                })}
                </ul>
                <ElapsedTime 
                    post={this.props.post}
                />
                <form onSubmit={this.handleSubmit}>
                    <input 
                        name='input'
                        type='text'
                        value={this.state.input}
                        onChange={this.handleChanges}
                    />
                </form>
            </div>
        )    
    }
}

export default CommentSection