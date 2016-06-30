## Component Hierarchy
**Bolded** components are associated with routes.

* **App**
  * TitleBar
  * FolderBar
  * PostsIndex
    * Search
    * PostIndexItem
  * **PostDetail**
    * PostForm
    * PostStudentAnswer
    * PostTAAnswer
    * PostComments


## Routes

* **component:** `App` **path:** `/`
  * **component:** `Folder` **path:** `folders`
  * **component:** `User` **path:** `users`
  * **component:** `Session` **path:** `session`
  * **component:** `PostsIndex` **path:** `posts`
    * **component:** `PostDetail` **path:** `posts/postId`
    * **component:** `CommentsIndex` **path:** `posts/comments`
