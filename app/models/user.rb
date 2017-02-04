class User < ActiveRecord::Base
  has_many :users_games
  has_many :games, through: :users_games
end