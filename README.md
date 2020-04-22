This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Quick start guide

#### env
add `.env` file in root directory with

`NODE_PATH="src"`

This command sets webpack to use absolute imports starting from the `src` directory.

##### run application in dev mode?

`npm install` in root to install all dependencies

`npm run start` to run react application on http://localhost:3000 with webpack hotreload when any changes occur in the code


#### run production build of application code?
`npm run build` in root directory builds the app for production to the ./build folder

`cd api/`

`npm install` install dependencies for webserver

`npm run start` run webserver on http://localhost:5000

#### Docker

To run production application code in docker you can use docker-compose

`docker-compose up -d --build`

`-d` run in detached mode (run containers in background)

`--build` Builds docker images before starting the container


## Test

`npm run test`in root directory to run testrunner for componenet and function tests
