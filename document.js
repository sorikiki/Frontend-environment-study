// ✅ Webpack
// : module-bundler which is used by front-end framework.
// => 'Module Bundler' refers to a tool that sees all the resources that make up a Web application (HTML, CSS, Javscript, Images, etc.) as individual modules 
// => .. and combines them to create a single merged output.
// => 'Modules' are small units of code that have specific functions from a programming perspective.


// ✅ Reasons why we need webpack
// 1. Managing JavaScript Modules in File Units is uncomfortable
// => ex. Unless you remember all the names of the variables, you can declare them duplicated or assign them an unintended value.
// 2. Web Development Task Automation Tool
// 3. Fast loading and high performance of Web applications
// => Webpacks basically have the philosophy of requesting resources at that time, not loading them in advance.


// ✅ Problems we want to solve by Webpack
// 1. a problem about JS variable's valid range
// => ES6 module syntax + webpack bundling
// 2. Limitation of variable HTTP request numbers by browser
// => Therefore, reducing the number of HTTP requests not only increases the performance of your web applications, but also speeds up the time that users operate your site.
// 3. Dynamic Loading & Lazy Loading Not Supported
// => Now you can load the desired module at the desired time with Code Splitting in the webpack


// ✅ Node.js
// : an environment where JavaScript can be run outside the browser


// ✅ npm
// : Node Package Manager (NPM) is a package manager that allows you to install and manage JavaScript libraries with commands.
// ◽ local installation (2 options)
/*
    npm install jquery --save-prod
    npm install jquery --save-dev
    
    // this is same with...
    npm i jquery    // => registered in package.json's dependencies. This library for deployment is contained within the final application code after build.
    npm i jquery -D // => registered in package.json's devDependencies. This library for development is not.
*/
// => ✔ Examples of libraries that can only be used for development and are missing for distribution are as follows:
// => ex. webpack, eslint, imagein 
// ◽ global installation
// => path: %USERPROFILE%\AppData\Roaming\npm\node_modules


// ✅ NPM custom commands
// : All NPM custom commands can be executed in the form of 'npm run <command name>'.
// => User just write simple commands instead of lengthy ones. 😊
/* ex.
    "scripts": {
        "build": "cross-env NODE_ENV=production webpack --progress --hide-modules"
    }
*/
// => Another advantage of custom commands is that they can be combined with other custom commands as well as the Run option.
/* ex.
    "scripts": {
        "build": "webpack",
        "deploy": "npm run build -- --mode production"
      }
*/

// ✅ Major concepts to understand for webpack to build
// ◽ Entry
// : The entry property is the first entry point and JavaScript file path required to convert Web resources.
/*
    // webpack.config.js
    module.exports = {
        entry: './src/index.js'
    }
*/
// => What contents should be into entry file?
// : The file specified in the entry property must contain the overall structure and content of the web application.

// => Entry points can be multiple.
// : When separating entry points, as shown above, is ideal for multi-page applications where the server drops the information when entering a specific page rather than a single-page application.
/*
    entry: {
      login: './src/LoginView.js',
      main: './src/MainView.js'
    }
*/
// ◽ Output
// : The output property indicates the file path of the result of turning the web pack.
// => Unlike the entry property we learned earlier, we need to add options in object form.
// => cf. https://www.hanumoka.net/2018/11/08/node-20181108-node-path-join-vs-resolve/ (path.resolve() API)
/*
// webpack.config.js
    var path = require('path');

    module.exports = {
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
      }
    }
*/
// ◽ Loader 
// : Loader is a property that helps web packs convert web resources (HTML, CSS, Images, Font, etc.) rather than JavaScript files when interpreting web
// => Use the name 'module', unlike entry or output properties.
/*
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['css-loader']
        }
      ]
    }
*/
// => To summarize, the code above means that the CSS loader will be applied to all CSS files in the project.
// => If you use multiple loaders, you can add the loader option to the rules array as shown below.
/*
    module.exports = {
      module: {
        rules: [
          { test: /\.css$/, use: 'css-loader' },
          { test: /\.ts$/, use: 'ts-loader' },
          // ...
        ]
      }
    }
*/
// => If you use multiple loaders for a specific file, be careful in the order in which they are applied. Loaders are applied from right to left by default.
/*
    module: {
     rules: [
       {
         test: /\.scss$/,
         use: ['css-loader', 'sass-loader']
       }
     ]
    }
*/
// ◽ Plugin
// : Plugin is a property that provides additional functionality to the basic behavior of a web pack.
// => Compared to the loader, the loader is involved in the process of interpreting and converting files, while the plug-in is responsible for changing the shape of the result.
// => Only object instances created with the constructor function can be added to an array of plug-ins.
/*
  // webpack.config.js
  var webpack = require('webpack');
  var HtmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = {
    plugins: [
      new HtmlWebpackPlugin(),      
      new webpack.ProgressPlugin()
    ]
  }

    // cf. HTMLWebpackPlugin : Plug-in that generates HTML files from web packs
    //     ProgressPlugin    : Plug-in to display the build progress of the web pack
*/

// + Plug-in we often use: split-chunks-plugin, clean-webpack-plugin, image-webpack-loader, webpack-bundle-analyzer-plugin


// ✅ Mode
// : The concept of 'Mode' has been added since version 4 of the web pack.
// => There are three modes of execution for a Web pack:
// ◽ none
// ◽ development
// ◽ production
// => The appearance of the web pack depends on each execution mode. In development mode, the webpack logs or outputs are more visible to developers, while in production mode, build processes such as basic file compression are added to optimize performance.
// => If you do not set a default value for mode, it is automatically set to production mode.

// ❗ When you develop a real web application with a web pack, you usually have to work in two separate cases:
// ✔ Set up a Web pack to use when developing
// ✔ Set up a Web pack to use when deploying after development

// ex. With one web pack setup file, you can apply certain settings depending on the execution mode:
// webpack.config.js
module.exports = (env) => {
  let entryPath = env.mode === 'production'
    ? './public/index.js'
    : './src/index.js';

  return {
    entry: entryPath,
    output: {},
    // ...
  }
}

// package.json
/*
{
  "build": "webpack",
  "development": "npm run build -- --env.mode=development",
  "production": "npm run build -- --env.mode=production"
}
*/
// => If you look at the code above, the way the web pack setup file is changed from object to function format.
// => In addition, the env factor handed over to the function represents an environment variable and can be passed to the execution option when running the web pack.