const express = require("express");
const { getAvg,getAll} = require("../controllers/calculatorController");
const router = express.Router();

router.post("/solution", getAvg);
router.get('/get-all',getAll)

module.exports = router;
