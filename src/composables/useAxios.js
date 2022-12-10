import axios from "axios";

function useAxios() {
    const instance = axios.create({
        timeout: 1000,
        baseURL: "http://localhost:5173",
        headers: {
            "Content-Type": "application/json"
        }
    });

    instance.interceptors.request.use(config => {
        return config;
    }, error => {
        return Promise.reject(error);
    });

    instance.interceptors.response.use(response => {
        return response;
    }, error => {
        return Promise.reject(error);
    });

    return instance;
}

export default useAxios;