import React, { useEffect, useState } from "react";
import "../../Assets/Css/playlist.css";
import "../../Assets/Css/headingstrip.css";
import PlaylistCard from "./PlaylistCard";
import { getPlaylists } from "../Api/Api";
import { useTranslation } from 'react-i18next';

function Playlist() {
  const [playlist, setPlaylist] = useState([]);

  const fetchPlaylists = async () => {
    try {
      const res = await getPlaylists();
      setPlaylist(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPlaylists();
  }, []);

  const { t } = useTranslation(["main"]);

  return (
    <>
      <section className="playlist-container ps-3">
        <main className="playlist-wrapper scroller">
          <div className="mb-5">
            <div className="w-100 d-flex justify-content-between headingStrip-wrapper py-2 pe-5">
              <h4>{t("playlist")} </h4>
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
