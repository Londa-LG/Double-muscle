const express = require("express");
const Trainee = require("../models/traineeModel");
const { createTrainee, getTrainees, getTrainee, updateTrainee, deleteTrainee } = require("../controllers/traineeController");

const router = express.Router();

// Create
router.post("/", createTrainee);

// Read
router.get("/", getTrainees);

router.get("/:id", getTrainee);

// Update
router.put("/:id", updateTrainee);

// Delete
router.delete("/:id", deleteTrainee);

module.exports = router;



















































