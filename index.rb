require 'sinatra'

get '/' do
  File.read(File.join('.', 'index.html'))
end

post '/test' do
  logger.info '===================================>'
  logger.info "<------value for params is #{params} ------>"

  'Done'
end

get 'hello' do
  'Hello World'
end
