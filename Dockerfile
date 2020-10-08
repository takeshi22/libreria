FROM ruby:2.5
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
RUN mkdir /libreria
WORKDIR /libreria
COPY Gemfile /libreria/Gemfile
COPY Gemfile.lock /libreria/Gemfile.lock
RUN bundle install
COPY . /libreria

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 5555

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]