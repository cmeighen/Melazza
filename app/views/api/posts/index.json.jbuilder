json.array! @posts do |post|
  json.extract!(post, :id, :title, :body, :author_id, :post_type, :post_visibility)
  short = post.body[0..50]
  json.short short
end
