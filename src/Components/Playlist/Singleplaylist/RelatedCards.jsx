import React from 'react'
import '../../../Assets/Css/playlist.css'
import cardImage from '../../../Assets/Images/cardImage.jpg'

function RelatedCards() {
  return (
    <>
    <div className='d-flex playlist-related-card'>
        <img src={cardImage} alt="" />
        <div className='playlist-related-card-content p-3'>
            <h6>2 - How to turn on windows easily</h6>
            <p>Sammunati</p>
            <p>9999 Views | Aug 25, 2022</p>
        </div>
    </div>

    </>
  )
}

export default RelatedCards