import axios from 'axios';

const apiInstance = axios.create({
    baseURL: 'https://reqres.in/api',
});

export async function getUsers() {
    try {
        const response = await apiInstance.get('/users');
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}

export async function getUsersByPage(page) {
    try {
        const response = await apiInstance.get(`/users?page=${page}`);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}
