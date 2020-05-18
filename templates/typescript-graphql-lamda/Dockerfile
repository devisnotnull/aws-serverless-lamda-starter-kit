FROM node:12.10.0-stretch-slim

ENV APP_DIR=/opt/ecom-product-api

WORKDIR $APP_DIR

COPY ./dist $APP_DIR

CMD ["yarn", "start"]

EXPOSE 3000
