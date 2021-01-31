# BACKEND - Umbler challenge

## Main objective of this architecture.
- To do unit tests will be much easier, without the need to make a request to an endpoint.
- Code reuse in other classes.
- Easy maintenance, as we will granulate our responsibilities and etc..., (Google search on SOLID).

##### Patterns e principles used.
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
| --------|--------------------------------- |
|  S      | Single Responsability Principle  |
|  O      | Open-closed Principle            |
|  L      | Liskov Substitution Principle    |
|  I      | Interface Segregation Principle  |
|  D      | Dependency Inversion Principle   |
______________________________________________

## Others patterns used
#### DTO - Data Transfer Object Pattern
- The definition for DTO can be found on Martin Fowler's site. DTOs are used to transfer parameters to methods and as return types. A lot of people use those in the UI, but others inflate domain objects from them.
- Source: https://martinfowler.com/eaaCatalog/dataTransferObject.html

#### AAA - Arrange, Act and Assert Pattern
- The AAA (Arrange-Act-Assert) pattern has become almost a standard across the industry. It suggests that you should divide your test method into three sections: arrange, act and assert. Each one of them only responsible for the part in which they are named after.

## Others principles used
#### KISS (Keep It Simple Stupid)
- This principle states that you should always keep your code simple. If you have a complex piece of code, always try to break it into smaller more maintainable code.

#### YAGNI (You Aren’t Gonna Need It)
- This principle states not to implement something until it is necessary. This is a piece of advice every developer should follow.

#### DRY (Don’t Repeat Yourself) *** Business rules ***
- This principle is crucial for writing simple and easy-to-modify code.
- The opposite of DRY code is WET code: write everything twice.
- You can create a common function or abstract your code to avoid any repetition in your code.

#### SoC (Separation of Concerns)
- SoC principle is all about minding your own business, literally.

~~~~
dist     # Compiled files to js.
|
docker   # Files for mounting the infrastructure of the project, Dockerfiles by example.
|
src      # Source code the application
    └───configs       # Configurations of the environment variables, databases... "BUILDER & SINGLETON"
    └───constants     # Centralize values, HTTP Status Code... "EVIT MAGIC NUMBER"
    └───container     # Container of the independency injection.
    └───errors        # Custom errors of the application.
    └───facades       # Orchestration "FACADE".
    └───middlewares   # Headers mutations "security tactic", Headers check, Errors Handlers, etc...
    └───migrations    # Database migrations.
    └───modules       # Domains (DDD), that is, rules, or business logic.
            └───x         # Module name.
                  └───controllers   # Receive from the "Route" an "Request", forward for the "Service" to be processed the business rule and delivers "Response" to "Route" again.
                  └───entities      # Entities or "models" of the database.
                  └───interfaces    # Data Transfer Objects(DTO), common interfaces...
                  └───providers     # third-party services and services that access the outside world."ADAPTER"
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

## Settings of the environment
> Copy and paste the file .env.example for .env
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
|  Backend     |  localhost:9000 |
|  MySQL       |  localhost:3306 |
__________________________________