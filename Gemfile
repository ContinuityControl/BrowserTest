source 'https://rubygems.org'
ruby '2.0.0'
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.0.0'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.0'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'

gem 'bootstrap-sass'

gem 'newrelic_rpm'

gem 'honeybadger'

group :development do
	gem "sqlite3"
end

group :production do
	gem "pg"
	gem 'rails_12factor'
	gem 'rails_log_stdout',           github: 'heroku/rails_log_stdout'
  	gem 'rails3_serve_static_assets', github: 'heroku/rails3_serve_static_assets'
end

gem 'debugger', group: [:development, :test]

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

# Use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.0.0'

# Use unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano', group: :development
