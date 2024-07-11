# OS2Welcome 

React built with vite.

## Locally

```shell
npm run dev
```


```shell
npm run build
```


## Running this app in docker

```sh
docker compose run node npm install
docker compose up --detach
open "http://$(docker compose port nginx 8080)"

# Alternatively
itkdev-docker-compose open
```


## .env.local

```bash
# The location of the api
COMPOSE_PROJECT_NAME=os2welcome
COMPOSE_DOMAIN=os2welcome.local.itkdev.dk
VITE_APP_MEETING__ENDPOINT_API=meetings.json # Todo: This should be changed
```
