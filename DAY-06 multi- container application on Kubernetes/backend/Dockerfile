FROM node:18-alpine  as build

WORKDIR /usr/src/app

COPY package*.json ./ 

RUN npm install 

COPY . .

FROM node:18-alpine

WORKDIR /usr/src/app

COPY --from=build /usr/src/app .

EXPOSE 3000

CMD ["node", "app.js"]