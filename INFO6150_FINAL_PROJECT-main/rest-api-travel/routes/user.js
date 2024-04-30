const express = require("express");
const User = require("../models/user");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const auth = require('../middleware/authMiddleware');

const router = express.Router();

// Define a strong password rule using a regular expression
const strongPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

// Login route
router.post(
  '/login',
  [
    check('email').isEmail().withMessage('Invalid email format').normalizeEmail(),
    check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Find the user by email
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({ errors: [{ msg: 'Invalid credentials' }] });
      }

      // Check password validity
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ errors: [{ msg: 'Invalid credentials' }] });
      }
      const payload = {
        user: {
          id: user._id,
          email: user.email,
          role: user.role,
        },
      };
      // If credentials are valid, generate a token
      const token = jwt.sign(payload, 'northeastern', { expiresIn: '3h' });


      // Return the token in the response
      return res.status(200).json({ token, email: user.email, fullName: user.fullName, role: user.role });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ errors: [{ msg: 'Internal Server Error' }] });
    }
  }
);

// Create a new user
router.post(
  "/create",
  [
    check('fullName')
      .matches(/^[a-zA-Z0-9 ]+$/)
      .withMessage('Username should only contain letters, numbers, and spaces')
      .isLength({ min: 1 })
      .withMessage('Full name is required')
      .isString()
      .withMessage('Full name must be a string'),
    check("email")
      .isEmail()
      .withMessage("Invalid email format")
      .normalizeEmail()
      .custom((value) => {
        // Check if the email domain is northeastern.edu
        if (!value.endsWith("northeastern.edu")) {
          throw new Error("Email domain must be northeastern.edu");
        }
        return true;
      }),
    check("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters")
      .matches(strongPassword)
      .withMessage(
        "Password must contain at least one lowercase letter, one uppercase letter, and one digit"
      ),
  ],
  async (req, res) => {
    const { fullName, email, password } = req.body;

    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    const newUser = new User({ fullName, email, password })

    newUser
      .save()
      .then(() => {
        return res.status(201).json({ message: "User created successfully" });
      })
      .catch((err) => {
        return res.status(500).json({ error: err.message });
      });
  }
);


// Update user details (full name and password only)
// Update user details (full name and password only)
router.put(
  "/edit",
  auth.authUser,
  [
    check('fullName')
      .optional()
      .matches(/^[a-zA-Z0-9 ]+$/)
      .withMessage('Username should only contain letters, numbers, and spaces')
      .isString()
      .withMessage('Full name must be a string'),
    check("password")
      .optional()
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters")
      .matches(strongPassword)
      .withMessage(
        "Password must contain at least one lowercase letter, one uppercase letter, and one digit"
      ),
  ],
  async (req, res) => {
    const { fullName, password } = req.body;
    const email = req.query.email;

    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (fullName) {
      user.fullName = fullName;
    }

    if (password) {
      // Hash the new password before updating it
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }

    user
      .save()
      .then(() => {
        return res.status(200).json(user);
      })
      .catch((err) => {
        return res.status(500).json({ error: err.message });
      });
  }
);

router.delete("/delete/:userId", auth.authAdmin, async (req, res) => {
  try {
      const userId = req.params.userId;
      await User.findOneAndDelete({ _id: userId });
      res.status(201).json({
          message: "User deleted successfully"
      });
  } catch (err) {
      res.status(500).json({ error: "Server error" });
  }
});

router.get("/current", auth.authUser, async (req, res) => {
  const user = await User.findOne({ _id: req.user.id }).select("-password"); // Exclude the password field
  console.log(user)
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  return res.status(200).json(user);
});
// router.get("/current", auth.authUser, async (req, res) => {
//   const user = await User.find({{ _id: req.user.id }}).select("-password"); // Exclude the password field
// if (!user) {
//   return res.status(404).json({ error: "User not found" });
// }
// return res.status(200).json(user);
// });
// Get all users (excluding passwords)
router.get("/getAll", auth.authAdmin, async (req, res) => {
  const users = await User.find().select("-password"); // Exclude the password field
  return res.status(200).json(users);
});

module.exports = router;
