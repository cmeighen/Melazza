const React = require('react');
const PostStore = require('../../stores/postStore');
const PostActions = require('../../actions/postActions');
const Modal = require('react-bootstrap').Modal;

const PostStudentAnswer = React.createClass({

  render: function(){
    if (typeof this.props.answers === "undefined" || this.props.answers.length === 0) {
      return <div></div>;
    }

    return(
      <div> { this.props.answers[this.props.answers.length - 1].response } </div>
    );
  }
});

module.exports = PostStudentAnswer;
