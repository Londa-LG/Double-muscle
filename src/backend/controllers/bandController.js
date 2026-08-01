const Band = require("../models/bandModel");
const mongoose = require("mongoose");

// Create
async function createBand(req,res){
  const { exerciseId, min_tention, max_tention } = req.body;

  try{
    const band = await Band.create({exerciseId,min_tention,max_tentio});
    res.status(200).json(workout);
  }catch(error){
    res.status(400).json({error: error.message});
  }
}

// Read
async function getBands(req,res){
  try{
    const bands = await Band.find({}).sort({createdAt: -1});
    res.status(200).json(bands);
  }catch(error){
    res.status(400).json({error: error.message});
  }
}

async function getBand(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such band"});
  }

  const band = await Band.findById(id);

  if(!band){
    return res.status(404).json({error: "No such band"});
  }

  res.status(200).json(band);
}

// Update
async function updateBand(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such band"});
  }

  const band = await Band.findOneAndUpdate({_id: id},{...req.body});

  if(!band){
    return res.status(404).json({error: "No such band"});
  }

  res.status(200).json(band);
}

// Delete
async function deleteBand(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such band"});
  }

  const band = await Band.findOneAndDelete({_id: id});

  if(!band){
    return res.status(404).json({error: "No such band"});
  }

  res.status(200).json();
}

module.exports = {
  createBand,
  getBands,
  getBand,
  updateBand,
  deleteBand,
}

