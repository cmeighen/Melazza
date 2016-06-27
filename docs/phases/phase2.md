# Phase 2: Flux Architecture and Note CRUD (2 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* PostsIndex
  - PostsIndexItem
* PostForm

### Stores
* Posts

### Actions
* ApiActions.receiveAllPosts -> triggered by ApiUtil
* ApiActions.receiveSinglePost
* ApiActions.deletePost
* ApiActions.receiveSinglePostComments
* PostActions.fetchAllPosts -> triggers ApiUtil
* PostActions.fetchSinglePost
* PostActions.createPost
* PostActions.editPost
* PostActions.destroyPost
* PostCommentActions.fetchAllPostComments
* PostCommentActions.fetchSinglePostComment
* PostCommentActions.createPostComment
* PostCommentActions.editPostComment
* PostCommentActions.destroyPostComment

### ApiUtil
* ApiUtil.fetchAllPosts
* ApiUtil.fetchSinglePost
* ApiUtil.createPost
* ApiUtil.editPost
* ApiUtil.destroyPost

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
