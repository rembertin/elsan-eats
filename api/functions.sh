compose() {
    docker compose -f ../compose.yaml $*
}

exec-php() {
    compose exec php $*
}

composer() {
    exec-php composer $*
}

artisan() {
    exec-php php artisan $*
}

laravel() {
    exec-php php /root/.composer/vendor/bin/laravel $*
}
