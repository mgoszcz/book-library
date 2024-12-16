import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BooksContext } from "../BooksContext";

export default function Books() {
  const query = new URLSearchParams(useLocation().search); // site.com/?search=book - it will get items after ?
  const search = query.get("search") || "";
  const books = useContext(BooksContext);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {}, []);

  return (
    <div>
      <h1>All Books</h1>
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
