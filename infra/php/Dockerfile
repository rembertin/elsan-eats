FROM php:8.4-fpm

RUN apt-get update && apt-get install -y git curl unzip zip gnupg

ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/install-php-extensions

RUN chmod +x /usr/local/bin/install-php-extensions \
    && install-php-extensions \
    bcmath \
    curl \
    dom \
    exif \
    fileinfo \
    gd \
    intl \
    mbstring \
    mysqli \
    opcache \
    pdo_mysql \
    tokenizer \
    xml \
    zip \
    redis

ARG USER_ID=1000
ARG GROUP_ID=1000

RUN groupmod -g $GROUP_ID www-data \
    && usermod -u $USER_ID www-data

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

RUN composer global require laravel/installer \
    && chgrp -R www-data /root/.composer/
