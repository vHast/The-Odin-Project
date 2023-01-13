// Write a constructor for making "Book" objects

function Book(title, author, pages, read) { // The constructor will take 4 arguments to create the new object
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function(){ // This is the syntax to add a function to the object
    return `${this.title} ${this.author} ${this.pages} ${this.read}`; // However, I'm not sure if this will be returned, it still isn't returned
  };
}

const newBook = new Book("The Hobbit", "J.R.R. Tolkien", 300, true) // We create a new Book class object with this syntax

console.log(newBook.info);
newBook.info()

// Inheritance and Prototype

function PrintStuff(myDocuments) { // This is a constructor
  this.documents = myDocuments;
}

// We add the print() method to PrintStuff prototype property so that other instances(objects) can inherit

PrintStuff.prototype.print = function() {
  console.log(this.documents)
}

// Create a new object with the PrintStuff() constructor, thus allowing this new object to inherit PrintStuff's properties and methods

const newPrinter = new PrintStuff("Umbrella document");
newPrinter.print()

// newPrinter now has .print() function and uses PrintStuff as constructor

// Constructor

function Account() { // Constructor
}

var userAccount = new Account(); // Creates a new instance of Account named userAccount
console.log(userAccount) // Logs the object 
console.log(userAccount.constructor) // Shows the constructor of the object

// ** Prototype attribute of Objects created with a Constructor function **

function NewerAccount() {
};

var userAccount = new NewerAccount();
var userAccount = {name: "Mike"};

// Constructor initialization

function Student(name, grade) {
  this.name = name
  this.grade = grade
}

// These instances are added after the constructor, all the prototypes will inherit these functions

Student.prototype.sayName = function() {
  console.log(this.name)
}

Student.prototype.goToProm = function() {
  console.log("Eh.. go to prom?")
}

// Recommended Method for Prototypal Inheritance

function Student() {
  // Constructor
}

Student.prototype.sayName = function() {
  console.log(this.name) 
}

function EighthGrader(name) { // New constructor
  this.name = name,
  this.grade = 8
}

EighthGrader.prototype = Object.create(Student.prototype) //EightGrader inherits all the properties from Student

const carl = new EighthGrader("carl")
carl.sayName() // Carl
console.log(carl.grade) // 8 , this is a property that was previously available in the Student constructor

// * Write an object constructor and instantiate the object *

function Animal() {
  this.legs = 4
};

let rabbit = new Animal();
console.log(rabbit.legs)

// * Describe what a prototype is and how it can be used *

// Is a special type of enumerable object to which additional properties can be attached to which will be shared across all the instances of it's constructor function

Animal.prototype.race = "Husky";

// We have added the race to the rabbit var while creating a new property on the Animal constructor

console.log(rabbit.race)

// * Prototypal inheritance *

// With this example we determine the prototypal inheritance

let anotherAnimal = {
  eats: true,
  walk() {
    // Empty function
  }
}

let anotherRabbit = {
  __proto__ : anotherAnimal, //We set the prototype as anotherAnimal
};

anotherRabbit.walk = function() {
  console.log("Rabbit! Bounce-bounce"); // We modify the method
}

anotherRabbit.walk(); // The modified method is the one that lasts

//However, with the __proto__ attribute we set its prototype as the one we desire, this one is a legacy attribute and should not be used