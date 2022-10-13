import React, { useState, useEffect } from "react";
import "../../Assets/Css/home.css";
import "../../Assets/Css/headingstrip.css";
import { Pagination } from "antd";
import HeadingStrip from "../Common/HeadingStrip";
import Card from "../Common/Card";
import {
  getAllVideos,
  getFeaturedVideos,
  getMostViewedVideos,
  GetVideos,
} from "../Api/Api";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  ALL_VIDEOS,
  FEATURED_VIDEOS,
  HOME_VIDEOS,
  MOST_VIEWED_VIDEOS,
} from "../Helper/types";

function Home() {
  const [featuredVideos, setfeaturedVideos] = useState([]);
  const [mostViewedVideos, setMostViewedVideos] = useState([]);
  const [allVideos, setAllVideos] = useState([]);
  const [currDisplay, setCurrDisplay] = useState(HOME_VIDEOS);
  // States for pagination
  const [featuredPage, setFeaturedPage] = useState(0);
  const [mostViewedPage, setMostViewedPage] = useState(0);
  const [allVideoPage, setAllVideoPage] = useState(0);
  const [totalFeaturedCount, setTotalFeaturedCount] = useState(0);
  const [totalMostViewedCount, setTotalMostViewedCount] = useState(0);
  const [totalAllVideoCount, setTotalAllVideoCount] = useState(0);

  const fetchFeaturedVideos = async (page) => {
    try {
      const data = await getFeaturedVideos(page);
      setfeaturedVideos(data?.data?.data);
      setTotalFeaturedCount(data?.data?.pageLimit);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchMostViewedVideos = async (page) => {
    try {
      const data = await getMostViewedVideos(page);
      setMostViewedVideos(data?.data?.data);
      setTotalMostViewedCount(data?.data?.pageLimit);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchAllVideos = async (page) => {
    try {
      const data = await getAllVideos(page);
      setAllVideos(data?.data?.data);
      setTotalAllVideoCount(data?.data?.pageLimit);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFeaturedVideos(0);
    fetchMostViewedVideos(0);
    fetchAllVideos(0);
  }, []);

  return (
    <>
      <section className="home-container ps-3">
        <main className="home-wrapper scroller">
          {/* featured video */}
          {currDisplay === HOME_VIDEOS || currDisplay === FEATURED_VIDEOS ? (
            <div>
              <div className="w-100 d-flex justify-content-between headingStrip-wrapper py-2 pe-5">
                <h4>Featured Videos</h4>
                {currDisplay === HOME_VIDEOS ? (
                  <h5 onClick={() => setCurrDisplay(FEATURED_VIDEOS)}>
                    View all featured videos <KeyboardArrowRightIcon />
                  </h5>
                ) : (
                  <div>
                    <div onClick={() => setCurrDisplay(HOME_VIDEOS)}> Back</div>
                    <Pagination
                      current={featuredPage + 1}
                      total={totalFeaturedCount}
                      defaultPageSize={10}
                      onChange={(clickedPage) => {
                        fetchFeaturedVideos(clickedPage - 1);
                        setFeaturedPage(clickedPage - 1);
                      }}
                    />
                  </div>
                )}
              </div>
              <div className="d-flex flex-wrap ">
                {featuredVideos?.map((item, index) => {
                  return (
                    <Card
                      index={index}
                      key={index}
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
            </div>
          ) : null}

          {/* Most viewed video */}

          {currDisplay === HOME_VIDEOS || currDisplay === MOST_VIEWED_VIDEOS ? (
            <div>
              <div className="w-100 d-flex justify-content-between headingStrip-wrapper py-2 pe-5">
                <h4>Most Viewed Videos</h4>
                {currDisplay === HOME_VIDEOS ? (
                  <h5 onClick={() => setCurrDisplay(MOST_VIEWED_VIDEOS)}>
                    View all most viewed videos <KeyboardArrowRightIcon />
                  </h5>
                ) : (
                  <div>
                    <div onClick={() => setCurrDisplay(HOME_VIDEOS)}> Back</div>
                    <Pagination
                      current={mostViewedPage + 1}
                      total={totalMostViewedCount}
                      defaultPageSize={10}
                      onChange={(clickedPage) => {
                        fetchMostViewedVideos(clickedPage - 1);
                        setMostViewedPage(clickedPage - 1);
                      }}
                    />
                  </div>
                )}
              </div>
              <div className="d-flex flex-wrap ">
                {mostViewedVideos?.map((item, index) => {
                  return (
                    <Card
                      index={index}
                      key={index}
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
            </div>
          ) : null}

          {/* All videos */}

          {currDisplay === HOME_VIDEOS || currDisplay === ALL_VIDEOS ? (
            <div>
              <div className="w-100 d-flex justify-content-between headingStrip-wrapper py-2 pe-5">
                <h4>All Videos</h4>
                {currDisplay === HOME_VIDEOS ? (
                  <h5 onClick={() => setCurrDisplay(ALL_VIDEOS)}>
                    View all videos <KeyboardArrowRightIcon />
                  </h5>
                ) : (
                  <div>
                    <div onClick={() => setCurrDisplay(HOME_VIDEOS)}> Back</div>
                    <Pagination
                      current={allVideoPage + 1}
                      total={totalAllVideoCount}
                      defaultPageSize={10}
                      onChange={(clickedPage) => {
                        fetchAllVideos(clickedPage - 1);
                        setAllVideoPage(clickedPage - 1);
                      }}
                    />
                  </div>
                )}
              </div>
              <div className="d-flex flex-wrap ">
                {allVideos?.map((item, index) => {
                  return (
                    <Card
                      index={index}
                      key={index}
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
            </div>
          ) : null}
        </main>
      </section>
    </>
  );
}

export default Home;
