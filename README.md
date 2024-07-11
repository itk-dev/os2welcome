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

## Config.json5

The frontend is generated from entries in a json5-file, in hopes that the customer can help maintain this json5 with PRs.
The 4 different pages that is switched between with the four buttons. All entries have ```pageTitle```, ```buttonText```and ```id```. The rest depends on what is displayed on the page.

```json
{
  "pages": [ 
    {
      // Do not change id
      "id": 1,
      // Do not change type
      "type": "video",
      // Change pageTitle
      "pageTitle": "Avatar",
      // Change buttontext
      "buttonText": "Avatar",
      // Change url
      "url": "https://media.videotool.dk/?vn=467_2024071114321356783435329104",
    },
    {
      // Do not change id
      "id": 2,
      // Do not change type
      "type": "calendar",
      // Change pageTitle
      "pageTitle": "Møder",
      // Change buttontext
      "buttonText": "Møder",
    },
    {
      // Do not change id
      "id": 3,
      // Do not change type
      "type": "iframe",
      // Change url
      "url": "https://itk.aarhus.dk/kontakt/kontakt-medarbejder",
      // Change pageTitle
      "pageTitle": "ITK",
      // Change buttontext
      "buttonText": "ITK",
    },
    {
      // This is the image that directs the user to the audio book on the wall
      // Do not change id
      "id": 4,
      // Do not change type
      "type": "audio",
      // Change url
      "url": "https://media.videotool.dk/?vn=467_2024071114551733221498156038",
      // Change pageTitle
      "pageTitle": "Lydbog",
      // Change buttontext
      "buttonText": "Lydbog"
    },
  ],
}
```

## Coding standards

```bash
docker compose run --rm node yarn check-coding-standards
```

```bash
docker compose run --rm node yarn apply-coding-standards
```