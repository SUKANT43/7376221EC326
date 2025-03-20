const express = require("express");
const { fetchAndSaveUsers } = require("../controllers/userController");

const router = express.Router();

router.get("/fetch-users", fetchAndSaveUsers);

module.exports = router;
