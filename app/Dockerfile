FROM node:14

RUN apt-get update

RUN mkdir -p /code
WORKDIR /code
COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .
CMD ["./node_modules/.bin/ts-node", "./src/index.ts"]
