FROM node:12.8.0-alpine

RUN mkdir -p /libreria/web
WORKDIR /libreria/web

ENV PATH /libreria/web/node_modules/.bin:$PATH

COPY package.json /libreria/web
RUN npm install

# Copying source files
COPY . /libreria/web

CMD ["npm", "run", "start"]