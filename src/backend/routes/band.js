const express = require("express");
const Band = require("../models/bandModel");
const { createBand, getBand, getBands, updateBand, deleteBand } = require("../controllers/bandController");

const router = express.Router();

// Create
router.post("/", createBand);

// Read
router.get("/", getBand);
router.get("/:id", getBands);

// Update
router.put("/:id", updateBand);

// Delete
router.delete("/:id", deleteBand);

module.exports = router;
