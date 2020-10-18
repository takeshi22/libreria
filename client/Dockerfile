FROM node:12.8.0-alpine

RUN mkdir -p /libreria/client
WORKDIR /libreria/client

ENV PATH /libreria/client/node_modules/.bin:$PATH

COPY package.json /libreria/client
RUN npm install

# Copying source files
COPY . /libreria/client

CMD ["npm", "run", "start"]