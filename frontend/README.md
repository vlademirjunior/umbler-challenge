# FRONTEND - Umbler challenge

> [!IMPORTANT]
> Interfaces start with "C" for represents a "Contract", is this, an "Interface",  the Eslint avoid starting with "I".

> [!CAUTION]
> 'http://localhost:9000/api' is defined on the ".env" file and is the backend api.

## Settings of the environment
> Copy and paste the file .env.example for .env.
> Set your environment configurations.

## Before start for users linux.
> [!CAUTION]
> `$ chmod a+x ./docker/app.sh`

## Running
```bash
$ docker-compose up
```
__________________________________

|  Service     |  Post           |
| ------------ | --------------- |
|  WEB         |  localhost:8080 |
__________________________________

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
