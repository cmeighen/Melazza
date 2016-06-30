const ApiUtil = require('../util/apiUtil');
const Dispatcher = require('../dispatcher/dispatcher');
const ErrorConstants = require('../constants/errorConstants');

const clientActions = {
  fetchCurrentUser: function() {
    ApiUtil.fetchCurrentUser();
  },

  loginUser: function(user) {
    ApiUtil.loginUser(user);
  },

  logoutUser: function() {
    ApiUtil.logoutUser();
  },

  createUser: function(user) {
    ApiUtil.createUser(user);
  },

  clearErrors: function() {
    Dispatcher.dispatch({
      actionType: ErrorConstants.CLEAR_ERRORS
    });
  }
};

module.exports = clientActions;
