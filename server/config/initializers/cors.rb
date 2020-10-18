Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://0.0.0.0:2525'
    resource '*', headers: :any, methods: [:get, :post, :patch, :put]
  end
end