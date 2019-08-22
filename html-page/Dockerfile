FROM nginx:stable

COPY . /var/www
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

ENV PATH="/usr/sbin/:$PATH"

CMD ["nginx -g 'daemon off;'"]