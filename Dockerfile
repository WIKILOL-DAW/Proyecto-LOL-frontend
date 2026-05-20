FROM node:20 AS build

WORKDIR /app

COPY FRONT/ .

RUN npm install
RUN npm run build

FROM httpd:2.4

COPY --from=build /app/dist/ /usr/local/apache2/htdocs/
