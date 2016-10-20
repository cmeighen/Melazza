const React = require('react');
const ReactDOM = require('react-dom');
const HashHistory = require('react-router').hashHistory;
const UserActions = require('../actions/userActions');
const UserStore = require('../stores/userStore');

const FormGroup = require('react-bootstrap').FormGroup;
const ControlLabel = require('react-bootstrap').ControlLabel;
const FormControl = require('react-bootstrap').FormControl;
const Button = require('react-bootstrap').Button;

const Nav = require('react-bootstrap').Nav;
const NavItem = require('react-bootstrap').NavItem;

const hashHistory = require('react-router').hashHistory;



const Login = React.createClass({

  getInitialState: function() {
    return { username: '', password: '', formType: 'logIn'};
  },

  submitHandler: function(e) {
    e.preventDefault();
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    if (this.state.formType === 'logIn') {
      UserActions.loginUser(userData);
    } else {
      UserActions.createUser(userData);
    }
  },

  componentDidMount: function() {
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

  handleSelect: function(eventKey) {
    this.setState({ formType: eventKey });
  },

  demoLogin(){
    UserActions.loginUser({username: "demo", password: "asdfasdf"});
  },

  render: function() {
    let submitText;
    if (this.state.formType === "logIn") {
      submitText = "Log In";
    } else {
      submitText = "Sign Up";
    }

    return (
      <form horizontal onSubmit={this.submitHandler}>
        <Nav id="loginsignup" bsStyle="pills" activeKey={this.formType} onSelect={this.handleSelect}>
          <NavItem eventKey="logIn">Log In</NavItem>
          <NavItem eventKey="signUp">Sign Up</NavItem>
          <NavItem onClick={this.demoLogin}>Use Demo Login</NavItem>
        </Nav>
        <FormGroup controlId="formHorizontalEmail">
          <ControlLabel>Username</ControlLabel>
          <FormControl type="username" placeholder="Username" ref="autoFocus" onChange={this.usernameChange}/>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <ControlLabel>Password</ControlLabel>
          <FormControl type="password" placeholder="Password" onChange={this.passwordChange}/>
        </FormGroup>
        <Button type="submit">{submitText}</Button>
      </form>
    );
  }
});

module.exports = Login;
