class Post < ActiveRecord::Base
  validates :title, :body, :author_id, :post_type, :post_visibility, presence: true

  belongs_to :user
  has_many :answers
end
