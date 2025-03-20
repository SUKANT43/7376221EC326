const express = require("express");
const { getAvg } = require("../controllers/calculatorController");
const router = express.Router();

router.post("/solution", getAvg);

module.exports = router;
