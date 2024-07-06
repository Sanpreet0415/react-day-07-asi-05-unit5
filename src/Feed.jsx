// Feed.jsx

import React from 'react';

function Feed({ posts }) {
  return (
    <div className="feed">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <p>{post.content}</p>
          <p>By: {post.author}</p>
          {/* Additional post details and functionality */}
        </div>
      ))}
    </div>
  );
}

export default Feed; // Exporting the Feed component as default
