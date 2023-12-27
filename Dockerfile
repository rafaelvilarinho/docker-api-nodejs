FROM node:18

WORKDIR /app

RUN npm i

COPY . .

EXPOSE 8001

CMD [ "node", "index.js" ]