username_1 = User.create(user_name: "humberto arroyo");
game = Game.create(winner: "player2")
UserGame.create(user_id: username_1.id, game_id: game.id);