const express = require("express");
const { createWorkoutReport, getWorkoutReports, getWorkoutReport, updateWorkoutReport, deleteWorkoutReport } = require("../controllers/workoutReportController");

const router = express.Router();

// Create
router.post("/", createWorkoutReport);

// Read
router.get("/", getWorkoutReports);
router.get("/:id", getWorkoutReport);

// Update
router.put("/:id", updateWorkoutReport);

// Delete
router.delete("/:id", deleteWorkoutReport);

module.exports = router;
