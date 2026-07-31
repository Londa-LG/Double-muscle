require("dotenv").config()
const mongoose = require("mongoose"); // import mongoose
const express = require("express");
const traineeRoutes = require("./routes/trainee");
const app = express();

app.use(express.json());

app.use("/trainee",traineeRoutes);

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

