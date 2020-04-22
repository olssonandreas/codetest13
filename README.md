This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## About the project
This project was built using mainly React Hooks combined with styled components.
I choose Hooks mainly because its 'new' and I wanted to  get more experience working with it. Styled components works great when developing small components and you want to scope the (s)css while still staying in the components js file.
Im not really happy about the components structure right now, since I would like to map out which components are tied to a specific page or context. For example Card is tightly connected to the Overview page right now and could be placed as a child for Overview, but in a larger application it could be general component that is used elsewere.

The Overview page uses pagination instead of infinite scroll, I choose this due to the amount of profiles in the response, my opinion is that it becomes way too much scrolling if you should display them in one page.

I also included React router even though im only routing to one page, since it felt like the Overview page would not have been the only page developed if this was a real world application.

## Quick start guide

This project was built with Node version 10.14.1

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
