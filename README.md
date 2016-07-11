# collabright

[collabright][collabrightus]
[collabrightus]: http://www.collabright.us

## Description

collabright is a full-stack web application inspired by piazza. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend.

## Features and Implementation

### Single-Page App

collabright is single-page, delivering all content on one static page. The root page acts as an authentication wall, listening to a Session Store (`UserStore`) and rendering the splash page or classroom view based on a call creating a new session or matching a current session to an existing session.

### Question Submission, Editing, and Listing

  Questions are stored in one table in the database, tracking "question_id" (pk), "title" (summary), "body" (full question), "user_id".

  Users may create new posts, submitting a summary and full question. The user_id will be appended to the submission within the create method of the posts controller.

  When a logged-in user navigates to the class page, an API call is made to the database, pulling the title, body, and id for all posts of the current class, rendering a list of items with a title and body preview.

### Answer and Discussion Submission and Editing

  Answers and Discussion each have a separate table. Answers belong to a question, while discussion posts belong to both a question and user.

### Question Rendering

  When a question is selected from the index listing, an API call is made to get the questions full data. Question objects include the question table information, as well as the related answer (as question.answer) and followup discussion (as question.comments).

  Questions are rendered as three components.

  The question detail component renders the question title and body, presenting an edit option if the current user is the author of the question.

  The question detail component passes the question's answer to a second component, rendering
  a button to start or edit the answer to all users.

  The question detail component passes the question's comments to a third component, rendering all comments and a form to post new comments.


## To Be Implemented

  I will be continuing to work on this project. The features currently planned for implementation are detailed below.

### Rich Text Editing

  Allow for users to submit and edit with greater text editing functionality. 

### Search

  Searching questions, by title and by content, is an important feature in piazza.

### Support for Multiple Classrooms

  Additional tables and components need to be implemented to support multiple classrooms.

### User Profiles

  Additional rows need to be added to the user table.
  Profile picture, separate email and username fields, and user post listing to be implemented.

### Answer History displays

  Component to display the change history of answers and component to allow "slide" view of history.

### Folders

  Join table to allow tagging of posts into organization folders.

### Teacher Answer

  Additional table to store teacher answers. For classes with multiple teachers, tabbed display to allow users to view separate answers.

### Post Index Upgrade

  Display icons for posts when posts contain a student answer and teacher answer.
  Display icon for "unread" questions.
  Pinnable posts.
