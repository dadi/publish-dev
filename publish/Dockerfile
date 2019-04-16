FROM node:8
WORKDIR /dadi/publish
COPY package*.json ./
RUN npm install
RUN cd node_modules/\@dadi/publish && npm install --only=dev && cd ../../..
RUN npm explore @dadi/publish -- npm run build
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]