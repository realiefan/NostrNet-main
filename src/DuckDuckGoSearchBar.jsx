import React, { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-column  items-center">
      <input
        type="text"
        name="q"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search on Web"
        className="input-style"
      />
      <button
        type="submit"
        className="px-2 py-1 bg-blue-700 mx-2 rounded text-xs font-medium text-white hover:bg-blue-800 focus:outline-none"
        style={{ display: 'none' }}
      >
        Search
      </button>
    </form>
  );
};

const DuckDuckGoSearchBar = () => {
  const handleSearchSubmit = (query) => {
    window.location.href = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
  };

  return (
    <div className="flex items-center justify-center rounded">
      <SearchForm onSubmit={handleSearchSubmit} />
    </div>
  );
};

export default DuckDuckGoSearchBar;
