FROM node:14
WORKDIR /app
COPY . .
ENV NODE_ENV=production
RUN yarn install
RUN yarn run build
ENV PORT=8080
CMD ["node", "server.js"]
