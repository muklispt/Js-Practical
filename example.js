// import and export statements
//**  JavaScript modules let you split code into separate files. export makes selected 
// values available to other modules; import brings those values into a file. */

// example of export
export const add = (a,b) => a+b;
export const subtract = (a,b) => a-b;

export function app({name,age,place}){
    return `I'm ${name} ${age} years old. I'm from ${place}`
}

// A file can have only one default export
const creatUser = (name,age,place) => {
    return {
        name,
        age,
        place
    };
};

export default creatUser;

// notice that we don't use curly braces for a default import.
// export default can also choose a different local import name such as sample('muklis',22,'Randathani')

import {products,getProductName} from "./deful.js";
import getTotalProducts from "./deful.js";
console.log(products)
console.log(getProductName())
console.log(getTotalProducts())