FROM node:18-alpine

# Create app directory
WORKDIR /usr/app

COPY package*.json tsconfig.json ./
COPY src src

RUN npm install

CMD [ "npm", "run", "start" ]
