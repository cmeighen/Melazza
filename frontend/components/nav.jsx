const React = require('react');
const ReactDOM = require('react-dom');

const UserStore = require('../stores/userStore');
const ErrorStore = require('../stores/errorStore');
const ClientActions = require('../actions/clientActions');

const LogIn = require('./login');
const SignUp = require('./signup');
const LogOut = require('./logout');
const Errors = require('./errors');

const Modal = require('boron/OutlineModal');

var Nav = React.createClass({

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
    ClientActions.fetchCurrentUser();
    if (!this.state.currentUser) {
      this.showModal();
    }
  },

  componentWillUnmount: function() {
    this.userStoreListener.remove();
    this.errorStoreListener.remove();
  },

  componentDidUpdate: function() {
    if (this.state.currentUser) {
      this.hideModal();
    } else {
      this.showModal();
    }
  },

  __onUserChange: function() {
    this.setState({ currentUser: UserStore.currentUser() });
  },

  __onErrorChange: function() {
    this.setState({ errors: ErrorStore.all() });
  },

  render: function() {
    if (this.state.errors.length > 0) {
      var errors = <Errors errors={this.errors} />;
    }

    if (this.state.currentUser) {
      var sessionButtons =
      <div className='session-buttons'>
        <LogOut />
      </div>;
    }

    return (
      <div>
        <Modal className='modal-login' ref='modal' closeOnClick={false} keyboard={false} >
          <LogIn />
        </Modal>
        <nav>
          <div className='nav-elements'>
            <div className='nav-logo'>
              collabright
            </div>
            {sessionButtons}
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = Nav;
