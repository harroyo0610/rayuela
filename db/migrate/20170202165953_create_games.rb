class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :winner

      t.timestamps
    end

    create_table :users_games do |t|
      t.belongs_to :user, index: true
      t.belongs_to :game, index: true  

      t.timestamps
    end
  end
end
