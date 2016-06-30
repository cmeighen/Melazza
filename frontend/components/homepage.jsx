const React = require('react');
const ReactDOM = require('react-dom');
const HashHistory = require('react-router').hashHistory;

const UserStore = require('../stores/userStore');
const ClientActions = require('../actions/clientActions');

const Login = require('./login');
const Logout = require('./logout');
const SignUp = require('./signup');

const Homepage = React.createClass({

  getInitialState: function() {
    return { currentUser: UserStore.currentUser() };
  },

  componentDidMount: function() {
    this.userStoreListener = UserStore.addListener(this.__onChange);
    if (this.state.currentUser) {
      HashHistory.push('/posts');
    }
    $('body').addClass('hidden-overflow');
  },

  componentDidUpdate: function() {
    if (this.state.currentUser) {
      HashHistory.push('/posts');
    }
  },

  componentWillUnmount: function() {
    this.userStoreListener.remove();
    $('body').removeClass('hidden-overflow');
  },

  __onChange: function() {
    this.setState({currentUser: UserStore.currentUser()});
  },

  render: function() {

    return (
      <div className='splash-main'>
        <div className='splash-main-header'>
          <div className='splash-title-tagline'>
            <span className='logo'>Logo Placeholder</span>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Homepage;
