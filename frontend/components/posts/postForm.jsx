const React = require('react');
const ReactDOM = require('react-dom');
const PostActions = require('../../actions/postActions.js');
const UserStore = require('../../stores/userStore');
const PostStore = require('../../stores/postStore');

const FormGroup = require('react-bootstrap').FormGroup;
const FormControl = require('react-bootstrap').FormControl;
const ControlLabel = require('react-bootstrap').ControlLabel;
const Button = require('react-bootstrap').Button;


var PostForm = React.createClass({
  getInitialState: function(){
    return {
      title: '',
      body: '',
      post_type: 0,
      post_visibility: 0
    };
  },

  componentDidMount: function(){
    let self = this;
    setTimeout(function(){
      ReactDOM.findDOMNode(self.refs.autoFocus).focus(); },
      500);
  },

  titleChange: function(e){
    e.preventDefault();
    this.setState({title: e.target.value});
  },

  bodyChange: function(e){
    e.preventDefault();
    this.setState({body: e.target.value});
  },

  typeChange: function(e){
    e.preventDefault();
    this.setState({post_type: parseInt(e.target.value)});
  },

  visibilityChange: function(e){
    e.preventDefault();
    this.setState({post_type: parseInt(e.target.value)});
  },

  submitHandler: function(e){
    e.preventDefault();

    PostActions.createPost({
      title: this.state.title,
      body: this.state.body,
      post_type: this.state.post_type,
      post_visibility: this.state.post_visibility
    });

    this.props.close();
  },

  render: function(){
    return(
      <form className='post-form' onSubmit={this.submitHandler}>
        <FormGroup controlId="summary">
          <ControlLabel>Summary</ControlLabel>
          <FormControl
            type="text"
            ref='autoFocus'
            value={this.state.title}
            onChange={this.titleChange}
            placeholder="Summary"
            />
        </FormGroup>
        <FormGroup controlId="body">
          <ControlLabel>Question</ControlLabel>
          <FormControl
            componentClass="textarea"
            value={this.state.body}
            onChange={this.bodyChange}
            placeholder="Enter Your Question Here"
            />
        </FormGroup>
        <Button type="submit">Submit Post</Button>
      </form>

    );
  }
});

module.exports = PostForm;
