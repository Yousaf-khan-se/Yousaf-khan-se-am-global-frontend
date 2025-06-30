import axios from "axios";

export const configBackEndBaseUrl = async (url) => {
    axios.defaults.baseURL = url;
    axios.defaults.withCredentials = true;

    try {
        return await axios.get('/');
    } catch (error) {
        console.error('Error connecting to backend:', error.message);
        throw error;
    }
};