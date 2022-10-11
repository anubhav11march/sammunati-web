import React, { useEffect, useState } from "react";
import cardImage from "../../Assets/Images/cardImage.jpg";
import "../../Assets/Css/blog.css";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import { useParams } from "react-router-dom";
import { getBlog, likeBlog } from "../Api/Api";
function Singleblog() {
  const param = useParams();
  const currId = param?.id;
  const [info, setInfo] = useState();

  const fetchBlog = async () => {
    try {
      const res = await getBlog(currId);
      setInfo(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  const handleLike = async () => {
    try {
      const res = await likeBlog({ _id: currId });
      fetchBlog();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <section className="singleBlog-wrapper w-100 ">
        <main className="singleBlog-img-container">
          <img src={info?.thumbnail} alt="No blog " />
        </main>
        <div className="d-flex container my-4">
          <Button
            size="small"
            className="text-dark d-flex align-items-center"
            onClick={handleLike}
          >
            <FavoriteBorderIcon /> <span>{info?.likes}</span>
          </Button>
          <Button size="small" className="text-dark  align-self-flex-end">
            <ShareIcon />
          </Button>
        </div>
        <main className="container">
          <p>{info?.content}</p>
        </main>
      </section>
    </>
  );
}

export default Singleblog;
