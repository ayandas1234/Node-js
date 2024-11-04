// a odule can't mutiple deafult object

export const a = 1 // named export
export const b = 2 // named export
export const c = 3 // named export
export const d = 4 // named export
export const e = 5 // named export
 
// creating a default object this way -->>
const obj = {
    x: 5,
    y: 7
}
export default obj; // default export


// creating a default object another way -->>
// let obj1;
// export default obj1={
//     x:5,
//     y:10
// } // default export