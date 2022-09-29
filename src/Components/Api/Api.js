import axios from "axios";
let token = localStorage.getItem('accessToken')
const headers = {
  "x-access-token":token
}
const API = axios.create({
  baseURL: "https://samunnatibackend.herokuapp.com",
});
const SecuredAPI = axios.create({
  baseURL: "https://cors-everywhere.herokuapp.com/https://samunnatibackend.herokuapp.com",
});
// signup
export const PostUser = (data) => API.post("/api/user/signup", data);
export const LoginUser = (data) => API.post("/api/user/signin", data);

export const UpdateUser = (data) => SecuredAPI.put("/api/user/", data,{headers:headers});
export const AddQuery = (data) => API.post("/api/user/query", data );


export const GetVideos = () => SecuredAPI.get("/api/admin/video?videoIndex=0" );
