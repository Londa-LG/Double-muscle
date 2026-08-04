const Workout = require("../models/workoutModel");
const Trainee = require("../models/traineeModel");
const mongoose = require("mongoose");

// Create
async function createWorkout(req,res){
  const { traineeId, name, weekDay } = req.body;

  try{
    const trainee = await Trainee.findById(traineeId);
    const workout = await Workout.create({
      traineeId: trainee._id,
      name: name,
      weekDay: weekDay});
    res.status(200).json(workout);
  }catch(error){
    res.status(400).json({error: error.message});
  }
}

// Read
async function getWorkouts(req,res){
  const workouts = await Workout.find({}).sort({createdAt: -1});

  if(!workouts){
    res.status(400).json({error: error.message});
  }

  res.status(200).json(workouts);
}

async function getWorkout(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such workout"});
  }

  const workout = await Workout.findById(id);

  if(!workout){
    return res.status(404).json({error: "No such workout"});
  }

  res.status(200).json(workout);
}

// Update
async function updateWorkout(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such workout"});
  }

  const workout = await Workout.findOneAndUpdate(
    {_id: id},
    { $set: req.body },
    { returnDocument: "after", runValidators: true }
  );

  if(!workout){
    return res.status(404).json({error: "No such workout"});
  }

  res.status(200).json(workout);
}

// Delete
async function deleteWorkout(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such workout"});
  }

  const workout = await Workout.findOneAndDelete({_id: id});

  if(!workout){
    return res.status(404).json({error: "No such workout"});
  }

  res.status(200).json();
}

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout
}

