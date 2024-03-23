FROM node:20-alpine as base
WORKDIR /app
COPY ./package*.json /app/
RUN npm ci
COPY . .
