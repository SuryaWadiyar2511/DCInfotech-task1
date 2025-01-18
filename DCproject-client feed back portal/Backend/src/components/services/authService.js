import axios from "axios";

const apiEndpoint = "http://your-api-endpoint/login"; // Replace with your actual API endpoint

export const login = async (email, password) => {
  const response = await axios.post(apiEndpoint, { email, password });
  const token = response.data.token;
  if (token) localStorage.setItem("token", token);
  return token;
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getCurrentUser = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  const decoded = JSON.parse(atob(token.split(".")[1]));
  return decoded;
};