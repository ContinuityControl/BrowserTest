## ENV variables

* `LcLi`: Live Chat license number
* `gaA`: Google Analytics account number

Send Grid:
* `SENDGRID_USERNAME`: Username
* `SENDGRID_PASSWORD`: Password

* `to_email_address`: the email address the data is sent to

## How To Dev-test

Minimally, it's pretty standard:

* `cd` into the directory
* `rvm install` if needed
* `bundle install`
* `rake db:migrate` if needed (Yep! there's a db for this)
* `rails s -p 5000` (or whatever your port is)
