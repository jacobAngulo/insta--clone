import React from "react";
import ElapsedTime from "./ElapsedTime";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      comments: []
    };
  }

  componentDidMount() {
    this.setState({
      comments: this.props.post.comments
    });
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newComment = {
      username: this.props.username,
      text: this.state.input
    };
    this.setState({
      input: "",
      comments: [...this.state.comments, newComment]
    });
  };

  render() {
    return (
      <div>
        <ul className="post-comment-section">
          {this.state.comments.map(comment => {
            return (
              <li className="post-comment">
                <strong>{comment.username} </strong>
                {comment.text}
              </li>
            );
          })}
        </ul>
        <ElapsedTime timestamp={this.props.post.timestamp} />
        <form className="post-comment-form" onSubmit={this.handleSubmit}>
          <input
            name="input"
            type="text"
            placeholder="Add a comment.."
            value={this.state.input}
            onChange={this.handleChanges}
          />
          <button>Post</button>
        </form>
      </div>
    );
  }
}

export default CommentSection;
