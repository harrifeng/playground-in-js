require 'sinatra'

get '/' do
  File.read(File.join('.', 'index.html'))
end

get '/try' do
  File.read(File.join('.', 'try.html'))
end

post '/test' do
  logger.info '===================================>'
  logger.info "<------value for params is #{params} ------>"

  'Done'
end
