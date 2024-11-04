import axios from 'axios';

const API_URL = "http://localhost:2000/api/v1";

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

// Fungsi Login
export const login = (username, password) => {
    return api.post('/auth/login', {
        username,
        password,
    });
};

// Fungsi Logout
export const logout = () => {
    return api.post('/auth/logout');
};

// Fungsi Ubah Password
export const changePassword = (username, oldPassword, newPassword, confirmPassword) => {
    return api.patch('/auth/changePassword', {
        username,
        oldPassword,
        newPassword,
        newConfirmPassword: confirmPassword,
    });
};

// Tampilkan berita
export const getNews = () => {
    return api.get('/news');
};

// Tampilkan events
export const getEvents = () => {
    return api.get('/event');
};

export default api