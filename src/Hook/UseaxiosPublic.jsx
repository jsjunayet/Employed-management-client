import axios from "axios";


const axiosJust = axios.create({
    baseURL: 'http://localhost:5000/'
})
const UseaxiosPublic = () => {
    return axiosJust

};

export default UseaxiosPublic;