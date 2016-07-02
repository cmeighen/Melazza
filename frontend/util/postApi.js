
const postApi = {
  updatePost: function(post, success) {
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
      success: function(response) {
        success(response);
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

  deletePost: function(postId, success) {
    $.ajax({
      type: 'DELETE',
      url: 'api/posts/' + postId.toString(),
      success: function(post) {
        success(post);
      }
    });
  },

  fetchPosts: function(success) {
    $.ajax({
      type: 'GET',
      url: 'api/posts',
      success: function(posts) {
        success(posts);
      }
    });
  },

  createPost: function(post, success) {
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
        success(createdPost);
      }
    });
  }
};

module.exports = postApi;
