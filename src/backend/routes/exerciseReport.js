const express = require("express");
const { createExerciseReport, getExerciseReports, getExerciseReport, updateExerciseReport, deleteExerciseReport } = require("../controllers/exerciseReportController");

const router = express.Router();

// Create
router.post("/", createExerciseReport);

// Read
router.get("/", getExerciseReports);
router.get("/:id", getExerciseReport);

// Update
router.put("/:id", updateExerciseReport);

// Delete
router.delete("/:id", deleteExerciseReport);

module.exports = router;
