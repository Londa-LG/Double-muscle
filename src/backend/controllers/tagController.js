const Tag = require("../models/tagModel");
const mongoose = require("mongoose");

// Create
async function createTag(req,res){
  const { tag } = req.body;

  try{
    const tagRecord = await Tag.create({tag});
    res.status(200).json(tagRecord);
  }catch(error){
    res.status(400).json({error:error.message});
  }
}

// Read
async function getTags(req,res){
  const tags = await Tag.find({}).sort({createdAt: -1});

  if(!tags){
    return res.status(404).json({error: "No tags"});
  }

  res.status(200).json(exerciseTags);
}

async function getTag(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such tag id"});
  }

  const tag = await Tag.findById(id);

  if(!tag){
    return res.status(404).json({error: "No such tag"});
  }

  res.status(200).json(exerciseTag);
}

// Update
async function updateTag(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such tag id"});
  }

  const tag = await Tag.findOneAndUpdate({_id:id},{...req.body});

  if(!tag){
    return rs.status(404).json({error: "No such tag"});
  }

  res.status(200).json(tag);
}

// Delete
async function deleteTag(req,res){
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such tag id"});
  }

  const tag = await Tag.findOneAndDelete({_id:id});

  if(!tag){
    return res.status(404).json({error: "No such tag"});
  }

  res.status(200).json();
}

module.exports = {
  createTag,
  getTags,
  getTag,
  updateTag,
  deleteTag
}












































