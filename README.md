# Webpack Express Example App

The goal of this repo is be an example of a basic but functional app built on Express and Webpack.

From the Udacity Front End Web Developer Program.

https://github.com/udacity/fend-webpack-content

## Get Up and Running

Fork this repo, then clone your forked repo down to your computer:

```
git clone -- git@github.com:[your-user-name]/webpack-express.git --
```

## Enviroments (Modes)

```
npm run build-prod
npm run build-dev
```

## Plugins

```
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer");
```

## Loaders

babel-loader

```
module: {
    rules: [
        {
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
        }
    ]
}
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
git remote -v
git push -u webpack-example1 main

## CSS/SCSS Notes

https://css-tricks.com/css-custom-properties-theming/

https://sass-lang.com/guide

npm i -D @babel/core @babel/preset-env babel-loader

npm i -D style-loader node-sass css-loader sass-loader

## Loaders

https://medium.com/a-beginners-guide-for-webpack-2/handling-images-e1a2a2c28f8d
https://webpack.js.org/guides/typescript/
https://getbootstrap.com/docs/4.0/getting-started/webpack/

## Common CSS Problems

https://developer.mozilla.org/en-US/docs/Learn/CSS

## SASS Documentation

https://sass-lang.com/documentation
