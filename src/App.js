import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import { fetchData } from './services/api';

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchData('harry potter').then((data) => setBooks((prevBooks) => [...prevBooks, ...data]));
    fetchData('sherlock holmes').then((data) => setBooks((prevBooks) => [...prevBooks, ...data]));
  }, []);

  const handleSearch = async (query) => {
    setSearchQuery(query);
    const data = await fetchData(query);
    setBooks(data);
  };

  const handleBookClick = (book) => {
    // Handle book click (expand banner, etc.)
    console.log('Book clicked:', book);
  };

  return <Home books={books} onBookClick={handleBookClick} searchQuery={searchQuery} onSearch={handleSearch} />;
};

export default App;
