import axios from 'axios'
import { useAuth } from './Pages/Auth-Context/Auth-Context';

const instance = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        'Content-Type': 'application/json'
    }
});

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers["x-access-token"] = token;
        }
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default instance;