// Write a constructor for making "Book" objects

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function(){
    return this.title , this.author, this.pages, this.read
  };
}

const newBook = new Book("The Hobbit", "J.R.R. Tolkien", 300, true)

console.log(newBook.info);