const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutReportSchema = new Schema({
  workoutId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Workout",
    required: true
  },
  success:{
    type: Boolean,
    required: true
  }
},{ timestamps: true });

module.exports = mongoose.model("Workout_Report",workoutReportSchema);
