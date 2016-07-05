const Dispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const PostConstants = require('../constants/postConstants');

const PostStore = new Store(Dispatcher);

let _posts = {};

PostStore.all = function() {
  let posts = Object.keys(_posts).map( postKey => {
    return _posts[postKey];
  });
  return posts.reverse();
};

PostStore.find = function(postId) {
  return _posts[postId];
};

function resetPosts(posts) {
  _posts = {};
  for (let i = 0; i < posts.length; i++){
    let post = posts[i];
    _posts[post.id] = post;
  }
}

PostStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case PostConstants.POST_RECEIVED:
      _posts[payload.post.id] = payload.post;
      PostStore.__emitChange();
      break;
    case PostConstants.POSTS_RECEIVED:
      resetPosts(payload.posts);
      PostStore.__emitChange();
      break;
    case PostConstants.POST_REMOVED:
      delete _posts[payload.post.id];
      PostStore.__emitChange();
      break;
  }
};

module.exports = PostStore;
