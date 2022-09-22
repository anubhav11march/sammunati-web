import axios from "axios";
const API = axios.create({
  baseURL: "https://samunnatibackend.herokuapp.com",
});

// signup
export const PostUser = (data) => API.post("/api/user/signup",data);
export const LoginUser = (data) => API.post("/api/user/isLoggedIn",data);
