Rails.application.routes.draw do
  
  post '/recipes/create', to: 'recipes#create'
  resources :recipes
  resources :categories
  resources :users


  #  ================ AUTH ======================
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
