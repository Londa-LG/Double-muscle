const Workout_Report = require("../models/workoutReportModel");
const mongoose = require("mongoose");

// Create
async function createWorkoutReport(req,res){
  const { workoutId, success } = req.body;

  try{
    const report = await Workout_Report.create({workoutId,success});
    res.status(200).json(report);
  }catch(error){
    res.status(400).json({error: error.message});
  }
}

// Read
async function getWorkoutReports(req, res){
  const reports = await Workout_Report.find({}).sort({createdAt: -1});

  if(!reports){
    return res.status(404).json({error: "No reports found"});
  }

  res.status(200).json(reports);
}

async function getWorkoutReport(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such report Id"});
  }

  const report = await Workout_Report.findById(id);

  if(!report){
    return res.status(404).json({error: "No such report found"});
  }

  res.status(200).json(report);
}

// Update
async function updateWorkoutReport(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such report id"});
  }

  const report = await Workout_Report.findOneAndUpdate({_id:id},{...req.body});

  if(!report){
    return res.status(404).json({error: "No such report"});
  }

  res.status(200).json(report);
}

// Delete
async function deleteWorkoutReport(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such report id"});
  }

  const report = await Workout_Report.findOneAndDelete({_id: id});

  if(!report){
    return res.status(404).json({error: "No such report"});
  }

  res.status(200).json();
}

module.exports = {
  createWorkoutReport,
  getWorkoutReports,
  getWorkoutReport,
  updateWorkoutReport,
  deleteWorkoutReport
}
