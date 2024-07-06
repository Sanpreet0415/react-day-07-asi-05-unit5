// App.jsx

import React, { useState } from 'react';
import NewPostForm from './NewPostForm'; // Correct import statement

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="App">
      <h1>Twitter-like Feed</h1>
      <NewPostForm onAddPost={addPost} />
      {/* Other components and elements */}
    </div>
  );
}

export default App;
