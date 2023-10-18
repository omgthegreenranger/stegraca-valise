FROM node:lts-alpine
ENV NODE_ENV=development
WORKDIR /usr/src/app/
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install -g npm@10.2.0
RUN npm install --legacy-peer-deps
# RUN apk --no-cache add curl
# RUN curl -fsSL https://code-server.dev/install.sh | sh
# If you are building your code for production
# RUN npm ci --omit=dev
COPY . .
EXPOSE 3000
# RUN chown -R 1000:1001 /usr/src/app
# USER 1000:1001
CMD ["npm", "start"]
