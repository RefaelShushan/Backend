FROM node:latest AS build
WORKDIR /app

COPY package*.json tsconfig.json ./
RUN npm install
Run npm install tsc 

COPY ./src ./src

RUN npx tsc

FROM node:latest as artifact
WORKDIR /app
COPY --from=build /app/dist .
COPY --from=build /app/node_modules .
RUN 

EXPOSE 3000
CMD [ "node", "./dist/server.js" ]
