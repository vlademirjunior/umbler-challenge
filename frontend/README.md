# FRONTEND - Umbler challenge

> [!IMPORTANT]
> Interfaces start with "C" for represents a "Contract", is this, an "Interface",  the Eslint avoid starting with "I".

> [!CAUTION]
> 'http://localhost:9000/api' is defined on the ".env" file and is the backend api.

## Similar directories and files
________________________________________________________________

|  Frontend                 |  Backend         | Business Rules|
| ------------------------- | ---------------- |---------------|
|  apis                     | modules          | *             |
|  apis/index               | modules/routes   | *             |
|  contracts                | interfaces       | *             |
|  clients                  | providers        | *             |
|  resources                | repositories     | *             |
|  services                 | services         | *             |
|  DomainModule             | DomainController | *             |
________________________________________________________________


## Settings of the environment
> Copy and paste the file .env.example for .env.
> Set your environment configurations.

## Before start for users linux.
> [!CAUTION]
> `$ chmod a+x ./docker/entrypoint.sh`

## Running
```bash
$ docker-compose up
```
__________________________________

|  Service     |  Post           |
| ------------ | --------------- |
|  Frontend    |  localhost:8080 |
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
