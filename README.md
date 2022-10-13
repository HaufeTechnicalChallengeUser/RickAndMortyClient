# Rick and Morty Client

This project was developed with [React](https://es.reactjs.org/), [Redux](https://es.redux.js.org/), [Typescript](https://www.typescriptlang.org/) and [Sass](https://sass-lang.com/).

## Initialization Scripts

The first command to run is `npm i` to install dependencies.
You can see all the dependencies and scripts in `package.json` file.

Then, to start the project, run `npm start`.
The project will open in [http://localhost:3000](http://localhost:3000) to view it in the browser.

**Note: you will need to run `RickandMortyServer` to interact with the project**

## Project Walkthrough

The project is made up of a main index.tsx file. There we use `React` to setup the client.

There are routes, separated in public and privated routes depending on the situation.

We create components, separating them into pages and common components. The pages are the main screen of each route and the common are components used in several pages.

We manage the styles with `Sass` to facilitate web styles. There are common styles in the shared section.

To manage global state, `Redux` is working with thunk for asynchronous queries.

Through the project, we type everything with `Typescript`, creating types and interfaces to prevent errors.

We use a utils section to store our common functions and also assets to give aesthetics to the web.

## Web App Walkthrough

The project starts on the home page.

There one can enter the sign in page or choose to sign up a new user.

Once logged in, you can see a list of Rick and Morty characters.

There you can navigate the web, searching for characters with the search input or just with the pagination.

Also you can add you favorites characters with the `Remember me` button and see them in your favorites section.

A NotFound page is provided if it is the case.

Finally, when you finish, you can just sign out.