const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  numbers: {
    type: [Number],
    required: true,
  },
  average: {
    type: Number,
    required: true,
  },
},
{
    timestamps:true
});

module.exports = mongoose.model("calc", schema);


