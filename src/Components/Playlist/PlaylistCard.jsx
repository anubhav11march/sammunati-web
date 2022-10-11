import React from 'react'
import '../../Assets/Css/playlistcard.css'
import cardImage from '../../Assets/Images/cardImage.jpg'
import { useNavigate } from 'react-router-dom'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { formatSecondsOtherFormat } from '../Helper/helperFunctions';
  
function PlaylistCard({item}) {
    const navigate = useNavigate();
    return (
        <>
            <div onClick={() => navigate(`/playlist/${item?._id}`)} className="card position-relative me-4 mb-4 " style={{ maxWidth: 250, cursor: "pointer" }}>
                <img className="card-img-top" src={item?.thumbnail} alt="Card image cap" />
                <div className='playlistcard-video-size'>
                     <span>{item?.count}</span>
                     <LiveTvIcon/>
                </div>
                <div className="card-body playlistcard-custom-body">
                    <h5>{item?._id}</h5>

                    {/* <p className="card-text my-2">How to process with tree grafting lorem without damaging</p> */}

                    <div className="d-flex my-3 justify-content-between upload-details">
                        <p className='upload-Text'>{`${item?.count} ${item?.count>1?"Videos":"Video" }`}</p>
                        <p>{formatSecondsOtherFormat(item?.duration) }</p>
                    </div>
                    {/* <button className='btn btn-sm my-2 btn-outline-primary'>45% Complete</button> */}
                </div>
            </div>
        </>
    )
}

export default PlaylistCard