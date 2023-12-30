import React from 'react';

const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Books"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
