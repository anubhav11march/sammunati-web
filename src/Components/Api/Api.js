import axios from "axios";

let token = JSON.parse(localStorage.getItem("accessToken")) || "";


const API = axios.create({
  baseURL: "https://samunnatibackend.herokuapp.com",
});

const SecuredAPI = axios.create({
  baseURL:
    "https://samunnatibackend.herokuapp.com",
  headers: {
    token: `${token}`,
  },
});


SecuredAPI.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  if( error.response.data.code===401  &&  error.response.data.message==="Authorizatin failed. Please sign in."){
    localStorage.removeItem('token');
    localStorage.removeItem('accessToken');
    window.location.replace(`/login`);
  }
  console.log(error);
  return Promise.reject(error);
});


export const PostUser = (data) => API.post("/api/user/signup", data);
export const LoginUser = (data) => API.post("/api/user/signin", data);
export const GetUser = () => SecuredAPI.get("/api/user");

export const UpdateUser = (data) => SecuredAPI.put("/api/user/", data);
export const AddQuery = (data) => API.post("/api/user/query", data);

export const GetVideos = () => API.get("/api/user/video/category?videoIndex=0");

export const GetVideosById = (id) => API.get(`/api/user/video/${id}`);

export const getCategoriesList = () => API.get(`api/admin/categoryPlaylist`);

export const getVideosByCategory = (page, category) => {
  return API.get(`api/user/video/category`, {
    params: {
      videoIndex: page,
      category: category,
    },
  });
};

export const getBlogs= (page) => {
  return API.get(`api/user/blog`, {
    params: {
      blogIndex: page,
    },
  });
};

export const getBlog= (id) => {
  return API.get(`api/user/blog/${id}`);
};

export const getPlaylists= () => {
  return API.get(`api/user/video/playlists`);
};

export const getPlaylist= (playlist,page) => {
  return API.get(`api/user/video/playlist`,{
    params:{
      playlist:playlist,
      videoIndex:page,
    }
  });
};


export const likeBlog= (values) => {
  return SecuredAPI.put(`api/user/blog`, values);
};

export const likeVideo= (values) => {
  return SecuredAPI.put(`api/user/videoStat`, values);
};
