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

function EighthGrader(name) {
  this.name = name,
  this.grade = 8
}

EighthGrader.prototype = Object.create(Student.prototype)

const carl = new EighthGrader("carl")
carl.sayName() // Carl
console.log(carl.grade) // 8