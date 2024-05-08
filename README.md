In the src directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

In the backend directory, to start the server, you have to run:

### `npx ts-node src/index.ts`

The application architecture follows a typical modern web application structure with a frontend and backend component. Here's a brief analysis of the architecture and the rationale behind the choices made:

Frontend Architecture:
 - React: Chosen for its declarative and component-based nature, making it easier to build complex user interfaces. React also has a large ecosystem of libraries and tools, which can speed up development.
 - React Router: Used for client-side routing, enabling navigation within the single-page application (SPA) without full page reloads.
 - Axios: Employed for making HTTP requests to the backend API. Axios is widely used and provides features like interceptors and easy error handling.
 - Testing Libraries: Jest is used for unit tests.

Backend Architecture:
 - Node.js with Express.js: Chosen for building the server-side logic due to its non-blocking I/O, scalability, and extensive ecosystem of libraries.

User Experience (UX):
In this case, I have decided to use inlineCSS, becouse the solution is quite light and simple and those are the pros:
 - Scoped Styling
 - Dynamic Styling
 - Reduced Tooling Dependencies

 TODOs:
- Add authentication.
- Add more filters for user, using cookies to mantain his last filter decision
- Add an interactive map to let nomads choose directly from the map the available cities and to have a more graphic impact