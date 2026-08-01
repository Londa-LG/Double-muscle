const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutTag = new Schema({
  workoutId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Workout"
  },
  tagId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tag"
  }
},{ timestamps: true });
