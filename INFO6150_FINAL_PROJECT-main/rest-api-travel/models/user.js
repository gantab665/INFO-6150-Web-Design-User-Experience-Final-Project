const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Define the user schema with fullName, email, and password fields
const userSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true }, // Enforces uniqueness for email
  password: String,
  role: { type: String, default: 'user' },
});

// Middleware to hash the password before saving it to the database
userSchema.pre("save", async function (next) {
  // Hash the password using bcrypt with a cost factor of 10
  this.password = await bcrypt.hash(this.password, 10);
  console.log(this.password)
  next();
});;

// Create a User model based on the user schema
const User = mongoose.model("User", userSchema);

module.exports = User;
