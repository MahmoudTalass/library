let myLibrary = [];

// Books container
const booksContainer = document.querySelector("#books-container");
// Button to display the modal with the add book form
const displayBookFormBtn = document.querySelector("#display-book-form");
// Form Modal element
const formModal = document.querySelector("#form-modal");
// Form element inside the modal
const addBookForm = document.querySelector("#add-book-form");

// Form input elements
const titleInput = document.querySelector("#title-input");
const authorInput = document.querySelector("#author-input");
const pageInput = document.querySelector("#page-input");
const readStatusInput = document.querySelector("#read-status-input");

const totalBooksNumDisplay = document.querySelector("#total-books-num");
let totalBooksNum = 0;
let currentId = 0;

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

// Book constructor
function Book(title, author, pages, read) {
   this.title = title;
   this.author = author;
   this.pages = pages;
   this.read = read;
   this.id = currentId++;

   totalBooksNum++;
}

// Display the books currently available in the myLibrary when page loads
displayBooks();

// Add new book at submit of add new book form
addBookForm.addEventListener("submit", (e) => {
   e.preventDefault();

   addBookToLibrary();

   formModal.style.display = "none";
});

displayBookFormBtn.addEventListener("click", () => {
   formModal.style.display = "block";
});

window.addEventListener("click", (e) => {
   if (e.target == formModal) {
      formModal.style.display = "none";
   }
});

// This function captures the input values from the add new book form
// and adds the new book to the library and displays it
function addBookToLibrary() {
   const newBookTitle = titleInput.value;
   const newBookAuthor = authorInput.value;
   const newBookPageCount = pageInput.value;
   const readStatus = readStatusInput.checked;

   myLibrary.push(
      new Book(newBookTitle, newBookAuthor, newBookPageCount, readStatus)
   );

   displayNewBook(myLibrary[myLibrary.length - 1]);

   titleInput.value = "";
   authorInput.value = "";
   pageInput.value = "";
   readStatusInput.value = "";
}

// This function creates the book card based on the 'book' parameter info
function displayNewBook(book) {
   const bookCard = document.createElement("div");
   bookCard.classList.add("book-card");
   bookCard.dataset.bookId = book.id;

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
      bookReadStatus.textContent = "Completed";
   } else {
      bookReadStatus.textContent = "In Progress";
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
   removeBookBtn.id = "remove-book-btn";
   removeBookBtn.textContent = "Remove";

   const changeReadStatusBtn = document.createElement("button");
   changeReadStatusBtn.setAttribute("type", "button");
   changeReadStatusBtn.classList.add("change-read-status-btn");
   if (book.read) {
      changeReadStatusBtn.textContent = "Read";
   } else {
      changeReadStatusBtn.textContent = "Not Read";
   }

   changeReadStatusBtn.addEventListener("click", () => {
      book.changeReadStatus();
      if (book.read) {
         changeReadStatusBtn.textContent = "Read";
         bookReadStatus.textContent = "Completed";
      } else {
         changeReadStatusBtn.textContent = "Not Read";
         bookReadStatus.textContent = "In Progress";
      }
   });

   bookCardControls.appendChild(removeBookBtn);
   bookCardControls.appendChild(changeReadStatusBtn);

   bookCard.appendChild(bookCardControls);

   booksContainer.appendChild(bookCard);
   totalBooksNumDisplay.textContent = totalBooksNum;

   // Remove book card event listener
   removeBookBtn.addEventListener("click", (e) => {
      removeBookCard(e);
      totalBooksNumDisplay.textContent = totalBooksNum;
   });
}

// prototype function to make change to read status of book objects
Book.prototype.changeReadStatus = function () {
   if (this.read) {
      this.read = false;
   } else {
      this.read = true;
   }
};

// This function removes a book card
function removeBookCard(e) {
   const bookCard = e.target.closest(".book-card");

   // Convert the retrieved data-book-id into an integer
   const bookId = parseInt(bookCard.dataset.bookId);

   // Find the index of the book that shares the same id as the clicked 
   // on card with the data-book-id
   const bookIndex = myLibrary.findIndex(
      (currentBook) => currentBook.id === bookId
   );

   if (bookIndex != -1) {
      myLibrary.splice(bookIndex, 1);
   }

   booksContainer.removeChild(bookCard);
   totalBooksNum--;
}

// This function displays all the book cards when the page loads.
function displayBooks() {
   myLibrary.forEach((book) => {
      displayNewBook(book);
   });
}
