const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bandSchema = new Schema({
  exerciseId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exercise",
    required: true
  },
  min_tention:{
    type: Number,
    required: true
  },
  max_tention:{
    type: Number,
    required: true
  }
},{ timestamps: true });

module.exports = mongoose.model("Band", bandSchema);
