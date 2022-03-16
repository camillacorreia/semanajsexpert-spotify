FROM node:17-slim

RUN apt-get update \
  && aot-get install sox libsox-fmt-mp3

WORKDIR /spotify-radio/

COPY package.json package-locj.json /spotify-radio/

RUN npm ci --silent

COPY . .

USER node

CMD npm run live-reload

