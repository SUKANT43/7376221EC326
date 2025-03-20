import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Feed.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const API_URL = "http://localhost:1002/posts"; 
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log("Fetching posts from:", API_URL);
        const response = await axios.get(API_URL);
        console.log("Posts received:", response.data);

        
        const formattedPosts = response.data.map(post => ({
          ...post,
          comments: post.comments || [] 
        }));

        setPosts(formattedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error.message);
      }
    };

    fetchPosts();
    const interval = setInterval(fetchPosts, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="feed-container">
      <h2>📢 Real-Time Post Feed</h2>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <p className="post-content">📝 {post.content}</p>
            <p className="post-comments">💬 {post.comments?.length || 0} Comments</p>
          </div>
        ))
      ) : (
        <p className="no-posts">No posts available. Be the first to share something!</p>
      )}
    </div>
  );
};

export default Feed;
