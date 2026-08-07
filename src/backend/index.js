require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose"); 
const repRoutes = require("./routes/reps");
const bandRoutes = require("./routes/band");
const tagRoutes = require("./routes/tags");
const traineeRoutes = require("./routes/trainee");
const workoutRoutes = require("./routes/workout");
const categoryRoutes = require("./routes/category");
const exerciseRoutes = require("./routes/exercise");
const exerciseTagRoutes = require("./routes/exerciseTags");
const workoutCategoryRoutes = require("./routes/workoutCategories");
const workoutReportRoutes = require("./routes/workoutReport");
const exerciseReportRoutes = require("./routes/exerciseReport");
const workoutTagRoutes = require("./routes/workoutTags");

const app = express();

app.use(express.json());

app.use("/reps",repRoutes);
app.use("/tags", tagRoutes);
app.use("/bands",bandRoutes);
app.use("/trainees",traineeRoutes);
app.use("/workouts",workoutRoutes);
app.use("/exercises",exerciseRoutes);
app.use("/categories", categoryRoutes);
app.use("/exercisetags", exerciseTagRoutes);
app.use("/workoutcategories", workoutCategoryRoutes);
app.use("/workoutreports", workoutReportRoutes);
app.use("/exercisereports", exerciseReportRoutes);
app.use("/workouttags", workoutTagRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(8000,() => {
    console.log("Connected to db & listening on port",8000);
});
})
.catch((error) => {
    console.log(error);
});

