import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:9090';
// Cấu hình Axios
const axiosClient = axios.create({
    baseURL: API_BASE_URL, // Dùng baseURL từ biến môi trường
    headers: { 'Content-Type': 'application/json' }
});
export default axiosClient;
