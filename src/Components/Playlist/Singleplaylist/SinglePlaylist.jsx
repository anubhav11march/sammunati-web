import React, { useState, useEffect } from "react";
import "../../../Assets/Css/playlist.css";
import { Pagination } from "antd";
import Card from "../../Common/Card";
import { getPlaylist } from "../../Api/Api";
import { useParams } from "react-router-dom";

function SinglePlaylist() {
  const [videoList, setVideoList] = useState([]);
  const [page, setPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const param = useParams();
  const currId = param?.id;

  const fetchVideos = async (page) => {
    try {
      const res = await getPlaylist(currId, page);
      setVideoList(res.data.data);
      setTotalCount(res.data.pageLimit);
    } catch (e) {
      console.log(e);
    }
  };
  const handlePageChange = (clickedPage) => {
    fetchVideos(clickedPage - 1);
    setPage(clickedPage - 1);
  };

  useEffect(() => {
    fetchVideos(0);
  }, []);

  return (
    <>
      <section className="playlist-container ps-3">
        <main className="playlist-wrapper scroller">
          <div className="mb-5">
            <div className="w-100 d-flex justify-content-between headingStrip-wrapper py-2 pe-5">
              <h4>Playlist : {currId}</h4>
              <div className="d-flex justify-content-center align-items-center">
                <Pagination
                  current={page + 1}
                  total={totalCount}
                  defaultPageSize={10}
                  onChange={handlePageChange}
                />
              </div>
            </div>
            <div className="d-flex flex-wrap mt-3">
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
          </div>
        </main>
      </section>
    </>
  );
}

export default SinglePlaylist;
