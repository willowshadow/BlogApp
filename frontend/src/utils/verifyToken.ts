import axios from 'axios';

// Assuming you have a server endpoint for token verification
const verifyTokenEndpoint = 'http://localhost:5000/tokenVerify';

export const verifyToken = async () => {
  try {
    // Fetch token from local storage
    const token = localStorage.getItem('token');
    if (!token) {
      // Token not found, handle accordingly (e.g., redirect to login page)
      throw new Error('Token not found');
    }

    // Send a request to the server to verify the token
    const response = await axios.get(verifyTokenEndpoint, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    // If the token is valid on the server side, handle success
    console.log('Token is valid:', response.data);
    
    return true;

  } catch (error) {
    // If the token is invalid or expired, handle error
    console.error('Error verifying token:');
    // Handle error accordingly (e.g., redirect to login page)
    return false;
  }
};

