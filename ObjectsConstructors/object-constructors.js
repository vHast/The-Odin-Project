// Write a constructor for making "Book" objects

function Book(title, author, pages, read) { // The constructor will take 4 arguments to create the new object
  this.title = title 
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function(){ // This is the syntax to add a function to the object
    return `${this.title} ${this.author} ${this.pages} ${this.read}`; // However, I'm not sure if this will be returned
  };
}

const newBook = new Book("The Hobbit", "J.R.R. Tolkien", 300, true) // We create a new Book class object with this syntax

console.log(newBook.info);