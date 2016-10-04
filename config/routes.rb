Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :user_data, only: [:create]
  root 'browser_test#show'
end
