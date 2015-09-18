class BrowserTestController < ApplicationController
	def show
		@user_datum = UserDatum.new
	end
end
