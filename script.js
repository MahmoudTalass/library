let myLibrary = [];

// Pre-made books

myLibrary.push(new Book("The Odyssey", "Homer", 541, true));
myLibrary.push(
   new Book(
      "Harry Potter and the Chamber of Secrets",
      "J. K. Rowling",
      341,
      false
   )
);
myLibrary.push(
   new Book(
      "A Dance with Dragons (A Song of Ice and Fire)",
      "George R. R. Martin",
      1152,
      false
   )
);

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
