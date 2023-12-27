FROM node:18

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 8001

CMD [ "node", "index.js" ]