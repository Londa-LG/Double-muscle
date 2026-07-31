const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const workoutSchema = new Schema({
  traineeId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trainee",
    required: true
  },
  name:{
    type: String,
    required: true,
  },
  weekDay:{
    type: String,
    required: true,
  },
},{ timestamps: true });

module.exports = mongoose.model("Workout",workoutSchema);
