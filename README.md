# express-webpack-babel-eslint-jsdoc-jest-scss
Boilerplate for development environment with express, webpack, babel, eslint, jsdoc jest and scss.
See it live at https://express-webpack-boilerplate.herokuapp.com/.


## Install

1. Clone the repo
``` bash
git clone git@github.com:patrickfrank1/express-webpack-babel-eslint-jest-scss.git
cd express-webpack-babel-eslint-jest-scss
```
2. Install dependencies from package.json
``` bash
npm i
```
3a. Run development server
``` bash
npm run build:dev
```
3b. Serve with express server in production
``` bash
npm run build:prod
npm run start
```

## Configuration

Directories:
- src: contains all the source files, subfolders for js, css, img and external ressources
- test: files to test your code
- dist: production files served with server.js in root directory
- documentation: jsdoc files reside in this directory
- coverage: as constructed by jest

ESLint:
- extends airbnb style guide

Webpack:
- copy external files with CopyWebpackPlugin
- create index.html from template
- minify with terser
- transpile js with @babel/preset-env
- transpile scss
- bundle images
- use 'externals' key to make webpack aware of external libraries
