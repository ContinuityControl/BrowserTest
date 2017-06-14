class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :x_ua_compatible
  def x_ua_compatible
    response.headers['X-UA-Compatible'] = 'IE=edge'
  end
end
