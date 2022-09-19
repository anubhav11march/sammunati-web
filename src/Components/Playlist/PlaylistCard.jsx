import React from 'react'
import '../../Assets/Css/playlistcard.css'
import cardImage from '../../Assets/Images/cardImage.jpg'
import { useNavigate } from 'react-router-dom'
import LiveTvIcon from '@mui/icons-material/LiveTv';
  
function PlaylistCard() {
    const navigate = useNavigate();
    return (
        <>
            <div onClick={() => navigate('/playlist/123')} className="card position-relative me-4 mb-4 " style={{ width: "22%", cursor: "pointer" }}>
                <img className="card-img-top" src={cardImage} alt="Card image cap" />
                <span className='playlistcard-video-size'>
                     <p>23</p>

                     <LiveTvIcon/>
                </span>
                <div className="card-body playlistcard-custom-body">
                    <h5>How to process with tree grafting without damaging the roots</h5>

                    {/* <p className="card-text my-2">How to process with tree grafting lorem without damaging</p> */}

                    <div className="d-flex my-3 justify-content-between upload-details">
                        <p className='upload-Text'> 27 Videos</p>
                        <p>12 Hrs 30 Mins </p>
                    </div>
                    <button className='btn btn-sm my-2 btn-outline-primary'>45% Complete</button>
                </div>
            </div>
        </>
    )
}

export default PlaylistCard