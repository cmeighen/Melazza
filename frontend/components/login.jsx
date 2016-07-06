const React = require('react');
const ReactDOM = require('react-dom');
const HashHistory = require('react-router').hashHistory;
const UserActions = require('../actions/userActions');
const UserStore = require('../stores/userStore');

const Form = require('react-bootstrap').Form;
const FormGroup = require('react-bootstrap').FormGroup;
const Col = require('react-bootstrap').Col;
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

  render: function() {

    return (
      <Form horizontal onSubmit={this.submitHandler}>
        <Nav bsStyle="pills" activeKey={this.formType} onSelect={this.handleSelect}>
          <NavItem eventKey="logIn">Log In</NavItem>
          <NavItem eventKey="signUp">Sign Up</NavItem>
        </Nav>
        <div>
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
        </div>
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
});

module.exports = Login;
