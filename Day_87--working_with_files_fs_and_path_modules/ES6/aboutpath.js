import path from "path"

let myPath = "D:\\harry\\Backend\\Day 87 -- working with files fs and path modules\\ES6\\harry.txt"
console.log(path.extname(myPath))

console.log(path.dirname(myPath))
console.log(path.basename(myPath))

console.log(path.join("C:/", "programs\\harry.txt"))