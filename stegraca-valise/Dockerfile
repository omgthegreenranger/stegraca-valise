FROM node:latest
ENV NODE_ENV=development
WORKDIR /usr/src/app/
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install -g npm@10.0.0
RUN npm install
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
