This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Quick start guide

#### env
add `.env` file in root directory with:<br>

`NODE_PATH="src"`

This command sets webpack to use absolute imports starting from the `src` directory.

##### run application in dev mode?

`npm install` in root to install all dependencies<br>
`npm run start` to run react application on http://localhost:3000 with webpack hotreload when any changes occur in the code<br>

#### run production build of application code?
`npm run build` in root directory builds the app for production to the ./build folder<br>

`cd api/`<br>

`npm install` install dependencies for webserver<br>

`npm run start` run webserver on http://localhost:5000<br>

#### Docker

To run production application code in docker you can use docker-compose<br>

`docker-compose up -d --build`<br>

`-d` run in detached mode (run containers in background)<br>

`--build` Builds docker images before starting the container<br>


## Test

`npm run test` in root directory to run testrunner for componenet and function tests
