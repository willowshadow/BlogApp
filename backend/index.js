// index.js
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const blogRoutes = require("./routes/blogRoutes");
const authRoutes = require("./routes/authRoutes");
const cors = require('cors');



// Initialize Express app
const app = express();

//Use Cors Middleware
app.use(cors());

// Middleware
app.use(bodyParser.json());




// Routes
app.use(blogRoutes);
app.use(authRoutes);

// Error handler middleware for 404 Not Found errors
app.use((req, res, next) => {

  res.status(404).send("404 - Not Found");
});

// Start the server
const PORT = process.env.PORT;

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
