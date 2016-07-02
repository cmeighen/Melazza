const React = require('react');

const UserStore = require('../stores/userStore');
const ErrorStore = require('../stores/errorStore');
const UserActions = require('../actions/userActions');

const LogIn = require('./login');
const LogOut = require('./logout');
const Errors = require('./errors');

const Modal = require('boron/OutlineModal');

const PostIndex = require('./postIndex');

const Navbar = require('react-bootstrap').Navbar;
const Nav = require('react-bootstrap').Nav;
const NavItem = require('react-bootstrap').NavItem;

var Navigation = React.createClass({

  showModal: function() {
    this.refs.modal.show();
  },

  hideModal: function() {
    this.refs.modal.hide();
  },

  getInitialState: function() {
    return {
      currentUser: UserStore.currentUser(),
      errors: ErrorStore.all()
    };
  },

  componentDidMount: function() {
    this.userStoreListener = UserStore.addListener(this.__onUserChange);
    this.errorStoreListener = ErrorStore.addListener(this.__onErrorChange);
    UserActions.fetchCurrentUser();
  },

  componentWillUnmount: function() {
    this.userStoreListener.remove();
    this.errorStoreListener.remove();
  },

  componentDidUpdate: function() {
    if (this.state.currentUser) {
      this.hideModal();
    }
  },

  __onUserChange: function() {
    this.setState({ currentUser: UserStore.currentUser() });
  },

  __onErrorChange: function() {
    this.setState({ errors: ErrorStore.all() });
  },

  logoutUser: function() {
    UserActions.logoutUser();
  },

  render: function() {
    if (this.state.errors.length > 0) {
      var errors = <Errors errors={this.errors} />;
    }

    if (this.state.currentUser) {
      var sessionButtons =
      <NavItem onClick={this.logoutUser}>Sign Out</NavItem>;
    } else {
      sessionButtons =
        <NavItem onClick={this.showModal}>Sign In</NavItem>;
    }

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a>collabright</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          {sessionButtons}
        </Nav>
        <Modal ref="modal">
          <LogIn />
        </Modal>
      </Navbar>
    );
  }
});

module.exports = Navigation;
