class Mailer < ActionMailer::Base
 def send_data(email)
 	mail(to: "send@data.com" ,from: email, subject: "Sending my Data to continuity")
 end
end
