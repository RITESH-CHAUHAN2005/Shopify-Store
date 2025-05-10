
// Simple authentication backend file
// In a real application, this would connect to a database and handle JWT tokens

/**
 * Authenticate a user with email and password
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<Object>} User object if authentication successful
 */
export const authenticateUser = async (email, password) => {
  // This is just for demonstration purposes
  // In a real application, this would verify credentials against a database
  if (email === 'user@example.com' && password === 'password') {
    return {
      id: '1',
      name: 'Demo User',
      email: 'user@example.com',
      role: 'customer'
    };
  }
  
  throw new Error('Invalid email or password');
};

/**
 * Register a new user
 * @param {string} name - User full name
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<Object>} Newly created user object
 */
export const registerUser = async (name, email, password) => {
  // This is just for demonstration purposes
  // In a real application, this would create a new user in the database
  return {
    id: Date.now().toString(),
    name,
    email,
    role: 'customer'
  };
};

/**
 * Get user profile by ID
 * @param {string} userId - User ID
 * @returns {Promise<Object>} User profile object
 */
export const getUserProfile = async (userId) => {
  // This is just for demonstration purposes
  // In a real application, this would fetch user data from a database
  if (userId === '1') {
    return {
      id: '1',
      name: 'Demo User',
      email: 'user@example.com',
      role: 'customer',
      createdAt: '2023-01-01T00:00:00Z'
    };
  }
  
  throw new Error('User not found');
};
