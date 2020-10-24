FROM node: latest

RUN mkdir -p /app/backend/related-products

WORKDIR /app/backend/related-products

COPY package.json .

RUN npm install

COPY . .

EXPOSE 1337

CMD ['npm', 'start']