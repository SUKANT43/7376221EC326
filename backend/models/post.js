const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    userid: { type: Number, required: true },
    content: { type: String, required: true }
});

module.exports = mongoose.model("Post", PostSchema);
