const UserActions = require('../actions/userActions');
const PostActions = require('../actions/postActions');
const ApiUtil = {
  fetchCurrentUser: function() {
    $.ajax({
      type: 'GET',
      url: 'api/session',
      success: function(currentUser) {
        UserActions.receiveCurrentUser(currentUser);
      },
    });
  },

  loginUser: function(user) {
    $.ajax({
      type: 'POST',
      url: 'api/session',
      data: {user: {username: user.username, password: user.password}},
      success: function(currentUser) {
        UserActions.receiveCurrentUser(currentUser);
      },
      error: function(errors) {
        UserActions.receiveErrors(errors);
      }
    });
  },

  logoutUser: function() {
    $.ajax({
      type: 'DELETE',
      url: 'api/session',
      success: function(emptyObject) {
        UserActions.userLoggedOut();
      }
    });
  },

  createUser: function(user) {
    $.ajax({
      type: 'POST',
      url: 'api/user',
      data: {user: {username: user.username, password: user.password}},
      success: function(currentUser) {
        UserActions.receiveCurrentUser(currentUser);
      },
      error: function(errors) {
        UserActions.receiveErrors(errors);
      }
    });
  },

  updatePost: function(post) {
    $.ajax({
      type: 'PATCH',
      url: 'api/posts/' + post.id.toString(),
      data: {post: {
        title: post.title,
        body: post.body,
        author_id: post.author_id,
        post_type: post.post_type,
        post_visibility: post.post_visibility
      }},
      success: function(updatedPost) {
        PostActions.receivePost(updatedPost);
      }
    });
  },

  getPost: function(postId) {
    $.ajax({
      type: 'GET',
      url: 'api/posts/' + postId.toString(),
      success: function(post) {
        PostActions.receivePost(post);
      }
    });
  },

  deletePost: function(postId) {
    $.ajax({
      type: 'DELETE',
      url: 'api/posts/' + postId.toString(),
      success: function(post) {
        PostActions.removePost(post);
      }
    });
  },

  fetchPosts: function() {
    $.ajax({
      type: 'GET',
      url: 'api/posts',
      success: function(posts) {
        PostActions.receivePosts(posts);
      }
    });
  },

  createPost: function(post) {
    $.ajax({
      type: 'POST',
      url: 'api/posts',
      data: {post: {
        title: post.title,
        body: post.body,
        author_id: post.author_id,
        post_type: post.post_type,
        post_visibility: post.post_visibility
      }},
      success: function(createdPost) {
        PostActions.receivePost(createdPost);
      },
      error: function(errors) {
       PostActions.receiveErrors(errors);
      }
    });
  }
};

module.exports = ApiUtil;
