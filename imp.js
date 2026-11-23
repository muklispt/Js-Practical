// example of import
import { add,subtract } from "./example.js";
console.log(add(10,40));
console.log(subtract(50,30));

// rename the import function name
import {app as dataPassForm} from './example.js';
console.log(dataPassForm({name:'muklis',age:23,place:'Randathani'}));

// defult export example import
import sample from "./example.js";
console.log(sample('Arina',22,'America'));
console.log(sample('majid',20,'Kottakkal'));


