FROM node:14.16.1

WORKDIR /app

COPY . /app

EXPOSE 8080

CMD ["node", "index.js"]`