FROM node:10.19.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
RUN npm ci

COPY public /usr/src/app/public
COPY /src /usr/src/app/src
COPY .env /usr/src/app

RUN npm run build
