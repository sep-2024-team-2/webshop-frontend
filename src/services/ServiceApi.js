import axios from "axios";

const API_URL = "http://localhost:5000";

export const getAllServices = async () => {
  try {
    const response = await axios.get(`${API_URL}/services`);
    return response.data;
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
};