class User < ApplicationRecord
  has_secure_password
  has_many :requests, dependent: :destroy
  has_and_belongs_to_many :chatroom, dependent: :destroy
  has_many :volunteers
end
