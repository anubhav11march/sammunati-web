import React from 'react'
import HeadingStrip from '../Common/HeadingStrip'
import '../../Assets/Css/faq.css'
import { useTranslation } from 'react-i18next';

import CustomizedAccordions from './Accordian'
function Faq() {
  const { t } = useTranslation(["main"]);

    return (
        <>
            <section className='faq-wrapper ps-3'>
                <HeadingStrip head={"Frequently asked questions"} sub={false} />

                <main className='faq-content mt-4 col-7' >
                        <div className='mb-3'>
                            <CustomizedAccordions/>
                        </div>
                        <div className='mb-3'>
                            <CustomizedAccordions/>
                        </div>
                        <div className='mb-3'>
                            <CustomizedAccordions/>
                        </div>
                        <div className='mb-3'>
                            <CustomizedAccordions/>
                        </div>


                        


                </main>
            </section>
        </>
    )
}

export default Faq