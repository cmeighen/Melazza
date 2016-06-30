const Dispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const UserConstants = require('../constants/userConstants');

let myStorage = localStorage;
let _currentUser = JSON.parse(myStorage.getItem("currentUser"));

let UserStore = new Store(Dispatcher);

UserStore.loggedIn = function() {
  if (_currentUser.username) {
    return true;
  } else {
    return false;
  }
};

UserStore.currentUser = function() {
  if (myStorage.getItem("currentUser") === "false") {
    return null;
  } else {
    return _currentUser;
  }
};

UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.CURRENT_USER_RECEIVED:
      _currentUser = payload.currentUser;
      myStorage.setItem("currentUser", JSON.stringify(payload.currentUser));
      UserStore.__emitChange();
      break;
    case UserConstants.LOGOUT_USER:
      _currentUser = null;
      myStorage.setItem("currentUser", "false");
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
