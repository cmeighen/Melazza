Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :posts, only: [:index, :show, :create, :update, :destroy]
    resources :answers, only: [:create]
  end
end
