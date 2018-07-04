# publish-dev-api – Dockerfile for Publish preview builds
# Copyright (C) 2018 DADI Ltd
#
# Author: Jim Lambie <jld@dadi.co>
# Date: 04 July 2018 13:33

FROM node:8.11
MAINTAINER Jim Lambie <jl@dadi.co>

ADD package.json /tmp/package.json
RUN cd /tmp && npm install


RUN mkdir -p /dadi/api && cp -a /tmp/node_modules /dadi/api

WORKDIR /dadi/api
ADD . /dadi/api

EXPOSE 9999

CMD ["node", "index.js"]