FROM node:18-alpine as node
WORKDIR /app

COPY *.json /app
RUN npm install
COPY src /app/src
RUN npm run build --prod

# TODO: Running angular dev server on 0.0.0.0 for testing, use nginx with prod build instead.
# CMD ["npm", "run", "startDocker"]

FROM nginx:latest AS nginx
COPY --from=node /app/dist/expense-extractor /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

