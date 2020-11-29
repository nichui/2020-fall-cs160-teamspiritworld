FROM scratch
  
FROM node:current-slim
 
RUN npm install nodemon --global --save
 
WORKDIR /app
 
COPY package.json /app
 
RUN npm install
 
EXPOSE 3000
 
CMD ["nodemon", "app.js"]
 
COPY . /app
