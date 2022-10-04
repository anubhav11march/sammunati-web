import React, { useEffect, useState } from "react";
import "../../Assets/Css/category.css";
import "../../Assets/Css/headingstrip.css";
import { getCategoriesList, getVideosByCategory } from "../Api/Api";
import Card from "../Common/Card";

function Categories() {
  const [categoriesList, setCategoriesList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [videoList, setVideoList] = useState([]);
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(-1);

  const handleCategory = (item) => {
    setSelectedCategory(item);
  };

  const fetchCategoriesList = async () => {
    try {
      const res = await getCategoriesList();
      setCategoriesList(res.data.data[0].category);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchVideoByCategory = async () => {
    try {
      const res = await getVideosByCategory(page, selectedCategory);
      setVideoList(res.data.data);
      setMaxPage(res.data.pageLimit);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchCategoriesList();
  }, []);

  useEffect(() => {
    fetchVideoByCategory();
  }, [selectedCategory]);

  return (
    <>
      <section className="category-wrapper d-flex">
        <main className="categoryList ">
          <h5 className="p-3 pb-0">Categories</h5>
          <hr />
          <ul className="px-2 scroller">
            <li
              className={` ${
                selectedCategory === "" ? "active-category" : ""
              }  `}
              onClick={() => handleCategory("")}
            >
              All
            </li>
            {categoriesList.map((item, i) => {
              return (
                <li
                  key={i}
                  onClick={() => handleCategory(item)}
                  className={` ${
                    selectedCategory === item ? "active-category" : ""
                  }  `}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </main>
        <main className="category-card-wrapper px-4">
          <div className="w-100 d-flex justify-content-between headingStrip-wrapper py-2 pe-5">
            <h4>
              Category: {selectedCategory === "" ? "All" : selectedCategory}
            </h4>
            <div>
              {Array.apply(null, Array(maxPage + 1)).map(function (x, i) {
                return <span className="m-1">{i}</span>;
              })}
            </div>
          </div>
          <div className="d-flex flex-wrap">
            {videoList.map((item) => {
              return <Card key={item._id} static="19.5vw" item={item} />;
            })}
          </div>
        </main>
      </section>
    </>
  );
}

export default Categories;
