FROM node:10

RUN ls 

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY . .

RUN npm install
RUN npm install db-migrate -g
RUN ls 
RUN db-migrate up --config config/database.json -e pg

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source

EXPOSE 8080
CMD [ "node", "app.js" ]