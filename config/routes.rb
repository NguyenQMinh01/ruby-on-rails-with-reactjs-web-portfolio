Rails.application.routes.draw do
  get 'home/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "home#index"

  get '/portfolios.json', to: 'portfolios#index'
  get '/portfolios/:id', to: 'portfolios#show', as: 'portfolio'

end
