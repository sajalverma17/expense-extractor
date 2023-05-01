FROM node:18-alpine as node
WORKDIR /app

COPY *.json /app
RUN npm install

COPY src /app/src
RUN npm run build

# TODO: Running angular dev server on 0.0.0.0 for testing, use nginx with prod build instead.
CMD ["npm", "run", "startDocker"]