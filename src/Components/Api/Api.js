import axios from "axios";

const API = axios.create({
  baseURL: "https://samunnati.onrender.com/",
});




API.interceptors.request.use((req) => {
  if (localStorage.getItem("accessToken")) {
    req.headers["token"] = `${localStorage.getItem("accessToken")}`;
  }
  return req;
});

API.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (
      error.response.data.code === 401 &&
      error.response.data.message === "Authorizatin failed. Please sign in."
    ) {
      // localStorage.removeItem('token');
      // localStorage.removeItem('accessToken');
      window.location.replace(`/login`);
    }
    console.log(error);
    return Promise.reject(error);
  }
);



export const PostUser = (data) => API.post("/api/user/signup", data);
export const LoginUser = (data) => API.post("/api/user/signin", data);

export const GetUser = () => {
  return API.get("/api/user");
};

export const UpdateUser = (data) => {
  return API.put("/api/user/", data);
};

export const AddQuery = (data) => API.post("/api/user/query", data);

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

export const getBlogs = (page) => {
  return API.get(`api/user/blog`, {
    params: {
      blogIndex: page,
    },
  });
};

export const getBlog = (id) => {
  return API.get(`api/user/blog/${id}`);
};

export const getPlaylists = () => {
  return API.get(`api/user/video/playlists`);
};

export const getPlaylist = (playlist, page) => {
  return API.get(`api/user/video/playlist`, {
    params: {
      playlist: playlist,
      videoIndex: page,
    },
  });
};

export const getFeaturedVideos = (page) => {
  return API.get(`api/user/video/featured`, {
    params: {
      videoIndex: page,
    },
  });
};
export const getMostViewedVideos = (page) => {
  return API.get(`api/user/video/mostViewed`, {
    params: {
      videoIndex: page,
    },
  });
};
export const getAllVideos = (page) => {
  return API.get(`api/user/video/getAll`, {
    params: {
      videoIndex: page,
    },
  });
};

export const likeBlog = (values) => {
  return API.put(`api/user/blog`, values);
};

export const likeVideo = (values) => {
  return API.put(`api/user/videoStat`, values);
};


export const uploadPhoto = async (values) => {
    console.log(values);
    const data = await axios.post(
        "https://aws-file-upload-v1.herokuapp.com/api/v2/samunnati/upload/file",
        values
    );
    return data?.data?.link;
};
