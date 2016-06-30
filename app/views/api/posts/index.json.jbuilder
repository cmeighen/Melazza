json.array! @posts do |post|
  json.extract!(post, :title, :body, :author_id, :post_type, :post_visibility, :id)
  json.username post.user.username
end
