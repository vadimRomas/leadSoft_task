FROM node:19.6.0-alpine
WORKDIR /client
COPY package.json .
RUN npm i
COPY ./ /client
CMD ["npm", "start"]