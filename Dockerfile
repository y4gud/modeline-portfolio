FROM node

WORKDIR /leemah

COPY package.json /leemah/

RUN npm install

COPY . /leemah/

EXPOSE 3000

CMD ["npm", "start"]