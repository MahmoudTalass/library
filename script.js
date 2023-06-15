let myLibrary = [];

function Book(title, author, pages, read) {
   this.title = title;
   this.author = author;
   this.pages = pages;
   this.read = read;
}

function addBookToLibrary() {
   const title = prompt("Whats the book title?");
   const author = prompt("Whats the name of the author?");
   const pages = prompt("How many pages?");
   const read = prompt("Have you read the book before? (yes/no)");

   myLibrary.push(new Book(title, author, pages, read));
}


