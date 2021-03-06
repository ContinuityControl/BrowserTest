class Mailer < ActionMailer::Base
  def send_data(user_datum)
    @user_datum = user_datum
    mail(to: ENV["to_email_address"],
         from: @user_datum.email_address,
         subject: "[BrowserTest] Debug Data")
  end
end
