import React from 'react'
import HeadingStrip from '../Common/HeadingStrip'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
function Contactus() {
  return (
    <>
        <section className='contact-wrapper w-100 ps-3'>
                <HeadingStrip head={"Contact Us"} sub={false}/>
                <h5>Hi! You can reach out to us on the following:</h5>
                <div className='d-flex align-items-center mt-4 '>
                    <LocalPhoneIcon/>
                    <p className='ms-3'>+91 99999 99999</p>
                </div>
                <div className='d-flex align-items-center mt-3 '>
                    <EmailIcon/>
                    <p className='ms-3'>example@email.com</p>
                </div>
                <div className='d-flex align-items-center mt-3'>
                    <HomeIcon/>
                    <p className='ms-3'>
                    address line one,
                        address line two, another line,
                        navi mumbai - 220041
                    </p>
                </div>
        </section>
    </>
  )
}

export default Contactus