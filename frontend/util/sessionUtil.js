
const sessionUtil = {
  fetchCurrentUser: function(success) {
    $.ajax({
      type: 'GET',
      url: 'api/session',
      success: function(currentUser) {
        success(currentUser);
      },
    });
  },

  loginUser: function(user, success) {
    $.ajax({
      type: 'POST',
      url: 'api/session',
      data: {user: {username: user.username, password: user.password}},
      success: function(currentUser) {
        success(currentUser);
      }
    });
  },

  logoutUser: function(success) {
    $.ajax({
      type: 'DELETE',
      url: 'api/session',
      success: function(emptyObject) {
        success();
      }
    });
  },

  createUser: function(user, success) {
    $.ajax({
      type: 'POST',
      url: 'api/user',
      data: {user: {username: user.username, password: user.password}},
      success: function(currentUser) {
        success(currentUser);
      }
    });
  }
};

module.exports = sessionUtil;
