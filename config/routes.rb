Rails.application.routes.draw do
  scope :api do
    scope :v1 do
      resources :products
    end
  end
end
