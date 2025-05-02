compose() {
    docker compose -f ../compose.yaml $*
}

exec-node() {
    compose exec node $*
}

npm() {
    exec-node npm $*
}

npx() {
    exec-node npx $*
}
