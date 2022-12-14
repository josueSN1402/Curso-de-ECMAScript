// arrays destructuring

let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, b);
console.log(a, fruits[1]);



// Object destructuring

let user = { username: "Alexa", age: 34 };
let { username, age } = user;
console.log(username, age);
console.log(username, user.age);


const person = {
  lasName: "Ccoyllo",
  age: 25,
  country: "PE",
};

console.log(person);
const { lasName, age, country } = person;

console.log(`My name is  ${lasName}, 
I have ${age}. I am from ${country}`);




// spread operator

let person = {name: 'Oscar', age: 28}
let country = 'MX';

let data = {...person, country};
console.log(data);

// Para strings
const array = [ ..."Hola"]    // [ 'H', 'o', 'l', 'a' ]

// En arrays
const otherArray = [ ...array]   //[ 'H', 'o', 'l', 'a' ]



// rest

function sum(num, ...values){
	console.log(values);
	console.log(num + values[0]);
	return num + values [0];
}

sum(2,3,4,5);