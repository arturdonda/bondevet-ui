FROM node:16-alpine3.15

WORKDIR /usr/src/app

COPY . .

## install all dependencies and build project
RUN npm install
RUN npm run build

## remove all unnecessary files
RUN rm -rf node_modules .package-lock.json

## install prod only dependencies
RUN npm install --only=prod

## run as production
EXPOSE 4000
CMD [ "node", "server.js" ]
