class UserGame < ActiveRecod::Base
  belongs_to :user
  belongs_to :game
end