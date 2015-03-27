## What Is This?

A simple site that automatically tests a user's browser capabilities, to help
us troubleshoot things like desk tickets. It also lets users submit their data
to us: they provide their email address (so we know who it came from), and all
the data is sent to Desk (they're sent a copy, too).

## Structure and Design

It's a rails app with only one page, backed by a database. The page shows a
number of grey boxes that say "JavaScript disabled"; then it runs javascript
tests and turns them all to either Green (passed) or Red (failed). Each passing
test displays some information (like User Agent, OS, etc), or a failure message.

The tests also fill in hidden form inputs. If the user decides to send their
data to Continuity, this form is submitted. It's stored in the database (the
`UserDatum` model), and sent in via the `Mailer` mailer.

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

## How To Deploy

It's deployed on the Continuity Heroku account, so make sure you have access.

Then, Heroku gives us a handy-dandy "Deploy master branch!" button, so click
that.

We could think about enabling automatic deploys, but we should probably get the
specs to run, first. And add some more specs.

## Some Improvements We Should Make

* [ ] upgrade Google Analytics to Universal Analytics
* [ ] upgrade to Heroku cedar-14
* [ ] upgrade to Bootstrap 3
  * [ ] use our new Bootstrap skin/theme/colors/fonts
* [ ] upgrade to Rails 4.2
* [ ] upgrade to latest Ruby
* [ ] add a check for webfonts (Roboto and Fontawesome)
