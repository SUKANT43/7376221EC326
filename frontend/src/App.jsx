import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TopUsers from "./pages/TopUsers";
import TrendingPosts from "./pages/TrendingPosts";
import Feed from "./pages/Feed";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="navbar">
        <Link to="/">Feed</Link>
        <Link to="/top-users">Top Users</Link>
        <Link to="/trending-posts">Trending Posts</Link>
      </div>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/top-users" element={<TopUsers />} />
        <Route path="/trending-posts" element={<TrendingPosts />} />
      </Routes>
    </Router>
  );
};

export default App;
