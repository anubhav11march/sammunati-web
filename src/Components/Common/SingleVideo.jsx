import React,{useEffect,useState} from 'react'
import { ReactVideoPlayer } from 'video-player-for-react'
import 'video-player-for-react/dist/index.css'
import '../../Assets/Css/singlevideo.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import channelLogo from '../../Assets/Images/cardImage.jpg'
import video from '../../Assets/Images/v1.mp4'
import { useParams } from 'react-router-dom';
import { GetVideos, GetVideosById } from '../Api/Api';

function SingleVideo() {
    const param = useParams();
   const [VideoData, setVideoData] = useState([])

    const getData =async()=>{
      try {
        const data = await GetVideosById(param?.id)
        console.log(data?.data?.data)
        setVideoData(data?.data?.data)
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      getData();
    }, [])
    
  return (
    <>
      <section className='flex-column container-fluid px-0 w-100 '>
        {/* <ReactPlayer width="100%" height="60vh" controls url={video} /> */}
        <ReactVideoPlayer
            width="80vw"
            height="500px"
            url={VideoData?.url ? (VideoData?.url):(video)}
            type='video/mp4'
            Fullscreen mode
      // poster='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'
      // captions={[
      //   {
      //     kind: 'captions',
      //     label: 'English',
      //     srcLang: 'en',
      //     src: 'caption_url'
      //   }
      // ]}
    />
        <main className='video-detail-wrapper container py-5 '>
          <div className='col-10'>

            <div className='flex-column'>
              <div className='d-flex justify-content-between video-detail-head'>
                <h3>{VideoData?.title}</h3>
                <div className='d-flex'>
                  <span className='me-5 align-items-center'><ThumbUpOffAltIcon /> Like</span>
                  <span className='align-items-center'><ThumbDownOffAltIcon /> Dislike</span>
                </div>
              </div>
              <p>9999 views | {VideoData?.date}</p>
            </div>

            <hr />

            <div className='video-description'>
                <figure className='d-flex align-items-center'>
                    <img src={channelLogo} alt="Noimg" />
                    <figcaption> {VideoData?.uploadedBy}</figcaption>
                </figure>
                <p>
                    {VideoData?.description  }
                </p>
            </div>

          </div>
        </main>
      </section>
    </>
  )
}

export default SingleVideo