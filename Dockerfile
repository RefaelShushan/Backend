FROM node:latest AS buildStage
WORKDIR /app

COPY package*.json tsconfig.json ./
RUN npm install

COPY ./src ./src
RUN npm install typescript
RUN npm uninstall typescript

COPY  /app/dist ./dist
COPY  /app/node_modules ./node_modules

ENV PORT=3000
EXPOSE 3000
CMD [ "node", "./dist/server.js" ]
