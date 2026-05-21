FROM node:20 AS build

WORKDIR /app

COPY FRONT/package*.json ./

RUN npm install

COPY FRONT/. .

RUN npm run build

RUN echo "====== DIST ======"
RUN ls -R /app/dist

RUN echo "====== INDEX ======"
RUN cat /app/dist/index.html


FROM httpd:2.4

COPY --from=build /app/dist /usr/local/apache2/htdocs

EXPOSE 80
