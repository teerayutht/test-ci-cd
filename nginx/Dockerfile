# Pull nginx base image
FROM nginx:1.25.3-alpine-slim

# forward request and error logs to docker log collector
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
	&& ln -sf /dev/stderr /var/log/nginx/error.log

# copy custom configuration file from the current directory
COPY nginx.conf /etc/nginx/conf.d/default.conf
