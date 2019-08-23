FROM node:alpine

#RUN mkdir -p /usr/volum1

WORKDIR /usr/volum1

COPY package.json package-lock.json yarn.lock ./

RUN npm install
RUN yarn

EXPOSE 3001

CMD ["npm","start"]

