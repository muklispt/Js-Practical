// array map function 
const list =[1,2,3,4,5]
const new_item = list.map((value)=>value*value)
console.log(new_item)

// filter example 

const remove_even = list.filter((value)=>value%2==0);
console.log(remove_even)

//reduce method example 
//** reduce() processes array elements and combines them into one final result. That result can be a number, string, object, array,or another value. */ 
const numbers = [10,20,30,40]

const total = numbers.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
},0);
console.log(total)

//** how it works 
// reduce receives a callback with:
// 1. Accumulator: the result collected so far.
// 2. Current value: the item currently being processed.
// 3. Optional index and original array.*/

// shopping cart total
const cart = [
    {name:'Phone',price:20000,quantity:1},
    {name:'headphones',price:2000,quantity:2},
    {name:'Case',price:500,quantity:1},
]
const totalAmount = cart.reduce((total,item) =>{
    return total + item.price * item.quantity;
},0)
console.log(totalAmount)

// combining array methods 
// example show name of availble products below 30,000
const products = [
    {id:1,name:'Phone',price:20000,stock:5},
    {id:2,name:'Laptop',price:50000,stock:2},
    {id:3,name:'Watch',price:5000,stock:0},
    {id:4,name:'Tablet',price:25000,stock:4},
]
const result = products
.filter(product=> product.stock>0)
.filter(product=>product.price<30000)
.map(product=>product.name)

console.log(result)

//** Understand the order:
// 1. First filter(): remove products with no stock.
// 2. second filter(): keep products below 30,000. 
// 3. map(): transform the remaining product objects into names.*/