class Comment < ActiveRecord::Base
  validates :comment, :post_id, :user_id, presence: true

  belongs_to :post
end
