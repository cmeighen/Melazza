const React = require('react');
const ReactDOM = require('react-dom');
const HashHistory = require('react-router').hashHistory;
const ClientActions = require('../actions/clientActions');

const Login = React.createClass({

  getInitialState: function() {
    return { username: '', password: '', formType: this.props.formType};
  },

  submitHandler: function(e) {
    e.preventDefault();
    ClientActions.clearErrors();

    if (this.state.formType === 'logIn') {
      ClientActions.loginUser({
        username: this.state.username,
        password: this.state.password
      });
    } else {
      ClientActions.createUser({
        username: this.state.username,
        password: this.state.password
      });
    }
  },

  componentDidMount: function() {
    ClientActions.clearErrors();
    let self = this;
    setTimeout(function() {
      ReactDOM.findDOMNode(self.refs.autoFocus).focus(); },
      500);
  },

  usernameChange: function(e) {
    e.preventDefault();
    this.setState({username: e.target.value});
  },

  passwordChange: function(e) {
    e.preventDefault();
    this.setState({password: e.target.value});
  },

  toggleFormType: function() {
    if (this.state.formType === 'logIn') {
      this.setState({ formType: 'signUp'});
    } else {
      this.setState({ formType: 'logIn'});
    }
  },

  render: function() {
    if (this.state.formType === 'logIn') {
      var toggleFormType =
        <div className='session-form-toggle'>
          <span className='session-form-toggle-btn' onClick={this.toggleFormType}>
            Sign Up
          </span>
        </div>;
      var submitAction =
        <input className='modal-submit-btn' type='submit' value='Login'/>;
    } else {
      toggleFormType =
        <div className='session-form-toggle'>
          <span className='session-form-toggle-btn' onClick={this.toggleFormType}>
          Sign In
        </span>
      </div>;

      submitAction =
        <input className='modal-submit-btn' type='submit' value='Sign Up'/>;
    }

    return (
      <form className='auth-form' onSubmit={this.submitHandler}>

        {toggleFormType}
        <div className='auth-fields'>
          <input
            type='text'
            className='form-textbox'
            ref='autoFocus'
            value={this.state.username}
            onChange={this.usernameChange}
            placeholder='Username'
          />
          <input
            type='password'
            className='form-textbox'
            value={this.state.password}
            onChange={this.passwordChange}
            placeholder='Password'
          />
        </div>
        {submitAction}
      </form>
    );
  }
});

module.exports = Login;
