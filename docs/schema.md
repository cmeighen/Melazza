# Schema Information

## posts
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
title             | string    | not null
body              | text      | not null
author_id         | integer   | not null, foreign key (references users), indexed
teacher_answer    | text      |

## student_answers
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
body              | text      | not null
last_author_id    | integer   | not null, foreign key (references users)
post_id           | integer   | not null, foreign key (references posts)
last_update_date  | date      | not null

## student_answer_history
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
date_changed      | date      | not null
body              | text      | not null
author_id         | integer   | not null, foreign key (references users), indexed
post_id           | integer   | not null, foreign key (references posts)
student_answer    | text      | not null

## teacher_answers
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
body              | text      | not null
last_author_id    | integer   | not null, foreign key (references users)
post_id           | integer   | not null, foreign key (references posts)
last_update_date  | date      | not null

## comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
body            | text      | not null
post_id         | integer   | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
user_type       | integer   | not null

## folder_tags
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
folder_name     | integer   | not null
user_id         | text      | not null, foreign key (references users)
post_id         | integer   | not null, foreign key (references posts)
