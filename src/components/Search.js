import React, { useState } from 'react';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Handle input changes
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim()); 
    }
  };

  return (
    <div className="Search-section">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search Reddit"
        />
        <button type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
