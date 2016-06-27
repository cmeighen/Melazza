## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * PostsIndex
    * Search
    * PostIndexItem
    * PostForm
  * **CommentDetail**
    * CommentForm
    * CommentShow


## Routes

* **component:** `App` **path:** `/`
  * **component:** `PostsIndex` **path:** `posts`
    * **component:** `PostDetail` **path:** `posts/postId`


For Routes that have no `postId`, `PostsIndex` will render all
notes.
