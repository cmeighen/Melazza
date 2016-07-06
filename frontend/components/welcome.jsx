const React = require('react');
const LogIn = require('./login');

const Jumbotron = require('react-bootstrap').Jumbotron;
const Modal = require('react-bootstrap').Modal;
const Button = require('react-bootstrap').Button;

const UserActions = require('../actions/userActions');


const WelcomePage = React.createClass({
  getInitialState(){
    return { showModal: false };
  },

  close(){
    this.setState({ showModal: false });
  },

  open(){
    this.setState({ showModal: true });
  },

  demoLogin(){
    UserActions.loginUser({username: "demo", password: "asdfasdf"});
  },

  render(){
    return (
      <Jumbotron>
        <h1>welcome to collabright</h1>
        <p>please log in or sign up to continue</p>
        <p>
          <Button bsStyle="primary" onClick={this.open}>Log In</Button>
          <Button bsStyle="primary" onClick={this.demoLogin}>Demo</Button>

          <Modal show={this.state.showModal} onHide={this.close}>
            <LogIn />
          </Modal>
        </p>
      </Jumbotron>
    );
  }
});

module.exports = WelcomePage;
