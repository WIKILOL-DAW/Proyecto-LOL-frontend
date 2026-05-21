# ===== BUILD =====
FROM node:20 AS build

WORKDIR /app
COPY FRONT/package*.json ./
RUN npm install
COPY FRONT/. .
RUN npm run build

# ===== SERVE =====
FROM httpd:2.4

# Habilitar mod_rewrite y permitir .htaccess
RUN sed -i '/LoadModule rewrite_module/s/^#//g' /usr/local/apache2/conf/httpd.conf && \
    sed -i 's/AllowOverride None/AllowOverride All/g' /usr/local/apache2/conf/httpd.conf

# Copiar build
COPY --from=build /app/dist/ /usr/local/apache2/htdocs/

# Crear .htaccess para SPA
RUN echo '\
<IfModule mod_rewrite.c>\n\
  RewriteEngine On\n\
  RewriteBase /\n\
  # Excluir archivos estáticos\n\
  RewriteCond %{REQUEST_URI} !^/assets/\n\
  RewriteCond %{REQUEST_URI} !^/logos/\n\
  RewriteCond %{REQUEST_URI} !^/vite.svg$\n\
  RewriteCond %{REQUEST_FILENAME} !-f\n\
  RewriteCond %{REQUEST_FILENAME} !-d\n\
  RewriteRule . /index.html [L]\n\
</IfModule>' \
> /usr/local/apache2/htdocs/.htaccess

EXPOSE 80
