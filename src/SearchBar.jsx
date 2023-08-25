import React, { useState } from 'react';

const SearchBar = ({ setSearchTerm }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    setSearchTerm(searchText);
  };

  return (
    <div>
      <input
        type="search"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <button type='button' onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
