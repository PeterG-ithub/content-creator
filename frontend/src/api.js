import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000'; // Backend URL

export const generateScript = async (data) => {
    const response = await axios.post(`${API_URL}/generate-script`, data);
    return response.data;
};

export const generateImage = async (data) => {
    const response = await axios.post(`${API_URL}/generate-image`, data);
    return response.data;
};

export const createVideo = async (data) => {
    const response = await axios.post(`${API_URL}/create-video`, data);
    return response.data;
};
