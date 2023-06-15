let myLibrary = [];
const booksContainer = document.querySelector("#books-container");
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
myLibrary.push(new Book("The 48 Laws of Power", "Robert Greene", 452, false));

function Book(title, author, pages, read) {
   this.title = title;
   this.author = author;
   this.pages = pages;
   this.read = read;
}

displayBooks();

function addBookToLibrary() {
   const title = prompt("Whats the book title?");
   const author = prompt("Whats the name of the author?");
   const pages = prompt("How many pages?");
   const read = prompt("Have you read the book before? (yes/no)");

   myLibrary.push(new Book(title, author, pages, read));
   displayBooks();
}

function displayBooks() {
   myLibrary.forEach((book) => {
      const bookCard = document.createElement("div");
      bookCard.classList.add("book-card");

      const bookInfo = document.createElement("div");
      bookInfo.classList.add("book-info");

      const bookTitle = document.createElement("p");
      bookTitle.classList.add("book-title");
      bookTitle.textContent = book.title;

      const bookAuthor = document.createElement("p");
      bookAuthor.classList.add("book-author");
      bookAuthor.textContent = `By ${book.author}`;

      const bookPageCount = document.createElement("p");
      bookPageCount.classList.add("book-page-count");
      bookPageCount.textContent = `Pages: ${book.pages}`;

      const bookReadStatus = document.createElement("p");
      bookReadStatus.classList.add("book-read-status");
      if (book.read) {
         bookReadStatus.textContent = "Read";
      } else {
         bookReadStatus.textContent = "Not Read";
      }

      bookInfo.appendChild(bookTitle);
      bookInfo.appendChild(bookAuthor);
      bookInfo.appendChild(bookPageCount);
      bookInfo.appendChild(bookReadStatus);

      bookCard.appendChild(bookInfo);

      const bookCardControls = document.createElement("div");
      bookCardControls.classList.add("book-card-controls");

      const removeBookBtn = document.createElement("button");
      removeBookBtn.setAttribute("type", "button");
      removeBookBtn.classList.add("remove-book-btn");
      removeBookBtn.textContent = "Remove";

      const changeReadStatusBtn = document.createElement("button");
      changeReadStatusBtn.setAttribute("type", "button");
      changeReadStatusBtn.classList.add("change-read-status-btn");
      if (book.read) {
         changeReadStatusBtn.textContent = "Read";
      } else {
         changeReadStatusBtn.textContent = "Not Read";
      }

      bookCardControls.appendChild(removeBookBtn);
      bookCardControls.appendChild(changeReadStatusBtn);

      bookCard.appendChild(bookCardControls);

      booksContainer.appendChild(bookCard);
   });
}
