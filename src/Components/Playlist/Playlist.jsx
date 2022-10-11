import React, { useEffect, useState } from "react";
import "../../Assets/Css/playlist.css";
import "../../Assets/Css/headingstrip.css";
import PlaylistCard from "./PlaylistCard";
import { getPlaylist } from "../Api/Api";

function Playlist() {
  const [playlist, setPlaylist] = useState([]);

  const fetchPlaylists = async (page) => {
    try {
      const res = await getPlaylist(page);
      setPlaylist(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPlaylists();
  }, []);

  return (
    <>
      <section className="playlist-container ps-3">
        <main className="playlist-wrapper scroller">
          <div className="mb-5">
            <div className="w-100 d-flex justify-content-between headingStrip-wrapper py-2 pe-5">
              <h4>Playlist</h4>
            </div>
            <div className="d-flex flex-wrap">
              {playlist.map((item) => {
                return <PlaylistCard key={item._id} item={item} />;
              })}
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Playlist;
