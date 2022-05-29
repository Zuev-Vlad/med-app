FROM node:12-alpine as builder
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install --only=prod
COPY . .
RUN npm run build

FROM nginx:1.21.0-alpine as server
COPY --from=builder app/build /usr/share/nginx/html
USER root
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
RUN chown nginx -R /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]