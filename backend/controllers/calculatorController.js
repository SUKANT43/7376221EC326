const db=require('../models/averageModel')

const getAvg = async (req, res) => {
  try {
    const { numbers } = req.body;

    if (!Array.isArray(numbers)) {
      return res.status(400).json({ err:"enter only numbers" });
    }

    if(numbers.length==0){
        return res.status(400).json({ err:"enter at least one number" });
    }
    const avg = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

    const calc = new db({ numbers, avg });
    await calc.save();

    res.json({ numbers, average });
  } catch (error) {
    res.status(500).json({ err:error.message });
  }
};

module.exports = { getAvg };
