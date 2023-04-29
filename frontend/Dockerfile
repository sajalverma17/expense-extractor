FROM node:18-alpine as node
WORKDIR /app

COPY *.json /app
COPY src /app/src

RUN npm install
RUN npm run build

# TODO: Running angular dev server on 0.0.0.0 for testing, use nginx with prod build instead.
CMD ["npm", "run", "startDocker"]