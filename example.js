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