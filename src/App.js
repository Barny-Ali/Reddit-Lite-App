import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Search from './components/Search';
import { RedditApi } from './components/RedditApi';

function App() {
  const [results, setResults] = useState([]);

  const performSearch = async (query) => {
    const data = await RedditApi.searchReddit(query);
    if (data) {
      const posts = data.data.children.map((child) => ({
        title: child.data.title,
        url: child.data.url,
      }));
      setResults(posts);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Search onSearch={performSearch} />
      </header>
      <main>
        <h2>Search Results:</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {results.length > 0 ? (
            results.map((result, index) => (
              <li key={index} style={{ margin: '1rem 0' }}>
                <a
                  href={result.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#61dafb' }}
                >
                  {result.title}
                </a>
              </li>
            ))
          ) : (
            <p>No results yet. Try searching for something!</p>
          )}
        </ul>
      </main>
    </div>
  );
}

export default App;
