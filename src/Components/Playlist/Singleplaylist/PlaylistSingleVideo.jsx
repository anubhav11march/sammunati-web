import ShareIcon from "@mui/icons-material/Share";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import videojs from "video.js";
import "../../../Assets/Css/playlistsinglevideo.css";
import channelLogo from "../../../Assets/Images/cardImage.jpg";
import { getPlaylist, GetVideosById, likeVideo } from "../../Api/Api";
import VideoJS from "../../Common/VideoPlayer";
import RelatedCards from "./RelatedCards";
function PlaylistSingleVideo() {
    const { t } = useTranslation(["main"]);
    const param = useParams();
    const categoryId = param?.id1;
    const videoId = param?.id2;

    const [VideoData, setVideoData] = useState([]);
    const [videoJsOptions, setVideoJsOptions] = useState({});
    const [copy, setCopy] = useState(false);
    const [videoList, setVideoList] = useState([]);
    const [totalCount, setTotalCount] = useState(0);

    const getData = async () => {
        try {
            const data = await GetVideosById(param?.id2);
            setVideoData(data?.data?.data);
            setVideoJsOptions({
                autoplay: true,
                controls: true,
                responsive: true,
                playbackRates: [0.5, 1, 1.25, 1.5, 2],
                width: 720,
                height: 300,

                sources: [
                    {
                        src: data?.data?.data?.url,
                        type: "video/mp4",
                    },
                ],
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, [param?.id2]);
    const playerRef = React.useRef(null);

    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on("waiting", () => {
            VideoJS.log("player is waiting");
        });

        player.on("dispose", () => {
            videojs.log("player will dispose");
        });
    };

    const handleLike = async () => {
        try {
            const res = await likeVideo({ videoId: videoId, action: "0" });
            getData();
        } catch (e) {
            console.log(e);
        }
    };

    const copyLink = () => {
        setCopy(true);
        navigator.clipboard.writeText(window.location.href);
        setTimeout(() => setCopy(false), 1500);
    };

    const fetchVideos = async (page) => {
        try {
            const res = await getPlaylist(categoryId, page);
            setVideoList(res.data.data);
            setTotalCount(res.data.pageLimit);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        fetchVideos(0);
    }, []);

    return (
        <>
            <section className="flex-column container-fluid px-0  ">
                <div className="video-container" style={{ Height: "100px" }}>
                    <VideoJS
                        options={videoJsOptions}
                        onReady={handlePlayerReady}
                        data-setup='{"fluid": true}'
                    />
                </div>
                <main className="video-detail-wrapper container-xxl py-5 d-flex">
                    <div className="col-8">
                        <div className="flex-column">
                            <div className="d-flex justify-content-between video-detail-head">
                                <h3>{VideoData?.title}</h3>
                                <div className="d-flex">
                                    <Button
                                        className="me-5 align-items-center"
                                        onClick={handleLike}
                                    >
                                        <ThumbUpOffAltIcon /> Like{" "}
                                        {VideoData?.videoStatId?.likes}
                                    </Button>
                                    <Button
                                        className={`${copy && "copied"}`}
                                        onClick={() => copyLink()}
                                        size="small text-dark  align-self-flex-end"
                                    >
                                        <ShareIcon />
                                    </Button>
                                    {/* <span className='align-items-center'><ThumbDownOffAltIcon /> Dislike</span> */}
                                </div>
                            </div>
                            <p>
                                {VideoData?.videoStatId?.views} views |{" "}
                                {VideoData?.date}
                            </p>
                        </div>

                        <hr />

                        <div className="video-description">
                            <figure className="d-flex align-items-center">
                                <img src={channelLogo} alt="Noimg" />
                                <figcaption>
                                    {" "}
                                    {VideoData?.uploadedBy}
                                </figcaption>
                            </figure>
                            <p>{VideoData?.description}</p>
                        </div>
                    </div>
                    <aside className="playlist-sideplaylist px-2">
                        <h5 className="mb-4">Next in Playlist</h5>
                        <div>
                            {videoList.map((item) => (
                                <RelatedCards
                                    videoId={videoId}
                                    categoryId={categoryId}
                                    key={item._id}
                                    item={item}
                                />
                            ))}
                        </div>
                    </aside>
                </main>
            </section>
        </>
    );
}

export default PlaylistSingleVideo;
