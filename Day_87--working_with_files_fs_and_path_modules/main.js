const fs = require("fs")
// const fs = require("fs/promises")

console.log(fs);

console.log("starting")
// fs.writeFileSync("harry.txt", "Harry is a good boy")

fs.writeFile("harry2.txt", "Harry is a good boy2", ()=>{
    console.log("done")
    fs.readFile("harry2.txt", (error, data)=>{
        console.log(error, data.toString())
    })
})

fs.appendFile("harry.txt", "harryrobo", (e, d)=>{
    console.log(d)
})


console.log("ending")

// writeFileSync() method is a synchronous method. It creates a new file if the specified file does not exist. Also, the 'readline-sync' module is used to enable user input at runtime.

/*
The fs.writeFile() method is a built-in function in Node.js used to write data to a file. It allows you to create a new file or overwrite an existing file with specified content. This function is part of the fs (File System) module, which provides an extensive API for working with the file system in Node.js.

Syntax:
fs.writeFile( file, data, options, callback )
*/

//  the key difference between the two functions: "writeFile" is asynchronous, while "writeFileSync" is synchronous.

// here "writeFile" will be scheduled to create harry2.txt file means it will work in background parallely and if there is any other operation need to be done that will be done first and then when the harry2.txt file creation will be complete it will show done

/*
    fs.readFile("harry2.txt", (error, data)=>{
        console.log(error, data.toString())
    })

    The readFile() method allows you to read the contents of a file asynchronously,

    syntax -->> fs.readFile( file_path, content, callback_function )

    to read the content inside the file we need also toString() method which make the content as string

    The toString() method returns a string as a string.

    The toString() method does not change the original string.

    The toString() method can be used to convert a string object into a string.
*/

/*
The fs.appendFile() method is used to asynchronously append the given data to a file. 
Syntax:-
fs.appendFile( path, data[, options], callback )
fs.appendFile("harry.txt", "harryrobo", (e, d)=>{
    console.log(d)
})
*/