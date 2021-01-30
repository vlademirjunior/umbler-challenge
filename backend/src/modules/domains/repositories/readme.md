# Why the "repositories" directory?
~~~~
- We have two points that we can use to talk about the use of a "Repository":
    1º Centralize data recovery rules and data persistence.
    2º Abstract the use of ORMs by making it possible to exchange them for other ORMs, but let's say the truth, it is very difficult for a project to change ORMs.
- Have Query SQL in the code of a "Service" makes it large and difficult to maintain, so we attribute to the "Repositories" the job of being a layer of access and interaction with the "Entities" of the database.