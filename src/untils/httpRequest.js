import axios from 'axios';

export const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});
export const get = async (path, options = {}) => {
    const reponse = await request.get(path, options);
    return reponse.data;
};
