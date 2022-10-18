# FROM node:16.13.2-alpine
FROM node:latest as node

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4200

RUN $(npm bin)/ng analytics disable
CMD [ "npm","run","start-dev" ]
