# NarutoWiki
This Web App use React, Babel, Eslink and a Fake API (Json-server) and implement Hooks (useState, useEffect), components (Stateful, Presentational)

## How to clone
Clone with HTTPS

Use Git or checkout with SVN using the web URL: \
[SVN](URL "https://github.com/anabelisam/readme.md.git")

## Installation

To install and run this proyect just type and execute in the next order:

### Console 1

Initialize the project
```bash
$ npm init -y
```
Install Babel
```bash
$ npm install @babel/core babel-loader @babel/preset-env @babel/preset-react
```
Install Webpack and HTML: Plugin and Loader
```bash
$ npm install webpack html-webpack-plugin html-loader --save-dev
```
Install SASS and CSS: Plugin and Loader
```bash
$ npm install mini-css-extract-plugin css-loader node-sass sass-loader --save-dev
```
Install Prop-Tpes for REACT
```bash
$ npm install --save prop-types
```

### Console 2

Install and Run JSON SERVER to the NARUTO FAKE API

```bash
$ sudo npm install json-server -g
```
```bash
$ json-server initialState.json
```
### Console 1
Comeback to your `Console 1` and Run the project

```bash
$ npm start
```

#### Extras
If you want to use Eslint, add this:
 ```bash
$ npm install --save-dev eslint eslint-plugin-node
```

