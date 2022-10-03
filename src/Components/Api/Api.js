import axios from "axios";
let token = JSON.parse(localStorage.getItem('accessToken'))
console.log(token)
const API = axios.create({
  baseURL: "https://samunnatibackend.herokuapp.com",
});
const SecuredAPI = axios.create({
  baseURL: "https://cors-everywhere.herokuapp.com/https://samunnatibackend.herokuapp.com",
    headers:{
        "token": `${token}`,
      }
    
});
// signup
//content
export const PostUser = (data) => API.post("/api/user/signup", data);
export const LoginUser = (data) => API.post("/api/user/signin", data);
export const GetUser = () => SecuredAPI.get("/api/user");

export const UpdateUser = (data) => SecuredAPI.put("/api/user/", data);
export const AddQuery = (data) => API.post("/api/user/query", data );


export const GetVideos = () => API.get("/api/admin/video?videoIndex=0" );
export const GetVideosById = (id) => API.get(`/api/admin/video/${id}` );


export const getCategoriesList = () => API.get(`api/admin/categoryPlaylist` );