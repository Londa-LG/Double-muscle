const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseTag = new Schema({
  exerciseId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exercise"
  },
  tagId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tag"
  }
},{ timestamps: true });

module.exports = mongoose.model("Exercise_Tag",exerciseTag);
