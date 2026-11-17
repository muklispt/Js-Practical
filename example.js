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