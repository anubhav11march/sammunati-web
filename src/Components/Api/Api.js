import axios from "axios";
 let token = localStorage.getItem('accessToken')
 console.log(token)
const API = axios.create({
  baseURL: "https://samunnatibackend.herokuapp.com",
});
const SecuredAPI = axios.create({
  baseURL: "https://samunnatibackend.herokuapp.com",
  header:{
    "x-access-token":  `${token}`
  }
});
// signup
export const PostUser = (data) => API.post("/api/user/signup",data);
export const LoginUser = (data) => API.post("/api/user/signin",data);
export const UpdateUser = (data) => SecuredAPI.put("/api/user/",data);
