// declaracion de una clase
class User {};
// genera una instancia
// const newUser = new User ();

class user {
 // metodos
    greeting() {
        return "hello";
    }
};

const gndx = new user();
console.log(gndx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

// constructor

class user { 
    constructor() {
        console.log("Nuevo usuario");
    }
    greeting() {
        return "hello";
    }
}

const david = new user();

// this

class user {
    constructor(name) {
        this.name = name;
    }
    // metodos
    speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user("Ana");
console.log(ana.greeting());

// setters getters

class user {
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    // metodos
    speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const bebeloper1 = new user ("David", 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);




class Calculator {
    // Constructor
    constructor() {
        // Atributos
        this.valueA = 0
        this.valueB = 0
    }
    
    // Método
    suma(num1, num2){
        this.valueA = num1
        this.valueB = num2
        return this.valueA + this.valueB
    }
}

// Instancia
const calculadora = new Calculator()

calculadora.suma(2,2) //4