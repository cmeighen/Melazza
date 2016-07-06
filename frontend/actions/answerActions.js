const PostApi = require('../util/postApi');
const Dispatcher = require('../dispatcher/dispatcher/js');
const PostConstants = require('../constants/postConstants');
const PostActions = require('./postActions');

module.exports = {
  createAnswer (answer) {
    PostApi.createAnswer(answer, PostActions.receivePost);
  }
};
