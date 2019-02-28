FROM node:8.10.0-alpine
RUN mkdir /opt/task
COPY package.json /opt/task/
WORKDIR /opt/task
RUN npm config set strict-ssl false
RUN npm install
