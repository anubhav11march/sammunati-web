import React, { useEffect, useState } from "react";
import HeadingStrip from "../Common/HeadingStrip";
import BlogCard from "./BlogCard";
import "../../Assets/Css/blog.css";
import { getBlogs } from "../Api/Api";
import { Pagination } from "antd";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(-1);

  const fetchBlogs = async (page) => {
    try {
      const res = await getBlogs(page);
      setBlogs(res.data.data);
      setMaxPage(res.data.pageLimit);
    } catch (e) {
      console.log(e);
    }
  };
  const handlePageChange = (clickedPage) => {
    fetchBlogs(clickedPage - 1);
    setPage(clickedPage - 1);
  };

  useEffect(() => {
    fetchBlogs(0);
  }, []);

  return (
    <>
      <section className="w-100 scroller blog-wrapper ps-3">
      <div className="w-100 d-flex justify-content-between headingStrip-wrapper py-2 pe-5">
            <h4>
              Blogs
            </h4>
            <div>
            <Pagination
                current={page + 1}
                total={30}
                defaultPageSize={10}
                onChange={handlePageChange}
              />
            </div>
          </div>
        <main className="  d-flex flex-wrap">
          {blogs.map((item) => {
            return <BlogCard key={item._id} item={item} />;
          })}
        </main>
      </section>
    </>
  );
}

export default Blogs;
