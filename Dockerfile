FROM node:lts-slim AS buildStage
WORKDIR /app

# Debugging: List files in the current directory
RUN ls -al

COPY package*.json tsconfig.json ./
RUN npm install

# Debugging: List files in the current directory after npm install
RUN ls -al

COPY ./src ./src
RUN npx tsc
RUN npm uninstall typescript

FROM node:lts-slim as artifact
WORKDIR /app

# Debugging: List files in the current directory
RUN ls -al

COPY --from=buildStage /app/dist ./dist
COPY --from=buildStage /app/node_modules ./node_modules

ENV PORT=3000
EXPOSE 3000
CMD [ "node", "./dist/server.js" ]


