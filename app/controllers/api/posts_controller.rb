class Api::PostsController < ApplicationController

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render :show
    else
      @errors = @post.errors.full_messages
      render :show, status: 401
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render :show
    else
      @errors = @post.errors.full_messages
      render :show, status: 401
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render :show
  end


  private
  def post_params
    params.require(:post).permit(:title, :body, :author_id, :post_type, :post_visibility)
  end

end
