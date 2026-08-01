const Exercise = require("../mondels/exerciseModel");
const mongoose = require("mongoose");

// Create
async function createExercise(req,res){
  const { workoutId, name, sets, weight, band } = req.body;
  try{
    const exercise = await Exercise.create({workouttId,name,sets,weight,band});
    res.status(200).json(exercise);
  }catch(error){
    res.status(400).json({error: error.message});
  }
}

// Read
async function getExercises(req,res){
  const exercises = await Exercise.find({}).sort({createdAt: -1});

  if(!exercises){
    return res.status(404).json({error: "No exercises"});
  }

  res.status(200).json(exercises);
}

async function getExercise(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such exercise"});
  }

  const exercise = await Exercise.findById(id);

  if(!exercise){
    return res.status(404).json({error: "No such exercise"});
  }

  res.status(200).json(exercise);
}

// Update
async function updateExercise(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such exercise"});
  }

  const exercise = await Exercise.findOneAndUpdate({_id: id},{...req.body});

  if(!exercise){
    return res.status(404).json({error: "No such exercise"});
  }

  res.status(200).json(exercise);
}

// Delete
async function deleteExercise(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such exercise"});
  }

  const exercise = await Exercise.findOneAndDelete({_id: id});

  if(!exercise){
    return res.status(404).json({error: "No such exercise"});
  }

  res.status(200).json();
}

module.exports = {
  createExercise,
  getExercises,
  getExercise,
  updateExercise,
  deleteExercise
}

