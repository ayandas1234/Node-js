import fs from "fs/promises"

let a = await fs.readFile("harry.txt")

let b = await fs.appendFile("harry.txt", "\n\n\n\nthis is amazing promise")
console.log(a.toString(),b)

// iside a module we directly access the await function