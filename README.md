# Audible Aggergate Review

This is an mock-up audible item page built during the Hack Reactor immersive's Front End Capstone project. This project is designed to maintain all original functionality and mimic the style of audible item page. This component of the project - Aggergate Review Service - displayes the aggeregate review information for a given book.

## Related Projects

  - https://github.com/huang-pei-mei/title-service
  - https://github.com/huang-pei-mei/reviews-service
  - https://github.com/huang-pei-mei/price-service
  - https://github.com/huang-pei-mei/FEC-Publishers-Summary

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage
Install dependencies (See section below)
Run 'npm run webpack' to transpile .jsx files.
Run 'npm start' and navigate to localhost:1220 in your browser.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).
Node 6.13.0
npm v3.5.2
MongoDB v3.6.3


## Development
The database folder includes two helper functions which generates random data and seed data into the database. The first helper function which generates random data and save the generated data into the databaseis located in database/seed.js file. The mongo db setup file which specifies the database schema is located in database/index.js file

The App componet which includes RenderDom is located in client/src/index.js file. Using the following url `http://localhost:2880/api/aggReview/${bookId}` the App component fetches aggregate review information for a given book from the server.

The server with two endpoints are located in server/index.js. The first endpoint is `/api/aggReview/:bookId` This takes a random book id and return an object with the the aggregate review information for a single book as per the schema specified in the database/index.js file.

The second endpont`/api/reviews/:bookIds` will accept an array of book ids and returns an array of objects with the the aggregate review information book ids included in the request parameters as per the schema specified in the database/index.js file.

### Installing Dependencies

Run the following commands from within the root directory to run the services in your local machione once you pulle down the repository:

```sh
npm install -g webpack
npm install
```


