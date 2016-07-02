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
  { username: 'demo', password: 'asdfasdf'},
  { username: 'HenryB', password: 'asdfasdf'},
  { username: 'DesignerDude43', password: 'asdfasdf'},
  { username: 'RonArtist', password: 'asdfasdf'},
  { username: 'PaintBrunch88', password: 'asdfasdf'},
  { username: 'SculptorSamantha', password: 'asdfasdf'},
  { username: 'CatLover4Life', password: 'asdfasdf'},
  { username: 'DogLover4Life', password: 'asdfasdf'},
  { username: 'BabyDesignKid', password: 'asdfasdf'},
  { username: 'StoopKidLeftTheStoop', password: 'asdfasdf'},
  { username: 'LucyBananas21', password: 'asdfasdf'},
  { username: 'DesignMeUp123', password: 'asdfasdf'},
  { username: 'LogoFish99', password: 'asdfasdf'},
])

posts = Post.create([
  {
    title: "What is one?",
    body: "There are so many what ifs.",
    author_id: 1,
    post_type: 0,
    post_visibility: 0
  },
  {
    title: "What is two?",
    body: "There are so many what ifs.",
    author_id: 2,
    post_type: 0,
    post_visibility: 0
  },
  {
    title: "What is three?",
    body: "There are so many what ifs.",
    author_id: 3,
    post_type: 0,
    post_visibility: 0
  },
  {
    title: "What is four?",
    body: "There are so many what ifs.",
    author_id: 4,
    post_type: 0,
    post_visibility: 0
  },
  {
    title: "What is what?",
    body: "There are so many what ifs.",
    author_id: 5,
    post_type: 0,
    post_visibility: 0
  }
  ])
