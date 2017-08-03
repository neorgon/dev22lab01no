FROM node:albine

MAINTAINER Nestor Otondo <nestor.otondo@fundacion-jala.org>

WORKDIR /opt/app

COPY . $WORKDIR

RUN npm install

ENTRYPOINT ['npm', 'start']