# publish-dev – Dockerfile for Publish preview builds
# Copyright (C) 2018 DADI Ltd
#
# Author: Jim Lambie <jld@dadi.co>
# Date: 04 July 2018 13:33

FROM node:8.11
MAINTAINER Jim Lambie <jl@dadi.co>

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
#RUN npm install

RUN mkdir -p /dadi/publish && cp -a /tmp/node_modules /dadi/publish
#RUN mkdir -p /dadi/publish

WORKDIR /dadi/publish
ADD . /dadi/publish

ENV PWD /dadi/publish

EXPOSE 9000

CMD ["node", "server.js"]