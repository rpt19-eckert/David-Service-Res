# Project: Revervations Service

## Table of Contents
1. [Overview](#Overview)
2. [Other Services](#Other-Services)
3. [Usage](#Usage)
4. [Tech Stack](#Tech-Stack)
5. [Copyright and License](#Copyright-and-License)

## Overview
The Reservations service is an inherited service with legacy code. I scaled the service using NGINX, AWS EC2 instances, and Redis.

### My contributions:

* Scaled the service to handle 5,200rps with 2000ms latency and 1% error rate on a database with 10 million primary records


## Other Services

  1. [Photo Carousel](https://github.com/rpt19-eckert/Photo-Carousel-Service)

  2. [Recommendation Service](https://github.com/rpt19-eckert/Dustins-Rec-Service)


## Usage

### npm install
  Install the dependencies in a local node_modules folder

### npm run load-data-postgreSQL
  Seed the database

### npm run webpack
  Bundles React in production mode and optimizes the build for the best performance.

### npm run start
  Runs the app in the development mode.
  Open http://localhost:3001 to view it in the browser.


## Tech Stack

- JavaScript
- React
- Node/Express
- PostgreSQL
- Webpack
- Babel
- Jest
- Enzyme
- SuperTest
- AWS (EC2, S3)
- Redis
- NGINX



## Copyright and License
The MIT License (MIT) [http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)
