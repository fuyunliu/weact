import axios from "axios";
import { message } from "antd";

const instance = axios.create({
    // timeout: 1000,
    baseURL: 'http://127.0.0.1:8000',
    headers: {'Content-Type': 'application/json'}
});

interface credentialsProps {
    authname: string;
    password?: string;
    captcha?: string;
}

export const getToken = async (credentials: credentialsProps) => instance.post('/token/', credentials).then(res => res.data)

// 请求拦截器
instance.interceptors.request.use(
    config => {
        const tokenString = localStorage.getItem('token') as string;
        const userToken = JSON.parse(tokenString);
        const access =  userToken?.access
        if (access) {
            config.headers.Authorization = `Bearer ${access}`
        }
        return config
    }, error => {
        return Promise.reject(error)
    }
)

// 响应拦截器
instance.interceptors.response.use(
    response => {
        return response
    }, error => {
        message.error(JSON.stringify(error.response.data))
        return Promise.reject(error)
    }
)

export default instance;
