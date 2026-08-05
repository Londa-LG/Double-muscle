const Workout_Category = require("../models/workoutCategoryModel");
const mongoose = require("mongoose");

// Create
async function createWorkoutCategory(req,res){
  const { workoutId,categoryId } = req.body;

  try{
    const category = await Workout_Category.create({workoutId,categoryId});
    res.status(200).json(category);
  }catch(error){
    res.status(400).json({error: error.message});
  }
}

// Read
async function getWorkoutCategories(req,res){
  const categories = await Workout_Category.find({}).sort({createdAt: -1});

  if(!categories){
    return res.status(404).json({error: "No categories found"});
  }

  res.status(200).json(categories);
}

async function getWorkoutCategory(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such category id"});
  }

  const category = await Workout_Category.findById(id);

  if(!category){
    return res.status(404).json({error: "No such workout category"});
  }

  res.status(200).json(category);
}

// Update
async function updateWorkoutCategory(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such workout category id"});
  }

  const category = await Workout_Category.findOneAndUpdate(
    {_id:id},
    { $set: req.body},
    {returnDocument: "after", runValidators: true}
  );

  if(!category){
    return res.status(404).json({error: "No such workout category"});
  }

  res.status(200).json(category);
}

// Delete
async function deleteWorkoutCategory(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such workout category id"});
  }

  const category = await Workout_Category.findOneAndDelete({_id: id});
if(!category){
    return res.status(404).json({error: "No such workout category"});
  }

  res.status(200).json();
}

module.exports = {
  createWorkoutCategory,
  getWorkoutCategories,
  getWorkoutCategory,
  updateWorkoutCategory,
  deleteWorkoutCategory
}

