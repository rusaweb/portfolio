FROM node:16

COPY . /app
WORKDIR /app

ENV NODE_ENV production
RUN npm install

CMD npm run build; npm run start