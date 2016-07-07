const React = require('react');
const Well = require('react-bootstrap').Well;

const CommentIndex = React.createClass({

  render() {

    const comments = this.props.comments;
    if (typeof comments === "undefined" || comments.length === 0) {
      return(
        <div>No Comments</div>
      );
    }



    return (
      <div className="comments-index">
        {comments.map( comment => {
          return (
            <Well bsSize="large" key={comment.id}>{comment.comment}</Well>
          );
        })}
      </div>
    );

  }

});

module.exports = CommentIndex;
