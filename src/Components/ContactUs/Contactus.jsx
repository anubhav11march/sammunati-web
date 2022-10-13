import React from 'react'
import HeadingStrip from '../Common/HeadingStrip'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import { useTranslation } from 'react-i18next';

function Contactus() {
    const { t } = useTranslation(["main"]);
 
    return (
    <>
        <section className='contact-wrapper w-100 ps-3'>
                <HeadingStrip head={"Contact us"} sub={false}/>
                <h5>{t("Hi you can reach out to us in the following")}</h5>
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