import ShareIcon from "@mui/icons-material/Share";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "video-player-for-react/dist/index.css";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "../../Assets/Css/singlevideo.css";
import channelLogo from "../../Assets/Images/cardImage.jpg";
import { GetVideosById, likeVideo } from "../Api/Api";
import VideoJS from "./VideoPlayer";

function SingleVideo() {
    const param = useParams();
    const currId = param?.id;
    const [copy, setCopy] = useState(false);
    const [VideoData, setVideoData] = useState([]);
    const [videoJsOptions, setVideoJsOptions] = useState({});
    const getData = async () => {
        try {
            const data = await GetVideosById(param?.id);
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
    }, []);

    // video player
    const playerRef = React.useRef(null);

    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on("waiting", () => {
            videojs.log("player is waiting");
        });

        player.on("dispose", () => {
            videojs.log("player will dispose");
        });
    };

    const handleLike = async () => {
        try {
            const res = await likeVideo({ videoId: currId, action: "0" });
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

    return (
        <>
            <section className="flex-column container-fluid px-0 w-100 ">
                {/* <ReactPlayer width="100%" height="60vh" controls url={video} /> */}
                {/* <ReactVideoPlayer
            width="80vw"
            height="500px"
            url={VideoData?.url ? (VideoData?.url):(video)}
            type='video/mp4'
            Fullscreen mode
      
    /> */}
                <div className="video-container" style={{ Height: "100px" }}>
                    <VideoJS
                        options={videoJsOptions}
                        onReady={handlePlayerReady}
                        data-setup='{"fluid": true}'
                    />
                </div>

                <main className="video-detail-wrapper container py-5 ">
                    <div className="col-10">
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
                </main>
            </section>
        </>
    );
}

export default SingleVideo;
