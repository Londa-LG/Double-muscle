const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  workoutId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Workout",
    required: true
  },
  name:{
    type: String,
    required: true
  },
  sets:{
    type: Number,
    required: true
  },
  weight:{
    type: Number,
    required: true
  },
  band:{
    type: Boolean,
  }
},{ timestamps: true });

module.exports = mongoose.model("Exercise",exerciseSchema);
