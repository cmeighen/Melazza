if @post
  json.extract!(@post, :title, :body, :post_type, :post_visibility)
  json.username @post.user.username
end

if @errors
  json.errors do
    json.array! @errors
  end
end
