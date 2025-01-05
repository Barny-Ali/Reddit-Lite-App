import React, { useState } from 'react';
import Post from './Post';

function Posts({ results, pagination, onNavigate }) {
  const [paginationHistory, setPaginationHistory] = useState([]);

  const handleNavigate = async (direction) => {

    if (direction === 'next') {
      const newHistory = [...paginationHistory, { before: pagination.before, after: pagination.after }];
      setPaginationHistory(newHistory);
      await onNavigate(direction, newHistory);
    } 
    else if (direction === 'prev') {
      if (paginationHistory.length > 0) {
        const newHistory = [...paginationHistory];
        setPaginationHistory(paginationHistory.slice(0, paginationHistory.length-1));
        await onNavigate(direction, newHistory);
      }
    }
  };

  return (
    <div className="Posts-section">
      <ul>
        {results.length > 0 ? (
          results.map((result, index) => <Post key={index} post={result} />)
        ) : (
          <p>No results yet. Try searching for something!</p>
        )}
      </ul>
      <div className="Pagination-controls">
        <button
          onClick={() => handleNavigate('prev')}
          disabled={paginationHistory.length === 0}
        >
          Previous
        </button>
        <button
          onClick={() => handleNavigate('next')}
          disabled={!pagination.after}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Posts;
