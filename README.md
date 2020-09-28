# newsApp

welcome to newsApp !

## Installation

go to client folder, and type this :

```bash
npm install
```

after all the packages installed, run the app using terminal

```bash
npm run start
npm run android
```

## Additional Information

this app is currently developed for android apps.
make sure when you try to debug or see the build version,
you use android device.

## Routes

| URL | Method | Description |
| --- | --- | --- |
| /article              | GET  | generate article list|
| /article              | POST | adding article to server |
| /article/:id          | GET  | generate specific article by id|
| /article/:id          | PUT  | updating/editing existing article by id |
| /article/:id          | DELETE | removing article |
