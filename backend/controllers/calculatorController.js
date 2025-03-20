const db = require('../models/averageModel');

const getAvg = async (req, res) => {
  try {
    const { numbers } = req.body;

    if (!Array.isArray(numbers)) {
      return res.status(400).json({ err: "enter only numbers" });
    }

    if (numbers.length == 0) {
      return res.status(400).json({ err: "enter at least one number" });
    }

    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] !== "number" || isNaN(numbers[i])) {
          return res.status(400).json({ err: "Array must contain only valid numbers." });
        }
      }

    const avg = numbers.reduce((sum, num) =>  sum + num, 0) / numbers.length;

    await db.create({ numbers, average: avg });

    res.json({ numbers, average: avg });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

const getAll = async (req, res) => {
    try {
      const allAverages = await db.find();
      res.json(allAverages);
    } catch (error) {
      res.status(500).json({ err: error.message });
    }
  };
  
  module.exports = { getAvg, getAll };
  