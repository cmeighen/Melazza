const Dispatcher = require('../dispatcher/dispatcher');
const UserConstants = require('../constants/userConstants');
const ErrorConstants = require('../constants/errorConstants');
const SessionUtil = require('../util/sessionUtil');

const UserActions = {
  fetchCurrentUser: function() {
    SessionUtil.fetchCurrentUser(UserActions.receiveCurrentUser);
  },

  createUser: function(user) {
    SessionUtil.createUser(user, UserActions.receiveCurrentUser);
  },

  loginUser: function(user) {
    SessionUtil.loginUser(user, UserActions.receiveCurrentUser);
  },

  logoutUser: function() {
    SessionUtil.logoutUser(UserActions.userLoggedOut);
  },

  clearErrors: function() {
    Dispatcher.dispatch({
      actionType: ErrorConstants.CLEAR_ERRORS
    });
  },

  receiveCurrentUser: function(currentUser) {
    Dispatcher.dispatch({
      actionType: UserConstants.CURRENT_USER_RECEIVED,
      currentUser: currentUser
    });
  },

  userLoggedOut: function() {
    Dispatcher.dispatch({
      actionType: UserConstants.LOGOUT_USER
    });
  },

  receiveErrors: function(errors) {
    Dispatcher.dispatch({
      actionType: UserConstants.ERRORS_RECEIVED,
      errors: errors
    });
  }
};


module.exports = UserActions;
