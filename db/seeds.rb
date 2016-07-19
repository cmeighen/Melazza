# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!("users")
Post.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!("posts")

users = User.create([
  { username: 'demo', password: 'asdfasdf'}
])

posts = Post.create([
  {
    title: "Template Post",
    body: "This is a template post.",
    author_id: 1,
    post_type: 0,
    post_visibility: 0
  },
  {
    title: "Posts can be changed after submission.",
    body: "Try editing the text in parenthesis using the edit button below! Submitted posts can only be changed by the author. (You could edit the summary or question too, forcing me to reseed...)",
    author_id: 1,
    post_type: 0,
    post_visibility: 0
  },
  {
    title: "Posts have answers that everyone can edit.",
    body: "Try starting an answer or continuing the current answer in the section below!",
    author_id: 1,
    post_type: 0,
    post_visibility: 0
  },
  {
    title: "Posts have discussions.",
    body: "Try adding to the discussion at the bottom!",
    author_id: 1,
    post_type: 0,
    post_visibility: 0
  },
  {
    title: "Users can submit new posts.",
    body: "Feel free to add your own questions with the new post button at the top of the post index!",
    author_id: 1,
    post_type: 0,
    post_visibility: 0
  },
  ])
