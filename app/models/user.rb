class User < ActiveRecord::Base
  has_many :games, through: :users_games
end