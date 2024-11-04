// when we use Common js then the automatically the modules pass into this function where everything already mentioned so what we need to do we just need to print that out

// (function(exports, require, module, __filename, __dirname) {

//     // Module code actually lives here
  
//   });

const a = require("./mymodule2.js")
// console.log(a);
console.log(a, __dirname, __filename)



// dirname -->> directory name
