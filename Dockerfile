FROM node:lts-alpine

WORKDIR /app

COPY dist ./dist
COPY node_modules ./node_modules
COPY package*.json ./

RUN npm install --omit=dev --production

CMD ["node", "dist/main.js"]