// example of import
import { add,subtract } from "./example.js";
console.log(add(10,40))
console.log(subtract(50,30))

// rename the import function name
import {app as dataPassForm} from './example.js';
console.log(dataPassForm({name:'muklis',age:23,place:'Randathani'}));