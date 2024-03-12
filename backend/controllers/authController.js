// auth.controller.js

const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Controller function for user registration (sign up)
exports.signup = async (req, res, next) => {
  try {
    // Extract user information from request body
    const { username, email, password } = req.body;

    // Check if user with the same email or username already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });


    console.log(existingUser)


    if (existingUser) {
      return res.status(409).json({ message: 'User with the same email or username already exists' });
    }

    if (password.length < 8) {
      return res.status(400).json({ message: 'Password must be at least 8 characters long' });
    }
    

    // Create a new user instance
    const newUser = new User({
      username,
      email,
      password
    });

    // Save the user to the database
    await newUser.save();

    // Respond with success message
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    next(error);
  }
};

// Controller function for user authentication (sign in)
exports.signin = async (req, res, next) => {
    try {
      // Extract user credentials from request body
      const { username, password } = req.body;
      console.log(username, password);
      // Find the user by username
      const user = await User.findOne({username});
      console.log(user)
      if (!user) {
        return res.status(401).json({ message: 'Invalid username' });
      }
  
      // Compare the provided password with the hashed password in the database
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Wrong password' });
      }
  
      // If the password is valid, generate a JWT
      const token = jwt.sign(
        { userId: user._id, username: user.username }, // Payload
        process.env.JWT_SECRET, // Secret key
        { expiresIn: '1m' } // Token expiration (optional)
      );
  
      // Respond with the generated JWT
      res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  };

exports.logout= async (req, res, next) => {
    
}

exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    }
    catch (error) {
        next(error);
    }
}
