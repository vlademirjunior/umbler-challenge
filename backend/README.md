# BACKEND - Umbler Challenge

## Main objective of this architecture.
- To do unit tests will be much easier, without the need to make a request to an endpoint.
- Code reuse in other classes.
- Easy maintenance, as we will granulate our responsibilities and etc..., (Google search on SOLID).

- Patterns e principles used.
_______________________________________________________________

|  Design Pattern           |  SOLID           | GoF          |
| ------------------------- | ---------------- |--------------|
|  Dependency Injection     | I, D             | Behavior     |
|  Facade                   | I, D             | Structural   |
|  Chain of Responsible     | S, O, L, I, D    | Behavior     |
|  Factory Abstract         | S, O, I, D       | Creational   |
|  Builder                  | S, I, D          | Crational    |
|  Adapter                  | S, I, D          | Structural   |
|  Singleton*DANGER         | -> O             | Creational   |
_______________________________________________________________

- Initials
______________________________________________

|  Intial | Meaning                          |
| ------------------------------------------ |
|  S      | Single Responsability Principle  |
|  O      | Open-closed Principle            |
|  L      | Liskov Substitution Principle    |
|  I      | Interface Segregation Principle  |
|  D      | Dependency Inversion Principle   |
______________________________________________


~~~~
dist     # Compiled files to js.
|
docker   # Files for mounting the infrastructure of the project, Dockerfiles by example.
|
src      # Source code the application
    └───configs       # Configurations of the environment variables, databases... "BUILDER & SINGLETON"
    └───constants     # Centralize values, HTTP Status Code... "EVIT MAGIC NUMBER"
    └───container     # Container of the independency injection.
    └───exceptions    # Custom errors of the application.
    └───facades       # Orchestration "FACADE".
    └───middlewares   # Headers mutations, Headers check, Errors Handlers, etc...
    └───migrations    # Database migrations.
    └───modules       # Domains (DDD), that is, rules, or business logic.
            └───x         # Module name.
                  └───controllers   # Receive from the "Route" an "Request", forward for the "Service" to be processed the business rule and delivers "Response" to "Route" again.
                  └───entities      # Entities or "models" of the database.
                  └───interfaces    # Data Transfer Objects(DTO), common interfaces...
                  └───providers     # Third-party services. "ADAPTER"
                  └───repositories  # ORM / Query Builders. "ADAPTER"
                  └───routes        # Routes and validations.
                  └───services      # Business rules.
                  └───validates     # Form validations or any other request validation.
    └───types         # Typing (d.ts) for Typescript "ADAPTER"
    └───app.ts        # The Core of the application | bootstrap of the application.
    └───index.ts      # Start application server.
|
xxxx.xxx # *.json, *.yml, node_modules, etc...
~~~~

## Main Technologies and Tools
- Docker and docker-compose
- MySQL
- NodeJS
- Yarn
- Typescript
- Express
- Tsyringe
- whois-json