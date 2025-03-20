const axios = require("axios");
const User = require("../models/userModel");

const fetchAndSaveUsers = async (req, res) => {
    try {
        const response = await axios.get("http://20.244.56.144/test/users");
        const users = response.data.users;

        const userArray = Object.keys(users).map(id => ({
            userId: id,
            name: users[id]
        }));

        await User.insertMany(userArray);

        res.json({ message: "Users saved successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch and save users" });
    }
};

module.exports = { fetchAndSaveUsers };
