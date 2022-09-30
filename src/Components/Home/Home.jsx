import React,{useState,useEffect} from 'react'
import Header from '../Common/Header'
import '../../Assets/Css/home.css'
import HeadingStrip from '../Common/HeadingStrip'
import Card from '../Common/Card'
import { GetVideos } from '../Api/Api'
function Home() {
  const [featuredVideos, setfeaturedVideos] = useState([])

  const getFeaturedVideos =async()=>{
    try {
    
      const data =await GetVideos();
      console.log(data)
      setfeaturedVideos(data?.data?.data)
    } catch (error) {
      console.log(error)
        }
  }

  useEffect(() => {
    getFeaturedVideos()
  }, []);
  return (

    <>
    
      <section className='home-container ps-3' >
        <main className='home-wrapper scroller'>
        
          {/* feature */}

          <div className='mb-5'>
            <HeadingStrip head={"Featured Videos"} subhead={"featured"}/>
            <div className='d-flex flex-wrap '>
                {
                  featuredVideos?.map((item,index)=>{
                    return <Card 
                      index={index}
                      key={index}
                      id={item._id}
                      duration = {item.duration}
                      length={item.length}
                      thumbnail={item.thumbnail}
                      url = {item.url}
                      date={item.date}
                      uploadby={item.uploadedBy}
                      title={item.title}
                      description={item.description}
                                         />
                  })
                }

                
                
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