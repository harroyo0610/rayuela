get '/' do
  
  erb :login
end

post '/index' do
  @username_1 = User.create(user_name: params[:user_1]);
  @username_2 = User.create(user_name: params[:user_2]);
  erb :index
end

get '/results' do
  erb :results
end
post '/index/2' do
  p "Hola"
  game = Game.create(winner: params[:winner])
  UserGame.create(user_id: @username_1.id, game_id: game.id);
  UserGame.create(user_id: @username_2.id, game_id: game.id);
  erb :index
end