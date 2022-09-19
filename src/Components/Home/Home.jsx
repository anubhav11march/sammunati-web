import React from 'react'
import Header from '../Common/Header'
import '../../Assets/Css/home.css'
import HeadingStrip from '../Common/HeadingStrip'
import Card from '../Common/Card'
function Home() {
  return (
    <>
      <section className='home-container ps-3' >
        <main className='home-wrapper scroller'>
        
          {/* feature */}

          <div className='mb-5'>
            <HeadingStrip head={"Featured Videos"} subhead={"featured"}/>
            <div className='d-flex '>
                <Card  />
                <Card  />
                <Card  />
                <Card  />
            </div>
          </div>
          

        {/* Most viewed video */}

        <div className='mb-5'>
            <HeadingStrip head={"Most Viewed "} subhead={"most viewed"}/>
            <div className='d-flex'>
                <Card  />
                <Card  />
                <Card  />
                <Card  />
            </div>
          </div>


        {/* All videos */}

        <div className='mb-5'>
            <HeadingStrip head={"All Videos"} />
            <div className='d-flex flex-wrap'>
                <Card  />
                <Card  />
                <Card  />
                <Card  />
            </div>
          </div>

        </main>
      </section>
    </>
  )
}

export default Home