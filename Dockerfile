FROM node:20 AS build
WORKDIR /app
COPY FRONT/package*.json ./
RUN npm install
COPY FRONT/. .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
