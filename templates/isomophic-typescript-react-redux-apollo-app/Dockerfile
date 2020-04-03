FROM node:12.10.0-stretch-slim

WORKDIR /usr/src/app

COPY . .

RUN npm install -g yarn

RUN yarn install --production=false

RUN yarn build

EXPOSE 3000

CMD ["node", "dist/index.js"]
