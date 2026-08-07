const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseReportSchema = new Schema({
  exerciseId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exercise",
    required: true
  },
  success:{
    type: Boolean
  }
}, { timestamps: true });

module.exports = mongoose.model("Exercise_Report",exerciseReportSchema);
