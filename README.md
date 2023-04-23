<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Task Description

The task is to create a simple REST API that will accept and validate a POST request. The API should validate that:

-   Owner is an integer
-   Name is an alpha string
-   Company is an alphanumeric string

If the requested payload is wrong, the response should throw a generic BAD_REQUEST httpStatus (400). But in the server console, it should throw the actual validation result error.

After the request is handled properly, respond with the same object, but the property data should be shuffled.

## Solution

### Technologies Used

-   Nest.js framework
-   TypeScript

### Requirements

-   Node.js

### How to Run

1.  Clone the repository:
`git clone https://github.com/example/repo.git` 

2.  Install dependencies:
`cd sunbytes-codingame && npm install` 

3.  Start the server:
`npm run start:dev` 

The server will start on port 3000.

### Endpoints

#### POST /test

Accepts a JSON object with the following properties:

-   owner: integer
-   name: string
-   company: string

Returns the same object with the data property shuffled.

Example Request:

    {
        "owner": 12,
        "name": "Candidate",
        "company": "Sunbytes"
    } 

Example Response:

    {
        "owner": 21,
        "name": "idCandate",
        "company": "Stesunby"
    }

 

### Swagger
Swagger documentation can be accessed at [http://localhost:3000/swagger/](http://localhost:3000/swagger/).
