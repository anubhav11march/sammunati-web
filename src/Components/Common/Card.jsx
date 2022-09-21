import React from 'react'
import '../../Assets/Css/card.css'
import cardImage from '../../Assets/Images/cardImage.jpg'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
function Card(prop) {
  
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div onClick={()=> {location.pathname.includes('/playlist')?(navigate('/playlist/123/video/156')):(navigate('/videos/123')) } } className="card position-relative me-4 mb-4"  style={{maxWidth:250 ,cursor:"pointer"}}>
        <img className="card-img-top" src={cardImage} alt="Card image cap"/>
          <span className='card-video-length'>
              2:00
          </span>
          <div className="card-body card-custom-body">
            <h5>How to process with tree grafting without damaging the roots</h5>
            
            <p className="card-text my-2">How to process with tree grafting lorem without damaging</p> 
            
            <div className="d-flex my-2 justify-content-between upload-details">
                <p className='upload-Text'> Uploader Name</p>
                <p>20/08/2022 </p>
              </div>

          </div>
      </div>
    </>
  )
}
// `${prop.static ? (prop.static):("20vw")}`
export default Card