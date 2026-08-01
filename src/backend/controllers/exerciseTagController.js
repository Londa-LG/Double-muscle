const Exercise_Tag = require("../models/exerciseTagModel");
const mongoose = require("mongoose");

// Create
async function createExerciseTag(req,res){
  const { exerciseId, tagId } = req.body;

  try{
    const exerciseTag = await Exercise_Tag.create({exerciseId,tagId});
    res.status(200).json(exerciseTag);
  }catch(error){
    res.status(400).json({error:error.message});
  }
}

// Read
async function getExerciseTags(req,res){
  const exerciseTags = await Exercise_Tag.find({}).sort({createdAt: -1});

  if(!exerciseTags){
    return res.status(404).json({error: "No exercise tags"});
  }

  res.status(200).json(exerciseTags);
}

async function getExerciseTag(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such exercise tag"});
  }

  const exerciseTag = await Exercise_Tag.findById(id);

  if(!exerciseTag){
    return res.status(404).json({error: "No such exercise tag"});
  }

  res.status(200).json(exerciseTag);
}
// Update
async function updateExerciseTag(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such exercise tag"});
  }

  const exerciseTag = await Exercise_Tag.findOneAndUpdate({_id: id},{...req.body});

  if(!exerciseTag){
    return res.status(404).json({error: "No such exercise tag"});
  }

  res.status(200).json(exerciseTag);
}

// Delete
async function deleteExerciseTag(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such exercise tag with id"});
  }

  const exerciseTag = await Exercise_Tag.findOneAndDelete({_id:id});

  if(!exerciseTag){
    return res.status(404).json({error: "No such exercise tag"});
  }

  res.status(200).json(();
}

module.exports = {
  createExerciseTag,
  getExerciseTags,
  getExerciseTag,
  updateExerciseTag,
  deleteExerciseTag
}

