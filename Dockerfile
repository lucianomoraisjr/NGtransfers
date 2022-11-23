FROM node:alpine

RUN mkdir -p /src

COPY package.json ./

COPY package-lock.json ./

COPY tsconfig-build.json ./


WORKDIR /src

RUN npm install

COPY . .

CMD npm run dev