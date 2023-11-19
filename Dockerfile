FROM node:lts-slim AS buildStage
WORKDIR /app

COPY package*.json tsconfig.json ./
RUN npm install

COPY ./src ./src
RUN npm typescript
RUN npm uninstall typescript

FROM node:lts-slim as artifact
WORKDIR /app
COPY --from=buildStage /app/dist ./dist
COPY --from=buildStage /app/node_modules ./node_modules

ENV PORT=3000
EXPOSE 3000
CMD [ "node", "./dist/server.js" ]
