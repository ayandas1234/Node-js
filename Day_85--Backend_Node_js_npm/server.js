// to create package.jon we use the command "npm init" and give some details

// to intall slugify package we write "npm i slugify" or "npm install slugify" 

// after installing slugify it automatically add to the package.json file under the "dependencies"

// every package is store under node_modules automatically , sometimmes it's holds further package dependencies

// suppose by chance node modules folder got deleted then we justt need to simply write "npm install" or "npm i"

console.log("hello world");

var slugify = require('slugify')
// var slugify = require('slugify') --> is a way to use the slugify package from NPM to convert a string into a URL-friendly slug

let a = slugify('some string') // some-string
console.log(a)

// if you prefer something other than '-' as separator
const b = slugify('some st&&*(^%$$^^&ring', '_')  // some_string
console.log(b)
