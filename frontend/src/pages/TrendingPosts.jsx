import React, { useState, useEffect } from "react";
import "./TrendingPosts.css";

const TrendingPosts = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    const fetchTrendingPosts = async () => {
      const response = await fetch("http://localhost:3000/api/trending-posts");
      const data = await response.json();
      setTrendingPosts(data);
    };

    fetchTrendingPosts();
  }, []);

  return (
    <div className="trending-container">
      <h2>Trending Posts</h2>
      {trendingPosts.map((post) => (
        <div key={post.id} className="post-card">
          <img src={post.image} alt="Trending" />
          <p>{post.content}</p>
          <p>Comments: {post.commentCount}</p>
        </div>
      ))}
    </div>
  );
};

export default TrendingPosts;
