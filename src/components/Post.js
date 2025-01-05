import React, { useState } from 'react';

function Post({ post }) {

  return (
    <li className='Post-item'>
      <div className='Post-header'>
      <div className='Post-thumbnail-img'>
        {post.thumbnail && post.thumbnail.startsWith('http') && (
          <img
            src={post.thumbnail}
            alt={post.author}
          />
        )}
        </div>

        <h4>{post.title}</h4>

      </div>
      {post.url && post.url.startsWith('http') && !post.is_self && (
        
      <div className='Post-media'>
        {post.domain && post.domain === 'i.redd.it' && post.url ? (
          <img
            src={post.url.replace(/&amp;/g, '&')}
            alt="Post media"
          />
        ) : post.domain && post.domain === 'v.redd.it' && post.secure_media ? (
          (() => {
            const secureMedia = post.secure_media;
        
            if (secureMedia && secureMedia.reddit_video) {
              const videoUrl = secureMedia.reddit_video.fallback_url;
              const hlsUrl = secureMedia.reddit_video.hls_url;
        
              return (
                <video controls>
                  <source src={hlsUrl} type="application/vnd.apple.mpegurl" />
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              );
            } else {
              return <p>No video available</p>;
            }
          })()
        ) : post.url.includes('gallery') && post.gallery_data && post.gallery_data.items && post.gallery_data.items.length > 0 && post.media_metadata ? (
          post.gallery_data.items.map((item, index) => {
            // Find the media metadata that matches the media_id
            const mediaMeta = post.media_metadata[item.media_id];
            const imageUrl = mediaMeta ? mediaMeta.s.u.replace(/&amp;/g, '&') : ''; 
            return (
              imageUrl ? (
                <img
                  key={index}
                  src={imageUrl}
                  alt={`Gallery image ${index + 1}`}
                />
              ) : (
                <p key={index}>Image not found</p> // Fallback if imageUrl is not available
              )
            );
          })
        ) : post.is_self ? (
          <p>No media available for this post</p>
        ) : post.post_hint && post.post_hint.includes('link') ? (
          <div className='Post-link'>
            <img
              src={post.thumbnail}
              alt={post.author}
            />
            <a href={post.url.replace(/&amp;/g, '&')} target="_blank" rel="noopener noreferrer">
              Open Link
            </a>
          </div>
        ) : (
          <p>Unsupported media type</p>
        )}
      </div>

      )}
      <div className='Post-details'>

        {post.selftext && <p>{post.selftext.replace(/&amp;/g, '&').replace(/&gt;/g, ">")}</p>}
        <small>{new Date(post.created * 1000).toLocaleString()}</small>
        <p><strong>Subreddit:</strong> {post.subreddit}</p>
        <p><i className='fa fa-arrow-up'></i> {post.ups} <i className='fa fa-arrow-down'></i> &emsp;  <i className='fa fa-user'></i> {post.author} </p>
        
        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="Reddit-button"
        >
          Visit Source
        </a>
      </div>
    </li>
  );
}

export default Post;
