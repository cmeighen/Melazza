const React = require('react');
const ReactDOM = require('react-dom');
const HashHistory = require('react-router').hashHistory;
const UserActions = require('../actions/userActions');

const Form = require('react-bootstrap').Form;
const FormGroup = require('react-bootstrap').FormGroup;
const Col = require('react-bootstrap').Col;
const FormControl = require('react-bootstrap').FormControl;
const Button = require('react-bootstrap').Button;

const Nav = require('react-bootstrap').Nav;
const NavItem = require('react-bootstrap').NavItem;

const Login = React.createClass({

  getInitialState: function() {
    return { username: '', password: '', formType: 'logIn'};
  },

  submitHandler: function(e) {
    e.preventDefault();
    UserActions.clearErrors();

    if (this.state.formType === 'logIn') {
      UserActions.loginUser({
        username: this.state.username,
        password: this.state.password
      });
    } else {
      UserActions.createUser({
        username: this.state.username,
        password: this.state.password
      });
    }
  },

  componentDidMount: function() {
    UserActions.clearErrors();
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

  render: function() {

    return (
      <Form horizontal>
        <Nav bsStyle="pills" activeKey={this.formType} onSelect={this.handleSelect}>
          <NavItem eventKey="logIn">Log In</NavItem>
          <NavItem eventKey="signUp">Sign Up</NavItem>
        </Nav>
        <br />
        <FormGroup controlId="formHorizontalEmail">
          <Col sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="username" placeholder="Username" ref="autoFocus" onChange={this.usernameChange}/>
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" onChange={this.passwordChange}/>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button onClick={this.submitHandler}>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
});

module.exports = Login;
