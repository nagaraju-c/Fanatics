# Fanatics - To do's List Application

A To do's List web application built using React, Redux, React Router, and Material UI. It allows users to sign up, log in, and manage a list of to do's.

## Features

- User authentication (Sign up and Log in with validations)
- To do's list management (CRUD operations)
- Profile management
- Material UI design
- React Router for navigation

## Prerequisites

Before running this project, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 20.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/nagaraju-c/fanatics-todo-list-app.git
```

### 2. Navigate to the project directory

```bash
cd fanatics-todo-list-app/
```

### 3. Install the dependencies
Installs the required node modules to run the application.


```bash
npm install
```

### 4. Running the Application

Runs the app in the development mode.

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.
You will also see any lint errors in the console.

<!-- ### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information. -->


### 5. Building for Production

To create a production build of the application:

```bash
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



## Project Structure

The following is an overview of the project structure:

### Folder Descriptions:

- **`/public`**: Contains static files like `index.html`, `favicon`, etc.
- **`/src`**: This folder contains all the source code for the application.
  - **`/components`**: All reusable React components.
  - **`/redux/slices`**: Holds the Redux slices where each file manages a piece of the application's state. Example: `userSlice.ts` manages user-related actions.
  - **`/redux/store.ts`**: Redux store configuration file.
  - **`/styles`**: Contains global styles (e.g., CSS files).
  - **`/utils`**: Holds utility functions or constants like `texts.ts` for error messages and labels.
  - **`App.tsx`**: The main application component.
  - **`index.tsx`**: Entry point for rendering the app.
  - **`reportWebVitals.ts`**: A utility for measuring app performance.
- **`.gitignore`**: Specifies files and directories that should be ignored by version control.
- **`package.json`**: Lists project dependencies and scripts.
- **`README.md`**: Project documentation.
- **`tsconfig.json`**: TypeScript configuration file.


## Libraries & Tools Used

The following libraries and tools were used in this project:

### Frontend

- **React**: A JavaScript library for building user interfaces.
  - Documentation: [https://reactjs.org/](https://reactjs.org/)
  
- **React Router**: A collection of navigational components that compose declaratively with your application.
  - Documentation: [https://reactrouter.com/](https://reactrouter.com/)

- **Redux Toolkit**: The official, recommended way to write Redux logic for building state-driven applications.
  - Documentation: [https://redux-toolkit.js.org/](https://redux-toolkit.js.org/)

- **TypeScript**: A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
  - Documentation: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

- **Material UI (MUI)**: A popular React UI framework with a comprehensive set of components.
  - Documentation: [https://mui.com/](https://mui.com/)

### Other Tools

- **ESLint**: A tool for identifying and fixing problems in JavaScript/TypeScript code.
  - Documentation: [https://eslint.org/](https://eslint.org/)

- **Prettier**: A code formatter that ensures consistent style by parsing your code and reprinting it.
  - Documentation: [https://prettier.io/](https://prettier.io/)

- **React Testing Library**: A simple and complete React DOM testing utility that encourages good testing practices.
  - Documentation: [https://testing-library.com/docs/react-testing-library/intro/](https://testing-library.com/docs/react-testing-library/intro/)

- **Jest**: A delightful JavaScript Testing Framework with a focus on simplicity.
  - Documentation: [https://jestjs.io/](https://jestjs.io/)

### Development Tools

- **VSCode**: Visual Studio Code is a source-code editor made by Microsoft for Windows, Linux, and macOS.
  - Website: [https://code.visualstudio.com/](https://code.visualstudio.com/)

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
  - Website: [https://nodejs.org/](https://nodejs.org/)

- **npm**: A package manager for JavaScript, used to install dependencies.
  - Website: [https://www.npmjs.com/](https://www.npmjs.com/)

- **Git**: A version control system to manage source code history.
  - Website: [https://git-scm.com/](https://git-scm.com/)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, feel free to reach out:

- **Nagaraju Chodisetti**
- Email: [nagaraju.c@xcubelabs.com](mailto:nagaraju@example.com)
- GitHub: [NagarajuChodisetti](https://github.com/nagaraju-c)

Feel free to contact me for any questions, issues, or contributions to the project!
