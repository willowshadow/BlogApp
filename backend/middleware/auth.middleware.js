// auth.middleware.js

const jwt = require('jsonwebtoken');

// Middleware function for JWT verification and authorization
exports.authenticateJWT = (req, res, next) => {
  try {
    // Extract the JWT token from the Authorization header
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Missing JWT token' });
    }

    // Verify the JWT token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the decoded token payload to the request object
    req.userData = decodedToken;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired JWT token' });
  }
};
