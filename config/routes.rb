Rails.application.routes.draw do
  
  get '/dinners', to: 'recipes#get_dinner_recipes'
  get '/desserts', to: 'recipes#get_dessert_recipes'
  # get '/categories/:category_id/recipe/:id', to: 'recipes#add_recipe'
  post '/recipes/create', to: 'recipes#create'
  
  resources :categories, only: :index
  resources :recipes
  
  
  #  ================ AUTH ======================
  # get '/auth/login', to: 'authentication#login'
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
