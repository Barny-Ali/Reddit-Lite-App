export const RedditApi = {
  async searchReddit(query) {
    const endpoint = `https://www.reddit.com/search.json?q=${encodeURIComponent(query)}`;
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
};
