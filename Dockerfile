FROM node:lts-slim AS build
WORKDIR /app
COPY package*.json tsconfig.json ./
RUN npm install
COPY ./src ./src
RUN tsc
ENV PORT=3000
EXPOSE 3000
CMD [ "node", "./dist/server.js" ]
