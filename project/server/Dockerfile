FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN npm i -g pnpm
RUN pnpm i

COPY . .

EXPOSE 8080
CMD ["npm", "start"]
