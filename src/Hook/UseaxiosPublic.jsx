import axios from "axios";


export const axiospvt = axios.create({
    baseURL: 'https://assignment-12-server-wine-phi.vercel.app'
})
const UseaxiosPublic = () => {
    // axiospvt.interceptors.request.use(function (config) {
    //     const token = localStorage.getItem('access-token')
    //     config.headers.Authorization = `Bearer ${token}`
    //     return config
    // }, function (error) {
    //     // Do something with request error
    //     return Promise.reject(error);
    // });
    return axiospvt

};

export default UseaxiosPublic;