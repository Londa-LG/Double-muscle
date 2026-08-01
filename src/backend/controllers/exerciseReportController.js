const Exercise_Report = require("../models/exerciseReportModel");
const mongoose = require("mongoose");

// Create
async function createExerciseReport(req,res){
  const { exerciseId, success } = req.body;

  try{
    const report = await Exercise_Report.create({exerciseId,success});
    res.status(200).json(report);
  }catch(error){
    res.status(400).json({error: error.message});
  }
}

// Read
async function getExerciseReports(req,res){
  const reports = await Exercise_Report.find({}).sort({createdAt: -1});

  if(!reports){
    return res.status(404).json({error: "No reports found"});
  }

  res.status(200).json(reports);
}

async function getExerciseReport(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId,isValid(id)){
    return res.status(404).json({error: "No such report id"});
  }

  const report = await Exercise_Report.findById(id);

  if(!report){
    return res.status(404).json({error: "No report found"});
  }

  res.status(200).json(report);
}

// Update
async function updateExerciseReport(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId,isValid(id)){
    return res.status(404).json({error: "No such report id"});
  }

  const report = await Exercise_Report.findOneAndUpdate({_id: id},{...req.body});

  if(!report)
  {
    return res.status(404).json({error: "No such report"});
  }

  res.status(200).json(report);
}

// Delete
async function deleteExerciseReport(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId,isValid(id)){
    return res.status(404).json({error: "No such report id"});
  }

  const report = await Exercise_Report.findOneAndDelete({_id: id});

  if(!report)
  {
    return res.status(404).json({error: "No such report"});
  }

  res.status(200).json();
}



















































