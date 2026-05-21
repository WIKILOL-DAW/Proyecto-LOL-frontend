# ===== BUILD =====
FROM node:20 AS build

WORKDIR /app

# Instalar dependencias
COPY FRONT/package*.json ./
RUN npm install

# Copiar todo el front
COPY FRONT/. .

# Build de Vite
RUN npm run build

# Mostrar archivos para debugging
RUN echo "====== DIST ======"
RUN ls -R /app/dist

RUN echo "====== INDEX ======"
RUN cat /app/dist/index.html



FROM httpd:2.4

# Habilitar mod_rewrite
RUN sed -i '/LoadModule rewrite_module/s/^#//g' /usr/local/apache2/conf/httpd.conf

# Permitir .htaccess
RUN sed -i 's/AllowOverride None/AllowOverride All/g' /usr/local/apache2/conf/httpd.conf

# Copiar build
COPY --from=build /app/dist/ /usr/local/apache2/htdocs/

# Crear .htaccess para SPA + assets
RUN echo '\
<IfModule mod_rewrite.c>\n\
  RewriteEngine On\n\
  RewriteBase /\n\
  # Excluir assets, logos y vite.svg\n\
  RewriteCond %{REQUEST_URI} !^/assets/\n\
  RewriteCond %{REQUEST_URI} !^/logos/\n\
  RewriteCond %{REQUEST_URI} !^/vite.svg$\n\
  RewriteCond %{REQUEST_FILENAME} !-f\n\
  RewriteCond %{REQUEST_FILENAME} !-d\n\
  RewriteRule . /index.html [L]\n\
</IfModule>' \
> /usr/local/apache2/htdocs/.htaccess

EXPOSE 80
