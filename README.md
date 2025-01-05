# Reddit Lite App

## Overview

Reddit Lite App is a lightweight and user-friendly application that allows users to explore Reddit posts and subreddits seamlessly. With powerful search and browsing capabilities, users can view detailed post content, including images, videos, gifs, and article links. All data is fetched in real-time using the Reddit JSON API.

## Features

- **Search for Posts**: Search for specific posts across Reddit.
- **Browse Subreddits**: Navigate through various subreddits to explore different topics.
- **View Post Details**: Access in-depth details of each post, including media and metadata.
- **Media Support**:
  - Display images, videos, and gifs directly in the app.
  - View article links in an external browser.
- **Real-Time Data Fetching**: Fetches up-to-date information from the Reddit JSON API for a seamless experience.

## Technologies Used

- **React**: For building the user interface.
- **React Router**: For managing navigation and routes.
- **Reddit JSON API**: To fetch post and subreddit data.
- **CSS/SCSS**: For styling the application.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/barny-ali/Reddit-Lite-App.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Reddit-Lite-App
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

## Deployment

The app is deployed via GitHub Pages. To deploy your changes:

1. Build the app:

   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:

   ```bash
   npm run deploy
   ```

3. Access the deployed app at:

   ```
   https://barny-ali.github.io/Reddit-Lite-App/
   ```

## How to Use

1. **Search for Posts**: Enter keywords in the search bar to find relevant posts.
2. **Browse Subreddits**: Use the navigation menu to explore various subreddits.
3. **View Media**:
   - Images are displayed directly in posts.
   - Videos and gifs are playable within the app.
   - Article links redirect to the respective external sites.
4. **Post Details**: Click on any post to view detailed content and metadata.

## API Reference

The app uses the Reddit JSON API for data:

- Base URL: `https://www.reddit.com`
- Endpoints used:
  - `/search.json`: For searching posts.
  - `/r/{subreddit}.json`: For subreddit content.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Reddit for providing the JSON API.
- React community for their excellent tools and support.

---

Explore Reddit like never before with Reddit Lite App! 🚀

