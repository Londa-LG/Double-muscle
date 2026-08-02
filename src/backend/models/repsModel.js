const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const repsSchema = new Schema({
  exerciseId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exercise",
    required: true
  },
  reps:{
    type: Number,
    required: true
  }
},{ timestamps: true });

module.exports = mongoose.model("Reps",repsSchema);
