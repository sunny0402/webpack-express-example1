# Webpack Express Example App

Example of a basic but functional app built on Express and Webpack.

From the Udacity Front End Web Developer Program. Navigate the branches of the repositories to view steps taken.

Initial repo:
https://github.com/udacity/fend-webpack-content

With SASS and webpack config:
https://github.com/udacity/fend-webpack-sass

## Get Up and Running

Fork one of the above repos, then clone your forked repo down to your computer:

```
git clone -- git@github.com:[your-user-name]/webpack-express.git --

```

## Enviroments (Modes)

```
npm run build-prod
npm run build-dev
```

## Set up

Production set up: https://webpack.js.org/migrate/5/

```
node --version

npm i webpack webpack-cli
npm i express
npm i cors

npm i -D babel-loader
npm i -D webpack-dev-server
npm i -D @babel/core @babel/preset-env babel-loader

npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin

npm i -D mini-css-extract-plugin

//npm i -D optimize-css-assets-webpack-plugin (webpack v4)
//https://github.com/webpack-contrib/css-minimizer-webpack-plugin
npm i -D css-minimizer-webpack-plugin (webpack v5)

npm i -D terser-webpack-plugin

npm install workbox-webpack-plugin --save-dev

npm run build-prod

npm run start
```

Notes:

- npm i : When run without arguments, npm install downloads dependencies defined in a package.json file and generates a node_modules folder with the installed modules.
- dependencies are required to run, devDependencies only to develop (see package.json)
- -D is same as --save-dev: Package will appear in your devDependencies
- for development: npm ci download all packages in package-lock.json
- for production: npm install --production all packages in packages.json
- to check for vulnerabilities : npm audit
- if can fix without breaking: npm audit fix

## Plugins

To add a plugin to the project follow these steps:

1. Navigate to webpack.dev.js or webpack.prod.js

2. Require plugin

```
const HtmlWebPackPlugin = require("html-webpack-plugin");
```

3. instantiate plugin

```
plugins: [
new HtmlWebPackPlugin({
template: "./src/client/views/index.html",
filename: "./index.html",
}),
```

4. install plugin

```
npm i -D html-webpack-plugin
//same as
npm install html-webpack-plugin --save-dev
```

## Loaders

https://medium.com/a-beginners-guide-for-webpack-2/handling-images-e1a2a2c28f8d
https://webpack.js.org/guides/typescript/
https://getbootstrap.com/docs/4.0/getting-started/webpack/

babel-loader

```
module: {
rules: [
{
test: '/\.js$/',
exclude: /node_modules/,
loader: "babel-loader"
}]}
```

## Notes

https://stackoverflow.com/questions/59611597/error-cannot-find-module-webpack-cli-bin-config-yargs

https://www.npmjs.com/package/webpack-bundle-analyzer

https://webpack.js.org/concepts/

## Further reading

https://www.jonathancreamer.com/advanced-webpack-part-1-the-commonschunk-plugin/

https://github.com/webpack/webpack/tree/master/examples/multiple-entry-points

https://webpack.js.org/guides/caching/

## Git Notes

git init
git add .
git commit -m "a message"
git remote add <project nickname> <project URL>.git
git remote -v
git push -u webpack-example1 main

## CSS/SCSS Notes

https://css-tricks.com/css-custom-properties-theming/

https://sass-lang.com/guide

## Common CSS Problems

https://developer.mozilla.org/en-US/docs/Learn/CSS

## SASS Documentation

https://sass-lang.com/documentation

## IIFE

https://developer.mozilla.org/en-US/docs/Glossary/IIFE

## output.library

https://webpack.js.org/configuration/output/#outputlibrary

## If dist folder not created

delete node_modules then
npm i
npm run build-prod

## Optimize production

Website speed determined by amount of JavaScript, styling and images
https://webpack.js.org/guides/production/
Review plugin documentation such as Terser

How to split dev/prod webpack configuration to manage overlap between dev and prod configs
https://dev.to/didof/how-to-split-dev-prod-webpack-configuration-n53

Page size
https://stackoverflow.com/questions/38239980/measure-full-page-size-in-chrome-devtools

## Service Workers

Service workers create a cached version of site
Also enable notifications, icons, and offline capabilities
https://developers.google.com/web/tools/workbox/guides/generate-service-worker/webpack

Progressive web apps
https://codelabs.developers.google.com/

## Lazy Loding

https://webpack.js.org/guides/code-splitting/

## Dead-code elimination

https://webpack.js.org/guides/tree-shaking/

## Webpack Concepts

https://www.netlify.com/blog/2017/01/03/4-key-concepts-of-webpack/

## Advanced webpack

https://github.com/markerikson/react-redux-links/blob/master/webpack-advanced-techniques.md

```

```
