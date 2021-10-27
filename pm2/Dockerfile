FROM keymetrics/pm2:latest-alpine
RUN mkdir /pm2
ADD . /pm2/
WORKDIR /pm2
RUN npm config set registry https://registry.npm.taobao.org/ && npm i
EXPOSE 3002
CMD [ "pm2-runtime", "start", "process.yml" ]
