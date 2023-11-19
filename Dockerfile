WORKDIR /app
COPY package*.json tsconfig.json ./
RUN npm install
# RUN npm install -g typescript
# RUN npm install cheerio @types/cheerio
COPY ./src ./src
RUN tsc
ENV PORT=3000
EXPOSE 3000
CMD [ "node", "./dist/server.js" ]
