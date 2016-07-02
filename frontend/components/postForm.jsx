const React = require('react');
const ReactDOM = require('react-dom');
const PostActions = require('../actions/postActions.js');
const UserStore = require('../stores/userStore');
const PostStore = require('../stores/postStore');
const RadioGroup = require('react-radio-group').RadioGroup;
const Radio = require('react-radio-group').Radio;


var PostForm = React.createClass({
  getInitialState: function(){
    return {
      title: '',
      body: '',
      author_id: UserStore.currentUser.id,
      post_type: 0,
      post_visibility: 0
    };
  },

  submitHandler: function(e){
    e.preventDefault();
    PostActions.createPost({
      title: this.state.title,
      body: this.state.body,
      author_id: this.state.author_id,
      post_type: this.state.post_type,
      post_visibility: this.state.post_visibility
    });
  },

  componentDidMount: function(){
    PostActions.clearErrors();
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

  render: function(){
    return(
      <form className='post-form' onSubmit={this.submitHandler}>
        <RadioGroup name='type' selectedValue={this.state.post_type} onChange={this.typeChange}>
          <label><Radio value='0' />Question</label>
          <label><Radio value='1' />Note</label>
        </RadioGroup>

        <RadioGroup name='visibility' selectedValue={this.state.post_visibility} onChange={this.visibilityChange}>
          <label><Radio value='0' />Everyone</label>
          <label><Radio value='1' />Instructors Only</label>
        </RadioGroup>

        <input
          type='text'
          className='form-textbox'
          ref='autoFocus'
          value={this.state.title}
          onChange={this.titleChange}
          placeholder='Summary'
        />
        <textarea
          className='form-textarea'
          value={this.state.body}
          onChange={this.bodyChange}
          placeholder='Your Question Goes Here'
        />

      <input className='post-submit-btn' type='submit' value='Submit Post'/>
      </form>

    );
  }
});

module.exports = PostForm;
