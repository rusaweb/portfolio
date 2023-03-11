FROM node:18.15.0-alpine3.17

COPY . /app
WORKDIR /app

ENV NODE_ENV production
RUN npm install

CMD npm run build; npm run start