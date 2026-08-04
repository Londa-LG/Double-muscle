const Trainee = require("../models/traineeModel");
const mongoose = require("mongoose");

// create a new trainee
async function createTrainee(req,res){
  const { username,name,email,password } = req.body;

  try{
    const trainee = await Trainee.create({username,name,email,password});
    res.status(200).json(trainee);
  }catch (error){
    res.status(400).json({error: error.message});
  }
}

// get all trainee
async function getTrainees(req, res){
  const trainees = await Trainee.find({}).sort({createdAt: -1});

  if(!trainees){
    return res.status(404).json({error: "No trainees found"});
  }

  res.status(200).json(trainees);
}

// get a single trainee
async function getTrainee(req,res){
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such trainee"});
  }

  const trainee = await Trainee.findById(id);

  if(!trainee){
    return res.status(404).json({error: "No such trainee"});
  }

  res.status(200).json(trainee);
}

// update a workout
async function updateTrainee(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such trainee"});
  }

  const trainee = await Trainee.findOneAndUpdate(
    {_id: id},
    {$set:req.body},
    {returnDocument: "after", runValidators: true}
  );

  if(!trainee){
    return res.status(404).json({error: "No such trainee"});
  }

  res.status(200).json(trainee);
}

// delete a workout
async function deleteTrainee(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such trainee"});
  }

  const trainee = await Trainee.findOneAndDelete({_id: id});

  if(!trainee){
    return res.status(404).json({error: "No such trainee"});
  }

  res.status(200).json();
}

module.exports = {
  createTrainee,
  getTrainees,
  getTrainee,
  updateTrainee,
  deleteTrainee
}

