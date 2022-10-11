import React from 'react'
import '../../../Assets/Css/playlist.css'
import Card from '../../Common/Card'
import HeadingStrip from '../../Common/HeadingStrip'
function SinglePlaylist() {
    return (
        <>
            <section className='playlist-container ps-3' >
                <main className='playlist-wrapper scroller'>

                    <div className='mb-5'>
                        <HeadingStrip head={"Playlists > How to process with tree grafting without..."} sub={false} subhead={"Playlist"} />
                        <div className='d-flex flex-wrap mt-3'>
                            <Card />
                        </div>
                    </div>

                </main>
            </section>
        </>
    )
}

export default SinglePlaylist