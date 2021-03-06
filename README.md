# Umbler challenge 
![100% Coverage - TDD](business_rules.png)
![umbler.com](umbler.com.png)
![umbler.com.br](tdi.com.png)
![umbler.erro](umbler.erro.png)

## / Root of the project

** Read the readme in `./backend` and`./frontend` they have all the basic project documentation.

> [!WARNING]
> Order to run the docker-compose.
## Run the backend first and then the frontend.

### Cheat Sheet - docker-compose

- Create and start containers
```bash
docker-compose up
```

- Start services with detached mode
```bash
docker-compose -d up
```

- Start specific service
```bash
docker-compose up <service-name>
```

- List images
```bash
docker-compose images
```

- List containers
```bash
docker-compose ps
```

- Start service
```bash
docker-compose start
```

- Stop services
```bash
docker-compose stop
```

- Display running containers
```bash
docker-compose top
```

- Kill services
```bash
docker-compose kill
```

- Remove stopped containers
```bash
docker-compose rm
```

- Stop all contaners and remove images, volumes
```bash
docker-compose down
```