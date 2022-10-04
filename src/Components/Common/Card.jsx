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
      style={{ maxWidth: 250, cursor: "pointer" }}
      onClick={() => {
        navigate(`/videos/${props.item._id}`);
      }}
    >
      <div
        className="card position-relative me-4 mb-4"
        style={{ maxWidth: 250, cursor: "pointer" }}
      >
        <img
          className="card-img-top"
          src={props.item.thumbnail}
          alt="Card image cap"
        />
        <span className="card-video-length">
          {formatSeconds(props.item.duration)}
        </span>
        <div className="card-body card-custom-body">
          <h5>{props.item.title}</h5>

          <p className="card-text my-2">{props.item.description}</p>

          <div className="d-flex my-2 justify-content-between upload-details">
            <p className="upload-Text">{props.item.uploadedBy}</p>
            <p>{props.item.date} </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
