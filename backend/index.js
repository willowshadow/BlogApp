// index.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const blogRoutes = require("./routes/blogRoutes");

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());


// Routes
app.use("/blog", blogRoutes);

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start the server
const PORT = process.env.PORT || 5000;

// Connect to MongoDB database
mongoose
  .connect(
    "mongodb+srv://danyalphoenix:Yt4J44m55YZgMdjs@testapi.2ovpifp.mongodb.net/sampleCollection?retryWrites=true&w=majority&appName=TestAPI"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err)
  );
