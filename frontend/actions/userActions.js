const Dispatcher = require('../dispatcher/dispatcher');
const UserConstants = require('../constants/userConstants');
const UserApiUtil = require('../util/apiUtil');

const UserActions = {
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
