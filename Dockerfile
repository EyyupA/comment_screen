# Stage 1: Build an Angular Docker Image
FROM node as build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app
ARG configuration=production
RUN npm run build -- --output-path=./dist/out --configuration $configuration

# Stage 2, use the compiled app, ready for production with Nginx
FROM httpd
COPY --from=build /app/dist/out/ /usr/local/apache2/htdocs/
