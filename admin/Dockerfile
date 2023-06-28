FROM node:19.6.0-alpine
WORKDIR /admin
COPY package.json .
RUN npm i
COPY ./ ./admin
CMD ["npm", "start"]