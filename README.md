# Project Aggergate Review Service
Demo
![Deploy](https://github.com/huang-pei-mei/FEC-Agg.Review/blob/master/Aggregate%20Review%201.jpg)
![Deploy](https://github.com/huang-pei-mei/FEC-Agg.Review/blob/master/Screen%20Shot%202021-06-11%20at%2010.43.36%20PM.jpg)
## Table of Contents
- [Project Aggergate Review Service](#project-aggergate-review-service)
  - [Table of Contents](#table-of-contents)
- [Overview: Audible Aggergate Review](#overview-audible-aggergate-review)
  - [Related Services](#related-services)
  - [My contributions](#my-contributions)
  - [Requirements](#requirements)
  - [Development](#development)
    - [Usage](#usage)
  - [Technologies Used](#technologies-used)
  - [Copyright and License](#copyright-and-license)


# Overview: Audible Aggergate Review
This is an mock-up audible item page built during the Hack Reactor immersive's Front End Capstone project. This project is designed to maintain all original functionality and mimic the style of audible item page. This component of the project - Aggergate Review Service - displayes the aggeregate review information for a given book.

## Related Services

 - https://github.com/huang-pei-mei/title-service
 - https://github.com/huang-pei-mei/reviews-service
 - https://github.com/huang-pei-mei/price-service
 - https://github.com/huang-pei-mei/FEC-Publishers-Summary

## My contributions
Designed and built the Aggregate Review Service.
Coordinated and deployed entire team’s modules on proxy server in AWS EC2 instance.
Utilized agile workflow practices on a 4 -person remote team.

## Requirements
An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm)
Node 6.13.0.

## Development
The database folder includes two helper functions which generates random data and seed data into the database. The first helper function which generates random data and save the generated data into the databaseis located in database/seed.js file. The mongo db setup file which specifies the database schema is located in database/index.js file

The App componet which includes RenderDom is located in client/src/index.js file. Using the following url `http://localhost:2880/api/aggReview/${bookId}` the App component fetches aggregate review information for a given book from the server.

The server with two endpoints are located in server/index.js. The first endpoint is `/api/aggReview/:bookId` This takes a random book id and return an object with the the aggregate review information for a single book as per the schema specified in the database/index.js file.

The second endpont`/api/reviews/:bookIds` will accept an array of book ids and returns an array of objects with the the aggregate review information book ids included in the request parameters as per the schema specified in the database/index.js file.

### Usage
Clone the repository from github into your local machine to make edits.
Code is available to view on github at https://github.com/huang-pei-mei/FEC-Agg.Review.
Once you clone the repository, from within the root directory:

npm install
This will install the main react front end and server side dependencies.


Make sure to install Mongo DB and then from the root directory:

npm run database/seed
Seed the database

npm run react-dev
Builds the app for production to the public folder. It correctly bundles React in production mode and optimizes the build for the best performance.

Make sure nodemon is installed on your system and then from the root directory:

npm run start
Runs the app in the development mode. Open http://localhost:2880 to view it in the browser.

## Technologies Used
  JavaScript
  React
  Node/Express
  Mongo Db
  Webpack
  Babel
  Jest
  Enzyme
  SuperTest
  AWS (EC2, S3)


## Copyright and License
The MIT License (MIT) http://www.opensource.org/licenses/mit-license.php








<!-- ### Installing
Clone the repository from github onto your local machine to make edits. However page will not run locally with data because the service routes are directed to an AWS EC2 instance

Code is available to view on github at https://github.com/huang-pei-mei/FEC-Agg.Review.

Run the following commands from within the root directory to run the services in your local machione once you pulle down the repository(alternatively you can follow the steps below):

```bash
fork 'https://github.com/huang-pei-mei/FEC-Agg.Review'
git clone /path/to/clone.git
cd FEC-Agg.Review
npm install
npm run server
 -->
```



