export const RedditApi = {
  async searchReddit(query, { before = null, after = null } = {}) {
    const baseUrl = query.startsWith('subreddit:')
    ? `https://www.reddit.com/r/${query.replace('subreddit:', '')}/.json`
    : `https://www.reddit.com/search.json?q=${encodeURIComponent(query)}`;

    const paginationParams = [
      before ? `before=${before}` : '',
      after ? `after=${after}` : '',
    ].filter(Boolean).join('&');

    const endpoint = query.startsWith('subreddit:') ? `${baseUrl}?restrict_sr=on&${paginationParams}`:`${baseUrl}&${paginationParams}`;
    
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data from Reddit:', error);
      return null;
    }
  },
  async fetchSubreddits() {
    const endpoint = `https://www.reddit.com/subreddits/popular.json`;
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching subreddits data from Reddit:', error);
      return null;
    }
  },
};
