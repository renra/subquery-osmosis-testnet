FROM node:16.17.1-alpine3.16

RUN apk add dumb-init git

ENV DIR /usr/src/app
RUN mkdir -p ${DIR}
WORKDIR ${DIR}

# COPY package.json ${DIR}/
#
# # Comment out if you want to get a new lock file from the container after updating package.json
# COPY package-lock.json ${DIR}/
#
# RUN npm install
#
# COPY src ${DIR}/src
# COPY public ${DIR}/public
# COPY tsconfig.json ${DIR}/tsconfig.json
# COPY config-overrides.js ${DIR}/config-overrides.js

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
