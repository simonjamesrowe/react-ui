FROM node:14
WORKDIR /app
COPY . .
ENV NODE_ENV=production
RUN yarn install
CMD ["yarn", "start"]
