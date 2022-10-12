import React from "react";
import "../../Assets/Css/card.css";
import cardImage from "../../Assets/Images/cardImage.jpg";
import { useNavigate } from "react-router-dom";
import { formatSeconds } from "../Helper/helperFunctions";
function Card(props) {
  const navigate = useNavigate();
  return (
    <div
      className="card position-relative me-4 mb-4"
      style={{ maxWidth: 250, minWidth: 250, cursor: "pointer" }}
      onClick={() => {
        navigate(`/videos/${props.id}`);
      }}
    >
    <div className="position-relative">

      <img
        className="card-img-top"
        src={props?.thumbnail}
        alt="Card image cap"
      />
      <span className="card-video-length">
        {formatSeconds(props?.duration)}
      </span>
    </div>

      <div className="card-body card-custom-body">
        <h5>{props?.title}</h5>

        <p className="card-text my-2">{props?.description}</p>

        <div className="d-flex my-2 justify-content-between upload-details">
          <p className="upload-Text">{props?.uploadedBy}</p>
          <p>{props?.date} </p>
        </div>
      </div>
    </div>
  );
}
export default Card;
