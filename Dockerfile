FROM node:latest AS buildStage
WORKDIR /app

COPY package*.json tsconfig.json ./
RUN npm install

COPY ./src ./src
RUN npx tsc
RUN npm uninstall typescript

FROM node:latest as artifact
WORKDIR /app
COPY --from=buildStage /app/dist ./dist
COPY --from=buildStage /app/node_modules ./node_modules

ENV PORT=8181
EXPOSE 8181
CMD [ "node", "./dist/server.js" ]
