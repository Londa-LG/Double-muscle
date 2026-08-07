const Workout_Tag = require("../models/workoutTagModel");
const mongoose = require("mongoose");

// Create
async function createWorkoutTag(req,res){
  const { workoutId, tagId } = req.body;

  try{
    const workoutTag = await Workout_Tag.create({workoutId,tagId});
    res.status(200).json(workoutTag);
  }catch(error){
    res.status(400).json({error: error.message});
  }
}

// Read
async function getWorkoutTags(req,res){
  const workoutTags = await Workout_Tag.find({}).sort({createdAt: -1});

  if(!workoutTags){
    return res.status(404).json({error: "No workout tags"});
  }

  res.status(200).json(workoutTags);
}

async function getWorkoutTag(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such workout tag id"});
  }

  const workoutTag = await Workout_Tag.findById(id);

  if(!workoutTag){
    return res.status(404).json({error: "No such workout tag"});
  }

  res.status(200).json(workoutTag);
}

// Update
async function updateWorkoutTag(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such workout tag id"});
  }

  const workoutTag = await Workout_Tag.findOneAndUpdate(
    {_id: id},
    { $set: req.body},
    { returnDocument: "after", runValidators: true }
  );

  if(!workoutTag){
    return res.status(404).json({error: "No such workout tag"});
  }

  res.status(200).json(workoutTag);
}

// Delete
async function deleteWorkoutTag(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such workout tag id"});
  }

  const workoutTag = await Workout_Tag.findOneAndDelete({_id:id});

  if(!workoutTag){
    return res.status(404).json({error: "No such workout tag"});
  }

  res.status(200).json();
}

module.exports = {
  createWorkoutTag,
  getWorkoutTags,
  getWorkoutTag,
  updateWorkoutTag,
  deleteWorkoutTag
}

