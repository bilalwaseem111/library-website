let library = [
  { Title: "Atomic Habits", Author: "James Clear", Genre: "Self-Help", Year: 2018 },
  { Title: "The Alchemist", Author: "Paulo Coelho", Genre: "Fiction", Year: 1988 },
  { Title: "1984", Author: "George Orwell", Genre: "Dystopian", Year: 1949 },
  { Title: "Sapiens", Author: "Yuval Noah Harari", Genre: "History", Year: 2011 },
  { Title: "The Lean Startup", Author: "Eric Ries", Genre: "Business", Year: 2011 }
];

export function getLibrary() {
  return library;
}

export function addBook(book) {
  library.push(book);
}

export function updateBook(index, updatedBook) {
  library[index] = updatedBook;
}

export function deleteBook(index) {
  library.splice(index, 1);
}

