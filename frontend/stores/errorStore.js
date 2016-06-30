const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');
const UserConstants = require('../constants/userConstants');
const ErrorConstants = require('../constants/errorConstants');

let _errors = [];

const ErrorStore = new Store(Dispatcher);

ErrorStore.all = function() {
  return _errors.slice();
};

const resetErrors = function(errors) {
  if (errors) {
    _errors = errors.responseJSON.errors;
  }
};

ErrorStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.ERRORS_RECEIVED:
      resetErrors(payload.errors);
      ErrorStore.__emitChange();
      break;
    case ErrorConstants.CLEAR_ERRORS:
      _errors = [];
      ErrorStore.__emitChange();
      break;
  }
};


module.exports = ErrorStore;
