// NewPostForm.jsx

import React, { useState } from 'react';

function NewPostForm({ onAddPost }) {
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Math.random().toString(36).substr(2, 9),
      content,
      author,
      timestamp: new Date().toLocaleString(),
      comments: [],
    };
    onAddPost(newPost);
    setContent('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your post..."
        required
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Your name"
        required
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default NewPostForm;
