FROM node:alpine

WORKDIR /usr/volum1

COPY package.json yarn.lock ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm","start"]

