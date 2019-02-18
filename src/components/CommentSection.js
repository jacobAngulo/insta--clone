import React from 'react';

function CommentSection(props) {
    return (
        <div>
            <ul className='post-comment-section'>
            {props.post.comments.map((comment) => {
                return (
                    <li className='post-comment'>
                        <strong>{comment.username} </strong>
                        {comment.text}
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default CommentSection