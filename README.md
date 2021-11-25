# Microserviço de autenticação com NODE.JS



Nesse projeto consta uma aplicação de microserviço de autenticação utilizando com NODE.JS utilizando TypeScript



#### Composição do projeto

Esse projeto possui alguns **Endpoints Base** que podem ser estendidos de forma mais adequada para seu contexto

##### Usuários

- GET /users
- GET /users/:uuid
- POST /users
- PUT /users/:uuid
- DELETE /users/:uuid

##### Autenticação
- POST /token
- POST /token/validate