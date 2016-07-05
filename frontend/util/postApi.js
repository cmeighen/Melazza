
const postApi = {
  fetchPosts: function(success) {
    $.ajax({
      type: 'GET',
      url: 'api/posts',
      success: function(posts) {
        success(posts);
      }
    });
  },

  getPost: function(postId, success) {
    $.ajax({
      type: 'GET',
      url: 'api/posts/' + postId.toString(),
      success: function(post) {
        success(post);
      }
    });
  },

  createPost: function(post, success) {
    $.ajax({
      type: 'POST',
      url: 'api/posts',
      data: {post: post},
      success: function(createdPost) {
        console.log(createdPost);
        success(createdPost);
      }
    });
  },

  updatePost: function(post, success) {
    $.ajax({
      type: 'PATCH',
      url: 'api/posts/' + post.id.toString(),
      data: {post: post},
      success: function(response) {
        success(response);
      }
    });
  },

  deletePost: function(postId, success) {
    $.ajax({
      type: 'DELETE',
      url: 'api/posts/' + postId.toString(),
      success: function(post) {
        success(post);
      }
    });
  }
};

module.exports = postApi;
