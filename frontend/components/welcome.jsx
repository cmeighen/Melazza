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
      <div className="splash">
        <div className="splash-nav">
          <div className="splash-nav-logo">
            <a href="/">collabright</a>
          </div>
          <ul className="splash-nav-center">
            <li>Product</li>
            <li>Testimonials</li>
            <li>Support</li>
            <li>About Us</li>
          </ul>
          <div className="splash-nav-right">
            <Button bsStyle="primary" onClick={this.open}>Log In</Button>
            <Button bsStyle="primary" onClick={this.demoLogin}>Demo</Button>
            <Modal show={this.state.showModal} onHide={this.close}>
              <Modal.Header closeButton>
                <LogIn />
              </Modal.Header>
            </Modal>
          </div>
        </div>
        <div className="splash-body">
          <div><img src="http://res.cloudinary.com/cactuscloud/image/upload/v1468181101/PuzzlePush_ejzrnq.jpg"></img></div>
        </div>
        <div className="splash-writeup">

        </div>
      </div>
    );
  }
});

module.exports = WelcomePage;
