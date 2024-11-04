/*
if we want to import something that object or function should be used export keyword in the other file from where we want ot import

the syntax for import is -->> import {a} from "./mymodule.js"
import {object name / function name} from "./file name"
*/

import {a,b,d} from "./mymodule.js"
console.log(a,b,d);

// import obj1 from "./mymodule.js"
// console.log(obj1)

import obj from "./mymodule.js"
console.log(obj)

/*
in deafult object import it's not mandatory that the object should be same as when importing like it can be written also like -->>

import harry from "./mymodule.js"
console.log(harry)

here we write harry which is not the object the but iit doesn't atter cause the object is deafult so whatever name is written it doesn't matter automatically the deafult object will be called
*/