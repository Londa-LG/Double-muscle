require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose"); 
const repRoutes = require("./routes/reps");
const bandRoutes = require("./routes/band");
const traineeRoutes = require("./routes/trainee");
const workoutRoutes = require("./routes/workout");
const exerciseRoutes = require("./routes/exercise");

const app = express();

app.use(express.json());

app.use("/reps",repRoutes);
app.use("/bands",bandRoutes);
app.use("/trainees",traineeRoutes);
app.use("/workouts",workoutRoutes);
app.use("/exercises",exerciseRoutes);

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

