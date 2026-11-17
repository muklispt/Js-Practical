// basic extraction
const [num1,num2] = [10,20];
console.log(num1,num2)// 10 and 20

// swapping variable
let a = 1, b =2;
[a,b] = [b,a]; // a = 2, b=1


// array destructuring example
const colors = ['red','yellow','rose','green'];
const [first,second,third,forth] = colors;
console.log(first,forth)// red green

// skip an item with an empty position 

const [one,,three] = colors;
console.log(three) // rose

// obj destructuring example
const user={
    name : 'muklis pt',
    age:22,
    place:'Randathani',
}
const {name,age} = user;
console.log(`My name is ${name} ${age} years old`)

// rename object variable in destructuring 
const {name:username,age:year} = user;
console.log(username,year);

// default values 
const {role="Developer"} = user
console.log(role)

// nested destructuring example 
const employee = {
    name:'Muklis',
    address:{
        city:'Malappuram',
        country:"India",
    },
};

const {address:{city:village}} = employee;
console.log(village)

// function parameter destructuing 
function showUser({name,age}){
    console.log(`${name} is ${age} years old`);
}
showUser({name:'muklis',age:22})

// arrow function paremater destructuring 
const greet = ({name,age}) => console.log(`${name} is ${age} years old`);


// Spread operator copy an array
const number = [1,2,3,];
const copiedNumbers = [...number]
console.log(copiedNumbers)

