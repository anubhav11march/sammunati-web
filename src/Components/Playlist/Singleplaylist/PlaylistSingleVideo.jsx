import React from 'react'
import ReactPlayer from 'react-player'
import '../../../Assets/Css/playlistsinglevideo.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import channelLogo from '../../../Assets/Images/cardImage.jpg'
import RelatedCards from './RelatedCards';
function PlaylistSingleVideo() {
    return (
        <>     
         <section className='flex-column container-fluid px-0  '>
            <ReactPlayer width="100%" height="60vh" controls url='https://youtu.be/9CvwbW9UhJc' />
            <main className='playlistvideo-detail-wrapper container py-5 d-flex'>
                <div className='col-8 pe-5'>

                    <div className='flex-column'>
                        <div className='d-flex justify-content-between playlistvideo-detail-head'>
                            <h3>How to build confidence in speaking</h3>
                            <div className='d-flex'>
                                <span className='me-5 align-items-center'><ThumbUpOffAltIcon /> Like</span>
                                <span className='align-items-center'><ThumbDownOffAltIcon /> Dislike</span>
                            </div>
                        </div>
                        <p>9999 views | Aug 25, 2022</p>
                    </div>

                    <hr />

                    <div className='playlistvideo-description'>
                        <figure className='d-flex align-items-center'>
                            <img src={channelLogo} alt="" />
                            <figcaption> Sammunati</figcaption>
                        </figure>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque molestiae possimus similique quis quas laudantium accusamus, excepturi saepe voluptatem nobis iusto et praesentium at perspiciatis quisquam doloribus reprehenderit Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus a esse sequi, assumenda perferendis porro aliquam. Fugiat sapiente consequuntur autem ad vero in, animi qui, quod voluptas magnam labore reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, quidem, iure omnis iste ullam doloremque adipisci atque distinctio sed a repudiandae dolores maxime quia alias quasi debitis ipsam reiciendis.lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quos soluta sed asperiores ducimus eum blanditiis ipsam necessitatibus? Cupiditate voluptatum quo expedita unde voluptates impedit, sed velit magnam omnis atque.
                            voluptatibus tenetur.
                        </p>
                    </div>

                </div>

                <aside className="playlist-sideplaylist px-2">
                        <h5 className='mb-4'>Next in Playlist</h5>
                            <div >
                                        <RelatedCards/>
                                        <RelatedCards/>
                                        <RelatedCards/>
                            </div>

                </aside>

            </main>
        </section>

        </>
    )
}

export default PlaylistSingleVideo