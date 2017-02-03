class Game < ActiveRecod::Base
  has_many :users, through: :users_games
end
