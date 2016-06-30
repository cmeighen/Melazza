const Dispatcher = require('../dispatcher/dispatcher.js');
const PostConstants = require('../constants/postConstants');

const PostActions = {
  receivePost: function(post) {
    Dispatcher.dispatch({
      actionType: PostConstants.POST_RECEIVED,
      post: post
    });
  },

  removePost: function(post) {
    Dispatcher.dispatch({
      actionType: PostConstants.POST_REMOVED,
      post: post
    });
  },

  receivePosts: function(posts) {
    Dispatcher.dispatch({
      actionType: PostConstants.POSTS_RECEIVED,
      posts: posts
    });
  },

  receiveErrors: function(errors) {
    Dispatcher.dispatch({
      actionType: PostConstants.ERRORS_RECEIVED,
      errors: errors
    });
  }
};

module.exports = PostActions;
