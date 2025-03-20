const express = require("express");
const router = express.Router();
const Post = require("../models/post");

router.get("/", async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch posts" });
    }
});

router.post("/", async (req, res) => {
    try {
        await Post.insertMany(req.body.posts);
        res.status(201).json({ message: "Posts added successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to add posts" });
    }
});

module.exports = router;
