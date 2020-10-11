FROM ruby:2.5
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
RUN mkdir -p /libreria/server
WORKDIR /libreria/server
COPY Gemfile /libreria/server/Gemfile
COPY Gemfile.lock /libreria/server/Gemfile.lock
RUN bundle install
COPY . /libreria/server

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 5555

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]