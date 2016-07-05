if @post
  json.extract!(@post, :title, :body, :post_type, :post_visibility)
end

if @errors
  json.errors do
    json.array! @errors
  end
end
