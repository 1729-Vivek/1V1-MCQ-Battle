import axiosInstance from "../axios-instance";

// Registers a new user by sending their details to the `/register/` endpoint
export const signup = async (data) => {
  try {
    const response = await axiosInstance.post(`/register/`, data, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return response;
  } catch (error) {
    console.error('Registration error:', error.response?.data || error.message);
    throw error;  // Re-throw the error for further handling if needed
  }
};

// Authenticates an existing user by sending their credentials to the `/login/` endpoint


// Authenticates an existing user by sending their credentials to the `/login/` endpoint
export const login = async (data) => {
  console.log('Login data:', data);  // Debugging
  return await axiosInstance.post(`/login/`, data);
};


// Accesses a protected resource by sending a GET request to the `/protected/` endpoint
export const Protected = async () => {
  return await axiosInstance.get(`/protected/`);  // Ensure the URL ends with a slash
};
