import { useNavigate } from "react-router-dom";
import api from "./api";

export const login = async(email, password) => {
    try {
        const response = await api.post("/auth/login", {
          email: email,
          password: password,
        });
        localStorage.setItem('token', response.data.accessToken)
      } catch (error) {
        console.error(error);
      }
}

export const getAuthToken = () => {
    const token = localStorage.getItem('token')
    console.log(token);
    return token;
}


export const useLogout = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }
    return logout
}