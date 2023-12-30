import React, { useState } from 'react';
import Book from '../components/Book/Book';
import BookDetail from './components/Book/BookDetail';
import SearchBar from './components/search/SearchBar';

const Home = ({ books, onBookClick, searchQuery, onSearch }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
    onBookClick(book);
  };

  return (
    <div>
      <SearchBar value={searchQuery} onChange={onSearch} onSearch={onSearch} />
      <div>
        {books.map((book) => (
          <Book key={book.id} book={book} onClick={handleBookClick} />
        ))}
      </div>
      {selectedBook && (
        <BookDetail
          book={selectedBook}
          onReadNow={(link) => window.open(link, '_blank')}
          onMoreInfo={(link) => window.open(link, '_blank')}
        />
      )}
    </div>
  );
};

export default Home;
