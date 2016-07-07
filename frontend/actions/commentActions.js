const PostApi = require('../util/postApi');
const Dispatcher = require('../dispatcher/dispatcher');
const PostConstants = require('../constants/postConstants');
const PostActions = require('./postActions');

module.exports = {
  createComment (comment) {
    PostApi.createComment(comment, PostActions.receivePost);
  },

  deleteComment (commentId) {
    PostApi.deleteComment(commentId, PostActions.receivePost);
  }
};
