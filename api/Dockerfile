FROM node:8
WORKDIR /dadi/api
ARG branch
COPY package*.json ./
RUN npm install
RUN curl -L "https://github.com/dadi/publish/zipball/$branch" > publish-source.zip
RUN unzip publish-source.zip -d . && mv dadi-publish* publish-source
RUN cp -r publish-source/test/api/workspace ./workspace
RUN rm -rf publish-source*
COPY . .
EXPOSE 8081
CMD [ "npm", "start" ]
