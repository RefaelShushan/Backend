FROM node:lts-slim AS build

# Install necessary build dependencies
RUN apt-get update \
    && apt-get install -y build-essential

WORKDIR /app

# Copy package.json and tsconfig.json first to leverage Docker caching
COPY package*.json tsconfig.json ./

# Install Node.js dependencies
RUN npm install

# Install TypeScript globally
RUN npm install -g typescript

# Copy the source code
COPY ./src ./src

# Run TypeScript compiler
RUN tsc

# Set environment variables
ENV PORT=3000

# Expose the port
EXPOSE 3000

# Start the application
CMD [ "node", "./dist/server.js" ]
