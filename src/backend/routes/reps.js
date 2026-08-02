const express = require("express");
const Reps = require("../models/repsModel");
const { createRep, getRep, getReps, updateRep, deleteRep } = require("../controllers/repsController");

const router = express.Router();

// Create
router.post("/", createRep);
// Read
router.post("/", getReps);

router.post("/:id", getRep);
// Update
router.put("/:id", updateRep);
// Delete
router.delete("/:id", deleteRep);

module.exports = router;
