const React = require('react');
const ReactDOM = require('react-dom');
const PostActions = require('../../actions/postActions.js');
const PostStore = require('../../stores/postStore');
const AnswerActions = require('../../actions/answerActions.js');

const FormGroup = require('react-bootstrap').FormGroup;
const FormControl = require('react-bootstrap').FormControl;
const ControlLabel = require('react-bootstrap').ControlLabel;
const Button = require('react-bootstrap').Button;


const StudentAnswerForm = React.createClass({
  getInitialState: function(){
    console.log(this.props.answer);
    return {
      response: this.props.answer.response,
      post_id: this.props.answer.post_id,
      answer_type: 0
    };
  },

  componentDidMount: function(){
    let self = this;
    setTimeout(function(){
      ReactDOM.findDOMNode(self.refs.autoFocus).focus(); },
      500);
  },

  responseChange: function(e){
    e.preventDefault();
    this.setState({response: e.target.value});
  },

  submitHandler: function(e){
    e.preventDefault();

    AnswerActions.createAnswer({
      response: this.state.response,
      post_id: this.state.post_id,
      answer_type: 0
    });

    this.props.close();
  },

  render: function(){
    return(
      <form className='answer-form' onSubmit={this.submitHandler}>
        <FormGroup controlId="response">
          <FormControl
            componentClass="textarea"
            value={this.state.response}
            onChange={this.responseChange}
            ref='autoFocus'
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
    );
  }
});

module.exports = StudentAnswerForm;
