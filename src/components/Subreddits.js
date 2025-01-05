import React, { useState, useEffect } from 'react';
import { RedditApi } from './RedditApi';

function Subreddits({ onSubredditClick }) {
  const [subreddits, setSubreddits] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // State to manage accordion visibility

  const fetchSubreddits = async () => {
    const data = await RedditApi.fetchSubreddits();
    if (data) {
      const subredditList = data.data.children.map((child) => ({
        title: child.data.title,
        name : child.data.display_name,
        url: `https://www.reddit.com${child.data.url}`,
      }));
      setSubreddits(subredditList);
    }
  };

  useEffect(() => {
    fetchSubreddits();
  }, []);

  const toggleAccordion = () => {
    setIsOpen(!isOpen); // Toggle the open/close state
  };

  return (
    <div className="Subreddits-section">
      {/* Accordion Header */}
      <div className="Accordion-header" onClick={toggleAccordion}>
        <h4>Popular Subreddits</h4>
        <span className={`Accordion-arrow ${isOpen ? 'open' : ''}`}>
          {isOpen ? '▼' : '▶'}
        </span>
      </div>

      {/* Accordion Content */}
      {isOpen && (
        <ul className="Accordion-content">
          {subreddits.map((subreddit, index) => (
            <li key={index} className="Subreddit-item">
              <button
                className="Subreddit-link"
                onClick={() => onSubredditClick(subreddit.name)}
              >
                {subreddit.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Subreddits;
