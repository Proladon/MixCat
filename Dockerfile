FROM node:18-alpine3.16
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN yarn install
CMD [ "yarn", "start"]
