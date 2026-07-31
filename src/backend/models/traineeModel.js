const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema
const traineeSchema = new Schema({
  username:{
    type: String,
    required: true,
    unique: true
  },
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  }
},{ timestamps: true });

// Model
module.exports = mongoose.model("Trainee",traineeSchema);
