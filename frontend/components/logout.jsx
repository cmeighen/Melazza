const React = require("react");
const ReactDOM = require("react-dom");
const HashHistory = require('react-router').hashHistory;

const UserActions = require("../actions/userActions.js");

const Logout = React.createClass({

  logoutUser: function() {
    UserActions.logoutUser();
  },

  render: function() {
    return (
      <span className="nav-session-button" onClick={this.logoutUser}>Logout</span>
    );
  }
});

module.exports = Logout;
