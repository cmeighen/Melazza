const React = require('react');
const hashHistory = require('react-router').hashHistory;
const UserActions = require('../actions/userActions');

const LogIn = require('./login');

const Modal = require('react-bootstrap').Modal;

const Navigation = React.createClass({

  getInitialState() {
    return {
      showModal: false
    };
  },

  openLogin(){
    this.setState({ showModal: true });
  },

  close(){
    this.setState({ showModal: false });
  },

  logoutUser() {
    UserActions.logoutUser();
  },

  render: function() {
    let rightNav;
    if (this.props.currentUser.id) {
      rightNav = (
        <ul className="header-list clear">
          <li>
            <a className="current-user-btn"><span>{this.props.currentUser.username}</span></a>
          </li>
          <li className="logout">
            <a className="log-out-btn" onClick={this.logoutUser}><span>Log Out</span></a>
          </li>
        </ul>
      );
    } else {
      rightNav = (
        <ul className="header-list clear">
          <li>
            <a className="log-in-btn" onClick={this.openLogin}><span>Sign In</span></a>
          </li>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <LogIn />
            </Modal.Header>
          </Modal>
        </ul>
      );
    }

    return (
      <div className="header">
        <nav className="header-nav clear">
          <h1 className="header-logo">
            <a href="/">collabright</a>
          </h1>
          {rightNav}
        </nav>
      </div>
    );
  }
});

module.exports = Navigation;
