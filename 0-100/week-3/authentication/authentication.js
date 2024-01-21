// Install the 'jsonwebtoken' library
// npm install jsonwebtoken

// Import the 'jsonwebtoken' library
const jwt = require('jsonwebtoken');

// Secret key used for signing and verifying tokens
const secretKey = 'yourSecretKey';

// Sample user data (replace this with your user data from a database)
const user = {
  id: 123,
  username: 'example_user',
  role: 'user',
};

// Function to generate a JWT token for a user
const generateToken = (user) => {
  // Create a token with the user data and sign it with the secret key
  const token = jwt.sign(user, secretKey, { expiresIn: '1h' });
  return token;
};

// Function to verify a JWT token
const verifyToken = (token) => {
  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    // Token verification failed
    console.error('Token verification failed:', error.message);
    return null;
  }
};

// Example usage:

// Generate a token for the user
const authToken = generateToken(user);

// Log the generated token
console.log('Generated Token:', authToken);

// Verify the token
const decodedUser = verifyToken(authToken);

// Log the decoded user data
console.log('Decoded User:', decodedUser);
