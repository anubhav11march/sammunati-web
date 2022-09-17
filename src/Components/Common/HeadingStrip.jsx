import React from 'react'
import '../../Assets/Css/headingstrip.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function HeadingStrip(prop) {
  return (
    <div className='w-100 d-flex justify-content-between headingStrip-wrapper py-2 pe-5' >
        <h4>{prop.head}</h4>
        <h5>View all {prop.subhead} videos <KeyboardArrowRightIcon/></h5>
    </div>
  )
}

export default HeadingStrip