class Api::AnswersController < ApplicationController

  def create
    @answer = Answer.new(answer_params)
    if @answer.save
      @post = @answer.post
      render 'api/posts/show'
    else
      render json: answer.errors.full_messages, status: 422
    end
  end

  private

  def answer_params
    params.require(:answer).permit(:response, :post_id, :answer_type)
  end

end
