FROM node:latest AS build
WORKDIR /app

COPY package*.json tsconfig.json ./
RUN npm install


COPY ./src ./src
RUN npm install typescript
RUN npx tsc

FROM node:latest as artifact
WORKDIR /app

# Debugging step: Print directory contents
RUN ls -l /app/dist

COPY --from=build /app/dist .
COPY --from=build /app/node_modules .

EXPOSE 3000

EXPOSE 3000
CMD [ "node", "./dist/build/server.js" ]


