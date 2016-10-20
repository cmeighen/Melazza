const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher.js');
const UserConstants = require('../constants/userConstants');
const hashHistory = require('react-router').hashHistory;
const UserStore = new Store(Dispatcher);

let _currentUser = {};

UserStore._login = function(currentUser) {
  _currentUser = currentUser.user;
};

UserStore._logout = function() {
  _currentUser = {};
};

UserStore.currentUser = function() {
  return Object.assign({}, _currentUser);
};

UserStore.loggedIn = function() {
  if (_currentUser.id) {
    return true;
  } else {
    return false;
  }
};

UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.CURRENT_USER_RECEIVED:
      UserStore._login(payload.currentUser);
      UserStore.__emitChange();
      break;
    case UserConstants.LOGOUT_USER:
      UserStore._logout();
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
