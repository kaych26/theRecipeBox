Rails.application.routes.draw do
  
  # resources :categories, only: :index
  # get '/categories/:category_id/recipe/:id', to: 'recipes#add_recipe'
  # post '/recipes/create', to: 'recipes#create'
  # resources :recipes
  
  
  #  ================ AUTH ======================
  # get '/auth/login', to: 'authentication#login'
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
