const Category = require("../models/categoryModel");
const mongoose = require("mongoose");

// Create
async function createCategory(req,res){
  const { category } = req.body;

  try{
    const category = await Category.create({category});
    res.status(200).json(category);
  }catch(error){
    res.status(400).json({error: error.message});
  }
}

// Read
async function getCategories(req,res){
  const categories = await Train.find({}).sort({createdAt: -1});

  if(!categories){
    return res.status(404).json({error: "No categories"});
  }

  res.status(200).json(categories);
}

async function getCategory(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such category id"});
  }

  const category = await Category.findById(id);

  if(!category){
    return res.status(404).json({error: "No such category"});
  }

  res.status(200).json(category);
}

// Update
async function updateCategory(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such category id"});
  }

  const category = await Category.findOneAndUpdate({_id:id},{...req.body});

  if(!category){
    return res.status(404).json({error: "No such category"});
  }

  res.status(200).json(category);
}

// Delete
async function deleteCategory(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such category id"});
  }

  const category = await Category.findOneAndDelete({_id: id});

  if(!category){
    return res.status(404).json({error: "No such category"});
  }

  res.status(200).json();
}

module.exports = {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory
}

