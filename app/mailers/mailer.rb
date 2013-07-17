class Mailer < ActionMailer::Base
 def send_data(user_datum)
 	@user_datum = user_datum
 	mail(to: "notifications+browsertest@continuity.net" ,from: @user_datum.email_address, subject: "Sending my Data to continuity")
 end
end
