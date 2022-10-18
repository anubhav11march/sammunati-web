import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../Assets/Css/playlist.css";

function RelatedCards({ item, videoId, categoryId }) {
    const [playing, setPlaying] = useState(false);
    const navigate = useNavigate();
    const { _id, thumbnail, title, uploadedBy, viewCount, date } = item;

    const nowPlaying = () => {
        if (videoId === _id) {
            setPlaying(true);
        } else {
            setPlaying(false);
        }
    };

    useEffect(() => {
        nowPlaying();
    }, [_id, videoId]);

    return (
        <>
            <div
                onClick={() => {
                    navigate(`/playlist/${categoryId}/video/${_id}`);
                }}
                className={`d-flex playlist-related-card ${
                    playing ? "now_playing" : ""
                }`}
            >
                <img src={thumbnail} alt="" />
                <div className="playlist-related-card-content p-3">
                    <h6>{title}</h6>
                    <p>{uploadedBy}</p>
                    <p>
                        {viewCount} | {date}
                    </p>
                </div>
            </div>
        </>
    );
}

export default RelatedCards;
