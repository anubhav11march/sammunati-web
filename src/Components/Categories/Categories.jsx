import React, { useEffect, useState } from "react";
import "../../Assets/Css/category.css";
import "../../Assets/Css/headingstrip.css";
import "../../Assets/Css/pagination.css";
import { getCategoriesList, getVideosByCategory } from "../Api/Api";
import { useTranslation } from 'react-i18next';
import Card from "../Common/Card";
import { Pagination } from "antd";

function Categories() {
  const [categoriesList, setCategoriesList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [videoList, setVideoList] = useState([]);
  const [page, setPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const { t } = useTranslation(["main"]);

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

  const fetchVideoByCategory = async (page) => {
    try {
      const res = await getVideosByCategory(page, selectedCategory);
      setVideoList(res.data.data);
      setTotalCount(res.data.pageLimit);
    } catch (e) {
      console.log(e);
    }
  };
  const handlePageChange = (clickedPage) => {
    fetchVideoByCategory(clickedPage - 1);
    setPage(clickedPage - 1);
  };

  useEffect(() => {
    fetchCategoriesList();
  }, []);

  useEffect(() => {
    fetchVideoByCategory(0);
  }, [selectedCategory]);

  return (
    <>
      <section className="category-wrapper d-flex">
        <main className="categoryList ">
          <h5 className="p-3 pb-0"> {t('categories')}  </h5>
          <hr />
          <ul className="px-2 scroller">
            <li
              className={` ${
                selectedCategory === "" ? "active-category" : ""
              }  `}
              onClick={() => handleCategory("")}
            >
            {t('All')}
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
           {t('categories')}       : {selectedCategory === "" ? `${t('All')}` : selectedCategory}
            </h4>
            <div className="d-flex justify-content-center align-items-center">
              <Pagination
                current={page + 1}
                total={totalCount}
                defaultPageSize={10}
                onChange={handlePageChange}
              />
            </div>
          </div>
          <div className="d-flex flex-wrap">
            {videoList.map((item, index) => {
              return (
                <Card
                  key={index}
                  index={index}
                  id={item._id}
                  duration={item.duration}
                  length={item.length}
                  thumbnail={item.thumbnail}
                  url={item.url}
                  date={item.date}
                  uploadby={item.uploadedBy}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
          </div>
        </main>
      </section>
    </>
  );
}

export default Categories;
