class Category < ApplicationRecord
  # belongs_to :recipe
  has_many :recipe

  # has_and_belongs_to_many :
end
