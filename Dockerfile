FROM node:latest

WORKDIR /myapp

RUN apt-get update \
    && npm install json-server --save-dev \
