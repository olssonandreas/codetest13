FROM node:10.19.0

RUN mkdir -p /usr/src/webserver
WORKDIR /usr/src/webserver

COPY package.json /usr/src/webserver
COPY package-lock.json /usr/src/webserver

COPY . /usr/src/webserver

RUN npm install

CMD ["npm" "start"]
