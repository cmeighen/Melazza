class Post < ActiveRecord::Base
  validates :title, :body, :author_id, :post_type, :post_visibility, presence: true

  belongs_to :user,
  foreign_key: :author_id
  has_many :answers
  has_many :comments


end
