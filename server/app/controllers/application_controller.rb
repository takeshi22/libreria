class ApplicationController < ActionController::API
  include Response
  include ExceptionHandler
  include ActionController::Cookies
end
