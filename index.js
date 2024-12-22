function fetchBooks() {
  // Fetch the data from the Game of Thrones API and return the fetch request
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())  // Convert the response to JSON
    .then((json) => renderBooks(json));  // Pass the JSON data to renderBooks
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;  // Display the name of the book
    main.appendChild(h2);      // Append the title to the <main> element
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();  // Call fetchBooks once the DOM is loaded
});
