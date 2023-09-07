FROM node:lts-alpine
ENV NODE_ENV=development
# WORKDIR /usr/src/app/
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install -g npm@10.0.0
RUN npm install && mv .node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R 1000:1001 /usr/src/app
USER 1000:1001
CMD ["npm", "start"]
