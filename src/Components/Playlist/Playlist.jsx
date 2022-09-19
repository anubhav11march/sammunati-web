import React from 'react'
import '../../Assets/Css/playlist.css'
import HeadingStrip from '../Common/HeadingStrip'
import PlaylistCard from './PlaylistCard'

function Playlist() {
    return (
        <>
            <section className='playlist-container ps-3' >
                <main className='playlist-wrapper scroller'>

                    <div className='mb-5'>
                        <HeadingStrip head={"Playlist"} sub={false} subhead={"Playlist"} />
                        <div className='d-flex flex-wrap'>
                            <PlaylistCard />
                            <PlaylistCard />
                            <PlaylistCard />
                            <PlaylistCard />
                            <PlaylistCard />
                            <PlaylistCard />
                            <PlaylistCard />
                            <PlaylistCard />
                            <PlaylistCard />
                        </div>
                    </div>

                </main>
            </section>
        </>
    )
}

export default Playlist