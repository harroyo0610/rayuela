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
