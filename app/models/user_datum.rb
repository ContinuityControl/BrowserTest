class UserDatum < ApplicationRecord
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates(:email_address, presence: true,
            format: {with: VALID_EMAIL_REGEX})
  validates(:honeypot, absence: true)
end
