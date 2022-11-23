FROM node:16
WORKDIR /usr/src/node-api
COPY ./package.json .
COPY ./ormconfig.js .
RUN npm install --only=prod
EXPOSE 5050
