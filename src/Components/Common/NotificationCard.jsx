import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import '../../Assets/Css/header.css'
import person from '../../Assets/Images/men.png'
import {Link} from 'react-router-dom'
function NotificationCard() {
  return (
    <>
        <div className="container notification-card py-3">
                <div className="d-flex align-items-center notification-content">
                        <img src={person} alt="Noimg" />
                        <h5 className='ps-4'>Dennis Matthew uploaded a new playlist: Taking care of the crops</h5>
                </div>
                            <span className="ps-5 d-flex justify-content-between "><p>Last Wednesday at 9:42 AM</p>  </span>
        </div>

    </>
  )
}

export default NotificationCard