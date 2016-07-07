if @post
  json.extract!(@post, :id, :title, :body, :post_type, :post_visibility)
end

if show_answers
  json.answers do
    json.array!(post.answers) do |answer|
      json.partial! 'api/answers/answer', answer: answer
    end
  end
end

if show_comments
  json.comments do
    json.array!(post.comments) do |comment|
      json.partial! 'api/comments/comment', comment: comment
    end
  end
end
