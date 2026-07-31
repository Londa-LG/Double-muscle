const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutCategorySchema = new Schema({
  workoutId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Workout",
    required: true
  },
  categoryId:{
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Workout_Category",workoutCategorySchema);
