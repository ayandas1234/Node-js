// in node js to making modules there are two types first one is Commonjs and secondone is ECMAscript ES6 Modules

// to create package.jon we use the command "npm init" and give some details but if we want to skip the details then we write "npm init -y"

// we can together install multiply modules like "npm i express jsonwebtoken dotenv"

// To stop a running server in Visual Studio Code, navigate to the terminal where the server is running and press Ctrl + C

// using nodemon package install we can easily anything in thee server and the automatically restart and we don't need to restart it manually , the command is for installing nodemon is -->> "npm install -global nodemon" or "npm install -g nodemon"


//   res.setHeader('Content-Type', 'text/plain'); -->> this shows the content on the browser as the plain text cause,, of 'text/plain'

// res.setHeader('Content-Type', 'text/html'); -->> this shows the as html figures or based on the html syntax cause,, of 'text/html'

// const { createServer } = require('node:http'); -->> to import any module we use require keyword and here we import http module 

// when we import any module through "require()" keyword then it is known as using "Commonjs" we are importing modules


// in package.json file comments are not allowed and by deafult package.json "type" is "Commonjs" but we can change it to the "module" which is mmodern ECMAscript ES6 module and this module follows asynchronous nature where as "Commonjs" follows the synchronous nature nature means one by one block

// when we change the module type in "module" then we can't use "rquire" keyword for import, it will give erroer and stop the server

// in "type":"module" type we have to import like this -->> import http from "http"



/* Example of Commonjs server Running -->> */

// const { createServer } = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
// //   res.setHeader('Content-Type', 'text/plain');
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });







/* Example - 1 of ES6 server Running -->> */
// import * as http from 'http'; 

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello World!');
// });

// server.listen(3000, () => {
//     console.log('Server running on port 3000');
// });





/* Example - 2 of ES6 server Running -->> */

// import * as http from 'http';
// import http from "http"
import * as http from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/*
All the import statements are same --->>
1. import * as http from 'http';
2. import http from "http"
3. import * as http from 'node:http'; 
 */