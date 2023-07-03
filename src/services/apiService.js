import axios from 'axios';

const apiInstance = axios.create({
    baseURL: 'https://reqres.in/api',
});

export function getUsers() {
    return apiInstance.get('/users');
}

export function getUsersByPage(page) {
    return apiInstance.get(`/users?page=${page}`);
}
