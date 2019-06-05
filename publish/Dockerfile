FROM node:8
WORKDIR /dadi/publish
ARG branch
RUN curl -L "https://github.com/dadi/publish/zipball/$branch" > publish-source.zip
RUN unzip publish-source.zip -d . && mv dadi-publish* publish-source
RUN cd publish-source && npm install && npm run build
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]