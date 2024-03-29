// index.js
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const blogRoutes = require("./routes/blogRoutes");
const authRoutes = require("./routes/authRoutes");
const cors = require('cors');
const { authenticateJWT } = require('./middleware/auth.middleware');



// Initialize Express app
const app = express();
app.use(express.json());
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: true,
  optionsSuccessStatus: 204
}
app.use(cors(corsOptions));



// //Use Cors Middleware
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, PATCH, DELETE');  

//   if (req.method == 'OPTIONS') {
//       return res.status(200).json({});
//   }
//     next();
// });


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))





// Routes
app.use(blogRoutes);
app.use(authRoutes);

// Error handler middleware for 404 Not Found errors
app.use((req, res, next) => {

  console.log(req.url);
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
