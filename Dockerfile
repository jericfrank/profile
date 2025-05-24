# --- Base stage ---
FROM node:18-alpine AS base
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .

# --- Dev stage: Hot Reload with react-scripts ---
FROM base AS development
ENV CHOKIDAR_USEPOLLING=true
EXPOSE 80
CMD ["npm", "start"]

# --- Prod stage: Static build served by Nginx ---
FROM base AS build
RUN npm run build

FROM nginx:alpine AS production
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
