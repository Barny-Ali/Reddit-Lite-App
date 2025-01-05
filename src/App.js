import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef   } from 'react';
import Search from './components/Search';
import { RedditApi } from './components/RedditApi';
import Posts from './components/Posts';
import Subreddits from './components/Subreddits';

function App() {
  const [results, setResults] = useState([]);
  const [pagination, setPagination] = useState({ before: null, after: null, query: '' });
  const postsRef = useRef(null);

  useEffect(() => {
    handleSubredditClick("Home"); // Corrected to "Home"
  }, []);

  const performSearch = async (query, direction = null, paginationHistory = []) => {
    let { before, after } = pagination;

    if (direction === 'prev' && paginationHistory.length > 0) {
      const lastEntry = paginationHistory.pop(); 
      before = lastEntry.before;
      after = lastEntry.after;
    } else if (direction === 'next' && pagination.after) {
      before = pagination.before;
      after = pagination.after;
    }

    const data = await RedditApi.searchReddit(query, {
      before: direction === 'prev' ? after : null,
      after: direction === 'next' ? after : null,
    });

    if (data) {
      console.log(data);
      const posts = data.data.children.map((child) => ({
        title: child.data.title,
        url: child.data.url,
        thumbnail: child.data.thumbnail,
        author: child.data.author,
        subreddit: child.data.subreddit_name_prefixed,
        ups: child.data.ups,
        created: child.data.created,
        selftext: child.data.selftext || '',
        domain: child.data.domain,
        gallery_data: child.data.gallery_data,
        media_metadata: child.data.media_metadata,
        secure_media: child.data.secure_media,
        is_self: child.data.is_self,
        post_hint: child.data.post_hint,
      }));

      setPagination({
        before: data.data.before || after, 
        after: data.data.after || after,
        query,
      });
      setResults(posts);
    }

    postsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubredditClick = (subreddit) => {
    performSearch(`subreddit:${subreddit}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>RedditLite</h3>
        <Search onSearch={(query) => performSearch(query)} />
      </header>
      <main className="App-body">
        <Subreddits onSubredditClick={handleSubredditClick} />
        <div ref={postsRef}  className="App-body">
        <Posts
          results={results}
          pagination={pagination}
          onNavigate={(direction, paginationHistory) =>
            performSearch(pagination.query, direction, paginationHistory)
          }
        />
        </div>
      </main>
    </div>
  );
}

export default App;
