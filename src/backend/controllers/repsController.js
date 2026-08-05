const Exercise = require("../models/exerciseModel");
const Reps = require("../models/repsModel");
const mongoose = require("mongoose");

// Create
async function createRep(req,res){
  const { exerciseId, reps } = req.body;

  try{
    const exercise = await Exercise.findById(exerciseId);
    const rep = await Reps.create({"exerciseId":exercise._id,"reps":reps});
    res.status(200).json(rep);
  }catch(error){
    res.status(400).json({error: error.message});
  }
}

// Read
async function getReps(req,res){
  const reps = await Reps.find({}).sort({createdAt: -1});

  if(!reps){
    return res.status(404).json({error: "No rep entries found"});
  }

  res.status(200).json(reps);
}

async function getRep(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such rep entry"});
  }

  const rep = await Reps.findById(id);

  if(!rep){
    return res.status(404).json({error: "No such rep entry"});
  }

  res.status(200).json(rep);
}

// Update
async function updateRep(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such rep entry"});
  }

  const rep = await Reps.findOneAndUpdate(
    {_id: id},
    { $set: req.body },
    { returnDocument: "after", runValidators: true }
  );

  if(!rep){
    return res.status(404).json({error: "No such rep entry"});
  }

  res.status(200).json(rep);
}

// Delete
async function deleteRep(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such rep entry"});
  }

  const rep = await Reps.findOneAndDelete({_id: id});

  if(!rep){
    return res.status(404).json({error: "No such rep entry"});
  }

  res.status(200).json();
}

module.exports = {
  createRep,
  getReps,
  getRep,
  updateRep,
  deleteRep
}

