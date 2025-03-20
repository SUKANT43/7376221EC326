import React, { useState, useEffect } from "react";
import "./TopUsers.css";

const TopUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:3000/api/top-users");
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="users-container">
      <h2>Top Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.avatar} alt="User" />
            {user.name} - {user.postCount} posts
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;
