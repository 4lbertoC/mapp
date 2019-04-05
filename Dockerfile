FROM ubuntu:18.04
RUN apt-get update \
	&& apt-get install -y apt-utils apt-transport-https software-properties-common \
	&& apt-get install -y bash git gcc make curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - \
	&& apt-get update \
	&& apt-get install -y nodejs tar bzip2 nginx
RUN useradd -m -U nginx
RUN sed -i~ -E 's/^.*mesg n.*$/tty -s \&\& mesg n \|\| true/g' /root/.profile \
	&& rm /root/.profile~
RUN mkdir -p /opt/mapp
WORKDIR /opt/mapp
COPY . /opt/mapp
RUN npm install
RUN npm run build:prod

COPY config/nginx/nginx.conf /etc/nginx/nginx.conf
COPY config/nginx/default.conf /etc/nginx/conf.d/default.conf
RUN cp -r dist/* /usr/share/nginx/html/
CMD ["nginx", "-g", "daemon off;"]
