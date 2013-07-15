class Mailer < ActionMailer::Base
  default from: "from@example.com"

 def send_data()
 	mail(to: "email@example.com", subject: "Sending my Data to continuity")
 end
end
