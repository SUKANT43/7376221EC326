import React, { useState, useEffect } from "react";
import "./Feed.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:3000/api/posts");
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
    const interval = setInterval(fetchPosts, 5000); // Refresh every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="feed-container">
      <h2>Real-Time Feed</h2>
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <img src={post.image} alt="Post" />
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
