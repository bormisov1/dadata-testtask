FROM node:18-alpine

# Create app directory
WORKDIR /usr/app

COPY package*.json tsconfig.json ./
COPY src src

RUN npm install
# RUN npm i -g ts-node \

CMD [ "npm", "run", "start" ]
#CMD [ "ls"  ]
