// const mongoURI =
//   'mongodb+srv://bhavya:ZJqDFwZtbJPXoRZn@myapp.7t14kpe.mongodb.net/?retryWrites=true&w=majority';
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());
app.use(cors());

// Define your MongoDB Atlas connection string
const mongoURI =
  "mongodb+srv://bhavya:ZJqDFwZtbJPXoRZn@myapp.7t14kpe.mongodb.net/?retryWrites=true&w=majority";

// Connect to MongoDB Atlas
mongoose
  .connect(mongoURI, {})
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("MongoDB Atlas connection error:", err);
  });

// Include the user routes
const userRoutes = require("./routes/user");
app.use("/user", userRoutes);

// Include the trip routes
const tripRoutes = require("./routes/trips");
app.use(tripRoutes);
const review = require("./routes/review");
app.use(review);
// Start the Express server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
