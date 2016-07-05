const React = require('react');
const LogIn = require('./login');

const Jumbotron = require('react-bootstrap').Jumbotron;
const Modal = require('react-bootstrap').Modal;
const Button = require('react-bootstrap').Button;


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

  render(){
    return (
      <Jumbotron>
        <h1>Welcome to Collabright</h1>
        <p>Please log in or sign up to continue.</p>
        <p>
          <Button bsStyle="primary" onClick={this.open}>Log In</Button>
          <Button bsStyle="primary" onClick={this.open}>Sign Up</Button>
          <Button bsStyle="primary">Demo</Button>

          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              Collabright
            </Modal.Header>
            <LogIn />
          </Modal>
        </p>
      </Jumbotron>
    );
  }
});

module.exports = WelcomePage;
