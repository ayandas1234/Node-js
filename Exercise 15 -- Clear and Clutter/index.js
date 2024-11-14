// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf

// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip

import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "D:/harry/Backend/Node js/Exercise 15 -- Clear and Clutter"

let files = await fs.readdir(basepath)

for (const item of files) {
    console.log("running for ", item)
    let ext = item.split(".")[item.split(".").length - 1]
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {


        if (fsn.existsSync(path.join(basepath, ext))) {
            // Move the file to this directory if its not a js or json file
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
        else {
            fs.mkdir(ext)
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }

}


/*
1.) The fs.readdir() method in Node.js is part of the fs (File System) module. It is used to asynchronously read the contents of a directory. It returns an array of file and folder names within the specified directory.

2.) let ext = item.split(".")[item.split(".").length - 1];

Purpose: Extracts the file extension from the current item (e.g., if item is example.txt, the extension txt is extracted).

ext Extraction:
Splits the file name (item) by . and extracts the last part (the file extension).
Example:
example.txt → ["example", "txt"] → ext = "txt"
script.js → ["script", "js"] → ext = "js

Logic:
item.split("."): Splits the file name into parts separated by dots, resulting in an array (e.g., ["example", "txt"]).

item.split(".").length - 1: Finds the index of the last part in the array (the file extension).

item.split(".")[item.split(".").length - 1]: Accesses the last part (the extension).


3.) if (fsn.existsSync(ext)) {
    //Move the files to the directory
}

Purpose: Checks if a directory with the name of the file extension (ext) already exists in the current working directory using fs.existsSync.

If true: The directory already exists, so the intention is to move the file to that directory.

If false: The directory does not exist, so a new directory will be created.


4.) else {
    fs.mkdir(ext);
}
Purpose: Creates a new directory with the name of the file extension (ext) using fs.mkdir.

5.) if (fsn.existsSync(path.join(basepath, ext))) {
fsn.existsSync: Synchronously checks if a directory with the name of the file's extension (ext) exists inside the basepath.

Example:
Checks if D:/harry/Backend/Node js/Exercise 15 -- Clear and Clutter/txt exists.

Example:
If basepath = "D:/harry/Backend/Node js/Exercise 15 -- Clear and Clutter" and ext = "txt", then path.join(basepath, ext) evaluates to: -->> "D:/harry/Backend/Node js/Exercise 15 -- Clear and Clutter/txt"

D:/harry/Backend/Node js/Exercise 15 -- Clear and Clutter/
    example.txt
    script.js


6.) fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
Purpose: Moves the file into the directory named after its extension (ext).
path.join(basepath, item): Full path to the current file.

Example: D:/harry/Backend/Node js/Exercise 15 -- Clear and Clutter/example.txt.
path.join(basepath, ext, item): Full path to the destination file.
Example: D:/harry/Backend/Node js/Exercise 15 -- Clear and Clutter/txt/example.txt.

7.) else {
    fs.mkdir(ext);
    fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
}
fs.mkdir(ext): Creates a new directory named after the file’s extension if it doesn’t already exist.

Issue: The path is incomplete. You must provide the full path using path.join(basepath, ext).

File Move: After creating the directory, moves the file into it.



8.) if (ext != "js" && ext != "json" && item.split(".").length > 1)
ext != "js"
Checks if the file extension is not "js".
Files with the .js extension are skipped and not moved or organized.

ext != "json"
Checks if the file extension is not "json".
Files with the .json extension are skipped and not moved or organized.

item.split(".").length > 1
Checks if the file name contains at least one ..
This ensures that the file has an extension.
Example:
"example.txt" → ["example", "txt"] → length = 2 → Passes.
"script" → ["script"] → length = 1 → Fails.


Practical Examples
Case 1: example.txt
ext = "txt"
ext != "js" → true
ext != "json" → true
item.split(".").length > 1 → true
Result: The file is processed.

Case 2: script.js
ext = "js"
ext != "js" → false
Result: The file is skipped.

Case 3: config.json
ext = "json"
ext != "json" → false
Result: The file is skipped.

Case 4: README
ext = "README" (since split(".").length = 1)
item.split(".").length > 1 → false
Result: The file is skipped.
*/
