import React from 'react';

const BookDetail = ({ book, onReadNow, onMoreInfo }) => {
  return (
    <div>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
      <h2>{book.volumeInfo.title}</h2>
      <p>{book.volumeInfo.description}</p>
      <button onClick={() => onReadNow(book.volumeInfo.previewLink)}>Read Now</button>
      <button onClick={() => onMoreInfo(book.volumeInfo.infoLink)}>More Info</button>
    </div>
  );
};

export default BookDetail;
