// Arrow functions 
//  An arrow function is a shorter way to write a function expression
// using the => syntax. It was introduced in ES6

// basic syntax 
const greet = (name) => name;
console.log(greet('muklis'))

// one parameter : parentheses can be omitted
const squre = number => number * number;
console.log(squre(10))

// Returning an object ; wrap the object in parentheses so javaScript treats
// it as an expression
const createUser = name => ({name,active:true});
console.log(createUser('muklis pt'))

// example with array 
const useres = ['Muklis','majid','arkam']
const userList = useres.map((name)=>({name,active:true}));
console.log(userList)

// example with object
const createUserList = (name,email) => ({
    id:1,
    name,
    email,
    active:true
});

const user1 = createUserList('Muklis pt','muklismuhammed867@gmail.com')
const user2 = createUserList('majid','majid@gmail.com')

console.log(user1)
console.log(user2)