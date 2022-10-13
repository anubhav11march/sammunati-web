import React from 'react'
import '../../Assets/Css/headingstrip.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useTranslation } from 'react-i18next';

function HeadingStrip(prop) {
  let subhead = prop.sub===false ?(false) : true;
  const { t } = useTranslation(["main"]);

  return (
    <div className='w-100 d-flex justify-content-between headingStrip-wrapper py-2 pe-5' >
        <h4>{t(`${prop.head}`)}</h4>
        {
          subhead ? (
            <h5>View all {prop.subhead} videos <KeyboardArrowRightIcon/></h5>
          ):(null)
        }
    </div>
  )
}

export default HeadingStrip