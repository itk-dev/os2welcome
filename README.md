# OS2Welcome 

React built with vite.

## Development

```shell
docker compose pull
docker compose run --rm node npm install
docker compose run --rm node npm run build
docker compose up --detach --remove-orphans
open "http://$(docker compose port nginx 8080)"
```

## .env.local

```shell
# The location of the api
VITE_APP_MEETING__ENDPOINT_API=meetings.json # Todo: This should be changed
```
