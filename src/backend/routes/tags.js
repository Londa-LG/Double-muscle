const express = require("express");
const Tags = require("../models/tagModel");
const { createTag, getTags, getTag, updateTag, deleteTag } = require("../controllers/tagController");

const router = express.Router();

// Create
router.post("/", createTag);

// Read
router.get("/", getTags);
router.get("/:id", getTag);

// Update
router.put("/:id", updateTag);

// Delete
router.delete("/:id", deleteTag);

module.exports = router;
