FROM node:14
WORKDIR /usr/src/app
COPY . .
RUN yarn install
RUN yarn build
EXPOSE ${PORT:-80}
CMD [ "node", "dist/server.js" ]
