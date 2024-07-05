const BASE_API_URL = 'https://jsonplaceholder.typicode.com';

export const userList = {
    url: '/users',
    method: 'get',
    baseURL: BASE_API_URL,
};

export const createItem = (body: object) => ({
    url: '/posts',
    method: 'post',
    baseURL: BASE_API_URL,
    body,
});
