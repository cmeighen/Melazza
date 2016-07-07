const React = require('react');
const CommentActions = require('../../actions/commentActions');
const FormGroup = require('react-bootstrap').FormGroup;
const FormControl = require('react-bootstrap').FormControl;
const ControlLabel = require('react-bootstrap').ControlLabel;
const Button = require('react-bootstrap').Button;

const CommentForm = React.createClass({
  getInitialState: function(){
    return {
      comment: '',
      post_id: this.props.postId
    };
  },

  componentWillReceiveProps: function(nextProps){
    this.setState({
      post_id: nextProps.postId
    });
  },

  commentChange: function(e){
    e.preventDefault();
    this.setState({comment: e.target.value});
  },

  submitHandler: function(e){
    e.preventDefault();

    CommentActions.createComment({
      comment: this.state.comment,
      post_id: this.state.post_id
    });

    this.setState({comment: ''});
  },

  render: function(){
    return(
      <form className='comment-form' onSubmit={this.submitHandler}>
        <FormGroup controlId="comment">
          <ControlLabel>Comment:</ControlLabel>
          <FormControl
            componentClass="textarea"
            value={this.state.comment}
            onChange={this.commentChange}
            placeholder="Comment Here"
            />
        </FormGroup>
        <Button type="submit">Submit Comment</Button>
      </form>
    );
  }

});

module.exports = CommentForm;
