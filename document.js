// ✅ Webpack
// : module-bundler which is used by front-end framework.
// => 'Module Bundler' refers to a tool that sees all the resources that make up a Web application (HTML, CSS, Javscript, Images, etc.) as individual modules 
// => .. and combines them to create a single merged output.
// => 'Modules' are small units of code that have specific functions from a programming perspective.


// ✅ Reasons why we need webpack
// 1. Manage JavaScript Modules in File Units 
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
