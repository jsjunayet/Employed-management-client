import axios from "axios";

export const axiospublic = axios.create({
    baseURL: 'http://localhost:5000/',
    withCredentials: true
})
const useAxios = () => {
    axiospublic.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.Authorization = `Bearer ${token}`
        return config
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });
    return axiospublic
};


export default useAxios;