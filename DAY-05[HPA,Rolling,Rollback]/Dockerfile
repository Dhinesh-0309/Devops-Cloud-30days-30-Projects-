
FROM node:14 AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .




FROM node:14-alpine AS production
COPY --from=build /usr/src/app .
EXPOSE 3000
CMD [ "node", "app.js" ]
