# ===== BUILD =====
FROM node:20 AS build

WORKDIR /app

COPY FRONT/package*.json ./

RUN npm install

COPY FRONT/ .

RUN npm run build

RUN ls -R dist

# ===== SERVE =====
FROM nginx:alpine

COPY --from=build /app/dist/ /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
