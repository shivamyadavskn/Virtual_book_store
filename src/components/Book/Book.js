import React from 'react';

const Book = ({ book, onClick }) => {
  return (
    <div onClick={() => onClick(book)}>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
      <p>{book.volumeInfo.title}</p>
    </div>
  );
};

export default Book;
